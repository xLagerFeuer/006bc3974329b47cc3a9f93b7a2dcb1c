from flask import Flask, request, jsonify
import pandas as pd
import requests
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from transformers import LlamaForCausalLM, LlamaTokenizer

app = Flask(__name__)

# Load a pre-trained model and tokenizer for explanations
model_name = 'meta-llama/Llama-2-7b'  # Replace with the specific LLaMA model you want to use
model = LlamaForCausalLM.from_pretrained(model_name)
tokenizer = LlamaTokenizer.from_pretrained(model_name)

# Example API endpoints for fetching data
WORKERS_API_URL = "https://example.com/api/workers"
VACANCIES_API_URL = "https://example.com/api/vacancies"

def fetch_data(api_url):
    response = requests.get(api_url)
    return response.json()

def generate_explanation(worker_profile, job_title, similarity_score, matched_topics):
    prompt = f"Worker profile: {worker_profile}\nJob title: {job_title}\nSimilarity score: {similarity_score:.2f}\nMatched topics: {matched_topics}\nExplain why this job is recommended:"
    inputs = tokenizer(prompt, return_tensors='pt')
    outputs = model.generate(inputs['input_ids'], max_length=150, num_return_sequences=1)
    explanation = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return explanation

def get_recommendations_with_explanations(workers_df, vacancies_df, worker_index, top_n=3):
    job_topics = vacancies_df['job_topics'].tolist()
    vectorizer = TfidfVectorizer(stop_words='english')
    job_topics_tfidf = vectorizer.fit_transform(job_topics)
    
    worker_vector = np.array(workers_df.iloc[worker_index]['job_preference_vector']).reshape(1, -1)
    similarities = linear_kernel(worker_vector, job_topics_tfidf.toarray())
    sim_scores = list(enumerate(similarities[0]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[:top_n]
    job_indices = [i[0] for i in sim_scores]
    
    recommendations = []
    for idx, score in sim_scores:
        job = vacancies_df.iloc[idx]
        matched_topics = set(job['job_topics'].split(', ')).intersection(set(workers_df.iloc[worker_index]['preferred_topics'].split(', ')))
        explanation = generate_explanation(
            workers_df.iloc[worker_index]['preferred_topics'], 
            job['job_title'], 
            score, 
            ', '.join(matched_topics)
        )
        recommendations.append({
            "job": job.to_dict(),
            "explanation": explanation
        })
    
    return recommendations

@app.route('/recommendations', methods=['GET'])
def recommendations():
    workers_json = fetch_data(WORKERS_API_URL)
    vacancies_json = fetch_data(VACANCIES_API_URL)
    
    workers_df = pd.DataFrame(workers_json)
    vacancies_df = pd.DataFrame(vacancies_json)
    
    worker_id = request.args.get('worker_id', type=int)
    if worker_id is None:
        return jsonify({"error": "worker_id is required"}), 400
    
    worker_index = workers_df.index[workers_df['worker_id'] == worker_id].tolist()
    if not worker_index:
        return jsonify({"error": "worker_id not found"}), 404
    
    worker_index = worker_index[0]
    recommendations_with_explanations = get_recommendations_with_explanations(workers_df, vacancies_df, worker_index, top_n=3)
    
    return jsonify(recommendations_with_explanations)

if __name__ == '__main__':
    app.run(debug=True)
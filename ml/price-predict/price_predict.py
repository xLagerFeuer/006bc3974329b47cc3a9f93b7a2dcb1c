import numpy as np
from flask import Flask

app = Flask(__name__)

@app.route('/price_predict')
def get_price_predict(user_id):
    return np.random.normal(loc=550, scale=250)

if __name__=='__main__':
    app.run(port=5002)

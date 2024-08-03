import numpy as np
from flask import Flask

app = Flask(__name__)
import json

@app.route('/loyality_prediction')
def payment():
    return np.random.normal()

if __name__=='__main__':
    app.run(port=5001)

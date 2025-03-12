from flask import Flask, jsonify, request
import numpy as np

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Flask ML Service! Go to /predict for predictions."

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    # Example: process data, run ML model, etc.
    result = {"prediction": "Your result here"}
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

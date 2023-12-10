from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/github-webhook', methods=['POST'])
def github_webhook():
    payload = request.json  # Process GitHub payload here
    print(payload)  # Print the payload for testing
    return jsonify({'message': 'Received'})  # Return a response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  # Run the Flask app

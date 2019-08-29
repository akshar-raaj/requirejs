from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    with open('index.html') as f:
        content = f.read()
    return content


@app.route('/scripts/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

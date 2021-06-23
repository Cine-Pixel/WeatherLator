from flask import Flask
import requests, json

app = Flask(__name__)

api_url = "https://weatherapi-com.p.rapidapi.com/current.json"
f = open('secret.json')
api_key = json.load(f)
f.close()


def get_weather(city: str) -> requests.Response:
    querystring = {"q":city}
    headers = {
        'x-rapidapi-key': api_key["key"],
        'x-rapidapi-host': "weatherapi-com.p.rapidapi.com"
    }

    response = requests.request("GET", url=api_url, headers=headers, params=querystring)

    return response


@app.route("/api/<city>", methods=['GET'])
@app.route("/api", methods=['GET'])
def api(city="London"):
    response = get_weather(city)
    return response.text


if __name__ == "__main__":
    app.run(debug=True)

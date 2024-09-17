from datetime import date
import requests

url = 'http://localhost:3000/'
x = requests.get(url, headers = {"date":f"{str(date.today())}"})

print(x.text)
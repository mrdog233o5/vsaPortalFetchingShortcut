import requests

url = 'http://localhost:3000/'

x = requests.get(url, headers = {"test":"worked!"})

print(x.text)

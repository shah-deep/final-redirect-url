import requests
import urllib.parse

def get_final_url(url):
    response = requests.get(url)

    redirects = [url]
    for resp in response.history:
        redirects.append(resp.headers['Location'])

    return (response.url, redirects)


initial_url = 'https://tinyurl.com/yp2vaadn';
url_final, all_redirects = get_final_url(initial_url);

print("Final URL: " + url_final)
print("All redirects: " + " -> ".join(all_redirects))

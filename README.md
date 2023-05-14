# Get Final URL after Redirects
If a url automatically redirects to another url, this code will give final url after all redirects. 

For example, if you try to get images from google maps api, you get a temporary url that redirects to a static url for the image. This temporary url expires in some time and you need to make a new api call to get the same image (hence charging you again for same api call). 

Codes in this repository call **get_final_url** function to fetch the final static url after all redirects. You can save this url in your database and re-use it without the need to make an api call.



## Code:
 1. [Python](/python_code.py)
 2. [JavaScript](/javascript_code.js)
 3. [PHP](/php_code.php)



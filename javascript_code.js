function get_final_url(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == xhr.HEADERS_RECEIVED) {
        var finalUrl = xhr.responseURL;
        if (finalUrl !== url) {
          get_final_url(finalUrl, callback);
        } else {
          callback(finalUrl);
        }
      }
    };

    xhr.send(null);
}
  
  
get_final_url('https://tinyurl.com/yp2vaadn', function(finalUrl) {
    console.log(finalUrl);
});
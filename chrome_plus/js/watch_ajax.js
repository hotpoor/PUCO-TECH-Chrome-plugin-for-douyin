t = 0;
if (localStorage["xhs_dab"] == undefined){
  xhs_db = []
  localStorage["xhs_dab"]=JSON.stringify(xhs_db)
}
console.log("abc")
a = XMLHttpRequest.prototype;
open = a.open;
send = a.send;
console.log("abc aaa")
a.open = function(method, url) {
  // console.log("XHR.open");
  this._method = method;
  this._url = url;
  return open.apply(this, arguments);
};
c = XMLHttpRequest
a.onreadystatechange = a_get;
a.send = function(postData) {
  // console.log("XHR.send");
  this.addEventListener('load', function() {
    // if (this._url.indexOf("cooperator/blogger/v2") >= 0) {
    if (this._url.indexOf("cooperator/user/blogger/") >= 0) {
      
      xhs_db = JSON.parse(localStorage["xhs_dab"])
      xhs_db.push(this.responseText)
      localStorage["xhs_dab"]=JSON.stringify(xhs_db)
      // if (t<224){
      //   document.getElementsByClassName("pagination_cell")[8].click();
      //   t = t+1;
      // }
      return console.log(t);

    }
  });
  return send.apply(this, arguments);
};

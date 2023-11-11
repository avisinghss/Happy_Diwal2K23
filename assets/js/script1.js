function ak() {
    document.getElementById('dialogBox').style.transform = "rotateX(0deg)";
    document.getElementById('cover').style.zIndex = "1001";
    //  document.getElementById('cover').style.display = "block";
    document.getElementById('cover').style.opacity = "1";
  }

  function bk() {
    document.getElementById('dialogBox').style.transform = "rotateX(90deg)";
    document.getElementById('cover').style.zIndex = "0";
    //    document.getElementById('cover').style.display = "none";
    document.getElementById('cover').style.opacity = "0";
  }

  function onLoad() {
    function getParams() {
      var idx = document.URL.indexOf('?');
      var params = {}; // simple js object
      firstname = unescape(params["FirstName"]);
      alert(firstname);
    }
  }
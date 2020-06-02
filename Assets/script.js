var d = new Date();
document.getElementById("currentTime").innerHTML = d;


// geolocation

var APIKey = "33052e9e8amsh850a6e4503bd662p1ede3cjsn618b6bce7088";

 var queryURL = "https://apility-io-ip-geolocation-v1.p.rapidapi.com/%7Bip%7D" +
 "q=Bujumbura,Burundi&appid=" + APIKey;

// airport wait times:

var APIKey = "33052e9e8amsh850a6e4503bd662p1ede3cjsn618b6bce7088";

document.getElementById('button').addEventListener('click', loadWait);


// funcitn to load airport wait times
    function loadWait(){
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://tsa-wait-times.p.rapidapi.com/airports/test?APIKEY=test");
      xhr.setRequestHeader("x-rapidapi-host", "tsa-wait-times.p.rapidapi.com");
      xhr.setRequestHeader("x-rapidapi-key", "33052e9e8amsh850a6e4503bd662p1ede3cjsn618b6bce7088");
      xhr.onload = function(){
        if(this.status == 200){
          var wait = JSON.parse(this.responseText);

          var output = '';
          for(var i in wait){
            output +=
              '<div id="wait">' +
              '<ul id="waitTimes">' +
              '<li>Wait Time (hrs): '+wait[i].precheck+'</li>' +
              '<li>City: '+wait[i].city+'</li>' +
              '<li>Airport Code: '+wait[i].code+'</li>' +
              '<li>City: '+wait[i].state+'</li>' +
              '</ul>' +
              '</div>';
          }

          document.getElementById("wait").innerHTML = output;
        }
      }

      xhr.send();
    }
    xhr.send(data);

        

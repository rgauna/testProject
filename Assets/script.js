
 var queryURL = "https://apility-io-ip-geolocation-v1.p.rapidapi.com/%7Bip%7D" +
 "q=Bujumbura,Burundi&appid=" + APIKey;

 
// Image API Info
var imgaeAPIKey = '1XhY0EQp78t6XmGHtn59ng5GS1lh8DGX8IEyvFtWBII';
var imageSecretKey = 'pPLYR3b1xFOLPNeZVpb2G03orjzqA8kiMzUluQgBcqM';
var citySearch = document.getElementById('#city-input');
//.val()
var imgURL = 'https://api.unsplash.com/search/photos';
//changeBackground();
// var imageSecretKey = 'pPLYR3b1xFOLPNeZVpb2G03orjzqA8kiMzUluQgBcqM';
var citySearch = document.getElementById('city-input').nodeValue;
var searchbtn = document.getElementById('add-city');


//weatherapi
var weatherApi ="https://api.openweathermap.org/data/2.5/weather?q=";
var cityName = document.getElementById('city-input').value;
var weatherApiKey ="&appid=c32cee6b53ed48e0afdd9368ee69e073";
var units ="&units=imperial";
var todayUrl =weatherApi+cityName+weatherApiKey;

// airport wait times:


var APIKey = "33052e9e8amsh850a6e4503bd662p1ede3cjsn618b6bce7088";

document.getElementById('button').addEventListener('click', loadWait);


// function to load airport wait times
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
      xhr.send(data); 
    }


    $('#add-city').on('click', function(e){
        e.preventDefault();
        rotate();
        weather();
        $('#backgroundImg').empty();
        var citySearch = $('#city-input').val();
        var imgURL = 'https://api.unsplash.com/search/photos?query=' + citySearch + '&client_id=1XhY0EQp78t6XmGHtn59ng5GS1lh8DGX8IEyvFtWBII&per_page=1';
        $.ajax({
            url: imgURL,
            method: 'GET',
            success: function(data){
                console.log(data);
                data.results.forEach(photo => {
                    $('img').attr({src: photo.urls.regular});
                })
            }
        })
      })

    function rotate(){
        anime({
      targets: '#primaryP',
      rotateY: 250,
      direction: 'reverse',
      duration: 3000
    });
  }
  function weather(){
     $.ajax({
      url: todayUrl,
      method: "GET",
    }).then(function (response) {
      console.log(response);


      var cityElm =$("#city").empty();
      var cityNames =$("<h3>");
      cityNames.text("City Weather: "+response.name);
      cityElm.append(cityNames);

      var tempElm =$("#temp").empty();
      var temperature =$("<div>");
      temperature.text("temp: "+response.main.temp);
      tempElm.append(temperature);

      var humidityElm =$("#humidity").empty();
      var humidity =$("<div>");
      humidity.text("humidity: "+response.main.humidity);
      humidityElm.append(humidity);

      var windElm =$("#windSpeed").empty();
      var windSpeed =$("<div>");
      windSpeed.text("wind speed: "+response.wind.speed);
      windElm.append(windSpeed);
      
    });
  }
}

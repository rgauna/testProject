var d = new Date();
document.getElementById("currentTime").innerHTML = d;
var apiKey = "&appid=c32cee6b53ed48e0afdd9368ee69e073";
var apiToday = "https://api.openweathermap.org/data/2.5/weather?q=";
var cityArr = ["San Antonio"];
var todayUrl = apiToday+cityArr[0]+apiKey;
// geolocation

var APIKey = "33052e9e8amsh850a6e4503bd662p1ede3cjsn618b6bce7088";

 var queryURL = "https://apility-io-ip-geolocation-v1.p.rapidapi.com/%7Bip%7D" +
 "q=Bujumbura,Burundi&appid=" + APIKey;

// Image API Info
var imgaeAPIKey = '1XhY0EQp78t6XmGHtn59ng5GS1lh8DGX8IEyvFtWBII';
var imageSecretKey = 'pPLYR3b1xFOLPNeZVpb2G03orjzqA8kiMzUluQgBcqM';
var citySearch = document.getElementById('#city-input');
//.val()
var imgURL = 'https://api.unsplash.com/search/photos';
changeBackground();
// var imageSecretKey = 'pPLYR3b1xFOLPNeZVpb2G03orjzqA8kiMzUluQgBcqM';
var citySearch = document.getElementById('city-input').nodeValue;
var searchbtn = document.getElementById('add-city');

// Background image function
function initialRequest() {
    var imgURL = 'https://api.unsplash.com/search/photos/?query=' + citySearch;
    // var imgObj = new XMLHttpRequest();
    // imgObj.onreadystatechange = changeBackground;
    // imgObj.open('GET', imgURL, true);
    // imgObj.setRequestHeader('Authorization', '1XhY0EQp78t6XmGHtn59ng5GS1lh8DGX8IEyvFtWBII');
    //imgObj.send();

    $.ajax({
        url: 'https://api.unsplash.com/search/photos',
        dataType: 'json',
        method: 'GET',
        data:{
            query: 'citySearch', 
            client_id: '1XhY0EQp78t6XmGHtn59ng5GS1lh8DGX8IEyvFtWBII',
            page: 1,
            keyword: 'city',
        success: function(data){
            return data;   
        },
        error: function(error){
            console.log(error);
            }
        }
    })
}
$.ajax({
    url: todayUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var tempElm =$("#temp");
    var temperature =$("<div>");
    temperature.text("temp: "+response.main.temp);
    tempElm.append(temperature);
    temperature.text("temp: "+response.main.temp);
    tempElm.append(temperature);
    var humidityElm =$("#humidity");
    var humidity =$("<div>");
    humidity.text("humidity: "+response.main.humidity);
    humidityElm.append(humidity);
    var windElm =$("#windSpeed");
    var windSpeed =$("<div>");
    windSpeed.text("wind speed: "+response.wind.speed);
    windElm.append(windSpeed);

  });
  anime({
    targets: '#travl',
    rotateY: 250,
    direction: 'reverse'
  });
function rotate(){
      anime({
    targets: '#primaryP,#hotSpotP',
    rotateY: 250,
    direction: 'reverse'
  });
}

$('#add-city').on('click', function(event) {
rotate();
})

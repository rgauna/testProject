var d = new Date();
document.getElementById("currentTime").innerHTML = d;


// geolocation

var APIKey = "33052e9e8amsh850a6e4503bd662p1ede3cjsn618b6bce7088";

 var queryURL = "https://apility-io-ip-geolocation-v1.p.rapidapi.com/%7Bip%7D" +
 "q=Bujumbura,Burundi&appid=" + APIKey;

// Image API Info
var imgaeAPIKey = '1XhY0EQp78t6XmGHtn59ng5GS1lh8DGX8IEyvFtWBII';
var imageSecretKey = 'pPLYR3b1xFOLPNeZVpb2G03orjzqA8kiMzUluQgBcqM';
var citySearch = $('#city-input').val();
var imgURL = 'https://api.unsplash.com/search/photos';

// Background image function
function changeBackground() {
    $.ajax({
        url: imgURL,
        dataType: 'json',
        method: 'GET',
        data:{
            query: citySearch, 
            client_id: imgaeAPIKey,
        },
        success: function(data){
            console.log(data);
        }
    })
}
$('#add-city').on('click', function(event) {
    
})
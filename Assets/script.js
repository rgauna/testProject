var d = new Date();
document.getElementById("currentTime").innerHTML = d;


// geolocation

var APIKey = "33052e9e8amsh850a6e4503bd662p1ede3cjsn618b6bce7088";

 var queryURL = "https://apility-io-ip-geolocation-v1.p.rapidapi.com/%7Bip%7D" +
 "q=Bujumbura,Burundi&appid=" + APIKey;

// Image API Info
// var imgaeAPIKey = '1XhY0EQp78t6XmGHtn59ng5GS1lh8DGX8IEyvFtWBII';
// var imageSecretKey = 'pPLYR3b1xFOLPNeZVpb2G03orjzqA8kiMzUluQgBcqM';
var citySearch = document.getElementById('city-input').nodeValue;
var searchbtn = document.getElementById('add-city');

// Background image function
function initialrequest() {
    var imgURL = 'https://api.unsplash.com/search/photos/?query=' + citySearch;
    var imgObj = new XMLHttpRequest();
    imgObj.onreadystatechange = changeBackground;
    imgObj.open('GET', imgURL, true);
    imgObj.setRequestHeader('Authorization', '1XhY0EQp78t6XmGHtn59ng5GS1lh8DGX8IEyvFtWBII');
    imgObj.send();

    /*$.ajax({
        url: 'https://api.unsplash.com/search/photos',
        dataType: 'json',
        method: 'GET',
        data:{
            query: citySearch, 
            client_id: imgaeAPIKey,
            page: 1,
            keyword: 'city',
        success: function(data){
            console.log(data);   
        },
        error: function(error){
            console.log(error);
            }
        }
    })*/
}

function changeBackground(){
    if(this.readyState == 4 && this.status === 200){
        var response = JSON.parse(imgObj.responseText);
        console.log(response);
        var img = document.getElementById('backgroundImg');
        
        img.setAttributeNode(img) = response.results[0].user.profile_image.large;
    }
}

searchbtn.addEventListener('click', changeBackground);


var header1 = document.getElementById("header1");
var body1 = document.getElementById("body1");
var url1 = document.getElementById("url1");
var header2 = document.getElementById("header2");
var body2 = document.getElementById("body2");
var url2 = document.getElementById("url2");
var header3 = document.getElementById("header3");
var body3 = document.getElementById("body3");
var url3 = document.getElementById("url3");

var requestURL = 'https://api.thenewsapi.com/v1/news/top?api_token=1JHhYSZpbVMto5AgJ58VUygKJEFfTJrArZBoUqWC&language=en'

function newsAPI () {
    fetch (requestURL) 

    .then (function (response) {
        return response.json();
    })

    .then (function (data) {
        console.log(data);
        console.log(data.data[0].title);
        console.log(data.data[0].description);
        console.log(data.data[0].url);
        header1.textContent = data.data[0].title
        body1.textContent = data.data[0].description
        url1.textContent = data.data[0].url
        header2.textContent = data.data[1].title
        body2.textContent = data.data[1].description
        url2.textContent = data.data[1].url
        header3.textContent = data.data[2].title
        body3.textContent = data.data[2].description
        url3.textContent = data.data[2].url
        
        
                
    })
}

newsAPI()

var weatherURL = 'http://api.weatherapi.com/v1/current.json?key=770c8625070148199b402851221410&q=London'

function weatherAPI () {
    
    fetch (weatherURL)

    .then (function (response2) {
        return response2.json();
        
    })

    .then (function (data2){
        console.log(data2);
    })


}

weatherAPI()

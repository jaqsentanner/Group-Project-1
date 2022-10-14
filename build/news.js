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

        
          
    })
}

newsAPI()
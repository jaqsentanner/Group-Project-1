var news1 = document.getElementById("news1")
var news2 = document.getElementById("news2")
var news3 = document.getElementById("news3")
var requestURL = 'https://api.thenewsapi.com/v1/news/top?api_token=1JHhYSZpbVMto5AgJ58VUygKJEFfTJrArZBoUqWC'

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
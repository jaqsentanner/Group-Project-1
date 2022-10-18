let header1 = document.getElementById("header1");

let image = document.getElementById("imageJS")

let headerText

let newsImage

let requestURL = 'https://api.thenewsapi.com/v1/news/top?api_token=1JHhYSZpbVMto5AgJ58VUygKJEFfTJrArZBoUqWC&language=en'

let currentPage = 0

let add = 1

let maxPage = 5

let nextButton = document.getElementById("cycleButton")

nextButton.addEventListener("click", () => {
    currentPage += 1
    console.log("Page: " + currentPage)
    function newsAPI () {
        fetch (requestURL) 
    
        .then (function (response) {
            return response.json();
        })
    
        .then (function (data) {
            if (currentPage < maxPage){
                
                console.log(data)
                headerText = data.data[currentPage]["title"]
                newsImage = data.data[currentPage]["image_url"]
                header1.innerText = headerText
                image.src = newsImage
                
            }
            else {
                currentPage = 0
                console.log(data)
                headerText = data.data[currentPage]["title"]
                newsImage = data.data[currentPage]["image_url"]
                header1.innerText = headerText
                image.src = newsImage
                
            }    
        })
    }
    newsAPI()
})

function defaultNews() {
    fetch (requestURL) 
    
        .then (function (response) {
            return response.json();
        })
    
        .then (function (data) { 
            console.log(data)
            headerText = data.data[currentPage]["title"]
            newsImage = data.data[currentPage]["image_url"]
            header1.innerText = headerText
            image.src = newsImage
        })    
}       

defaultNews()






 


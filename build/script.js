let ApiKey = "ba71b2eb740f7b5c3532bddb23348aed"

let button = document.getElementById("submit")

let retrieve;

let queryURL;

let zipcode;

let city;

let latitude;

let longitude;

let country;

let weatherURL; 

let weatherInfo = document.getElementById("editHere")

let temp

// Declare variables to edit DOM

let date1
let date2
let date3

let dateData1
let dateData2
let dateData3

let edit1 = document.getElementById("edit1")
let edit2 = document.getElementById("edit2")
let edit3 = document.getElementById("edit3")

let tempData1
let tempData2
let tempData3

let tempEdit1 = document.getElementById("tempData1")
let tempEdit2 = document.getElementById("tempData2")
let tempEdit3 = document.getElementById("tempData3")

let windNum1
let windNum2
let windNum3

let wind1 = document.getElementById("windEdit1")
let wind2 = document.getElementById("windEdit2")
let wind3 = document.getElementById("windEdit3")

let humData1
let humData2
let humData3

let humidity1 = document.getElementById("humidityEdit1")
let humidity2 = document.getElementById("humidityEdit2")
let humidity3 = document.getElementById("humidityEdit3")

// Placeholder text for site

weatherInfo.innerText = "Search for a city to begin."

// Event listener for button starts API

button.addEventListener("click", () => {

    // Placeholder text

    retrieve = document.getElementById("searchBox").value 
    weatherInfo.innerText = "Showing results for: " + retrieve

    //Checking to see if input text is by zipcode or city
    
    if (isNaN(retrieve)){
        console.log("Searching by city... ")
        
        // URL is set to be used in fetch

        weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + retrieve + ",us&appid=" + ApiKey
        
        // URL is called in a fetch function
        
        fetch(weatherURL)
            .then(res => res.json())

            // Receive fetch data

            .then(data => {

                // Store SPECIFIC data for each day in a variables
                
                console.log(data)
                city = data["name"]
                
                // Date

                date1 = data["list"]["2"]["dt_txt"]
                date2 = data["list"]["10"]["dt_txt"]
                date3 = data["list"]["18"]["dt_txt"]
                
                // Temp

                tempData1 = data["list"]["2"]["main"]["temp"]
                tempData2 = data["list"]["10"]["main"]["temp"]
                tempData3 = data["list"]["18"]["main"]["temp"]
                
                // Wind

                windNum1 = data["list"]["2"]["wind"]["speed"]
                windNum2 = data["list"]["10"]["wind"]["speed"]
                windNum3 = data["list"]["18"]["wind"]["speed"]
                
                // Humidity

                humData1 = data["list"]["2"]["main"]["humidity"]
                humData2 = data["list"]["10"]["main"]["humidity"]
                humData3 = data["list"]["18"]["main"]["humidity"]
                
                // Edit date HTML text
                
                edit1.innerText = date1
                edit2.innerText = date2
                edit3.innerText = date3
                
                // Edit temp HTML text
                
                tempEdit1.innerText = "Temp: " + tempData1
                tempEdit2.innerText = "Temp: " + tempData2
                tempEdit3.innerText = "Temp: " + tempData3
                
                // Edit wind HTML text
                
                wind1.innerText = "Wind: " + windNum1
                wind2.innerText = "Wind: " + windNum2
                wind3.innerText = "Wind: " + windNum3

                // Edit humidity HTML text

                humidity1.innerText = "Humidity: " + humData1 + "%"
                humidity2.innerText = "Humidity: " + humData2 + "%" 
                humidity3.innerText = "Humidity: " + humData3 + "%"
            })

    }
    
    else {

        // Placeholder text

        weatherInfo.innerText = "Showing results for: " + retrieve
        console.log("Searching by zipcode... ")

        // URL is set to be used in fetch

        queryURL = "https://api.openweathermap.org/geo/1.0/zip?zip=" + retrieve + "&appid=" + ApiKey

    // URL is called in a fetch function

    fetch(queryURL)
    .then(res => res.json())

    // Receive fetch data

    .then(data => {
        
        // Store each individual data in variables
        
        city = data["name"]
        zipcode = data["zip"]
        latitude = data["lat"]
        longitude = data["lon"]
        country = data["country"]
        console.log("City: " + city)
        console.log("Zipcode: " + zipcode)
        console.log("Latitude: " + latitude)
        console.log("Longitude: " + longitude)
        console.log("Country: " + country)
        weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + ApiKey
        fetch(weatherURL)  
            .then(res => res.json())

            // Receive fetch data

            .then(data => {
                console.log(data)

                // Store SPECIFIC data for each day in a variables
                
                // Date

                date1 = data["list"]["2"]["dt_txt"]
                date2 = data["list"]["10"]["dt_txt"]
                date3 = data["list"]["18"]["dt_txt"]
                
                // Temp

                tempData1 = data["list"]["2"]["main"]["temp"]
                tempData2 = data["list"]["10"]["main"]["temp"]
                tempData3 = data["list"]["18"]["main"]["temp"]
                
                // Wind

                windNum1 = data["list"]["2"]["wind"]["speed"]
                windNum2 = data["list"]["10"]["wind"]["speed"]
                windNum3 = data["list"]["18"]["wind"]["speed"]

                // Humidity

                humData1 = data["list"]["2"]["main"]["humidity"]
                humData2 = data["list"]["10"]["main"]["humidity"]
                humData3 = data["list"]["18"]["main"]["humidity"]
                
                // Edit date HTML text
                
                edit1.innerText = date1
                edit2.innerText = date2
                edit3.innerText = date3
                
                // Edit temp HTML text
                
                tempEdit1.innerText = "Temp: " + tempData1
                tempEdit2.innerText = "Temp: " + tempData2
                tempEdit3.innerText = "Temp: " + tempData3
                
                // Edit wind HTML text
                
                wind1.innerText = "Wind: " + windNum1
                wind2.innerText = "Wind: " + windNum2
                wind3.innerText = "Wind: " + windNum3

                // Edit humidity HTML text

                humidity1.innerText = "Humidity: " + humData1 + "%"
                humidity2.innerText = "Humidity: " + humData2 + "%"
                humidity3.innerText = "Humidity: " + humData3 + "%"
            })
    })  
    }    
})
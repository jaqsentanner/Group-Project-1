let weatherInfo = document.getElementById("editHere")

weatherInfo.innerText = "Search for a city to begin."

$("#submit").click(function(){

    //clear divs from any previous search info
    $("#date1").empty()
    $("#date2").empty()
    $("#date3").empty() 
    $("#high1").empty()
    $("#high2").empty()
    $("#high3").empty()
    $("#low1").empty()
    $("#low2").empty()
    $("#low3").empty()
    $("#rain1").empty()
    $("#rain2").empty()
    $("#rain3").empty()
    $("#condition1").empty()
    $("#condition2").empty()
    $("#condition3").empty()
    $("#icon1").empty()
    $("#icon2").empty()
    $("#icon3").empty()

    
    //saving today tomorrow the-next-day to variables
    var today = moment()
    var today1 = moment().add(1, 'days')
    var today2 = moment().add(2, 'days')

    let weatherInfo = document.getElementById("editHere")

    var cityInput= $("#searchBox").val();
    
    
    var weatherapi = "https://api.weatherapi.com/v1/forecast.json?q=" + cityInput + "&days=5&key=f8fb15b97c4f40bbb6014420220710"

    retrieve = document.getElementById("searchBox").value 
    weatherInfo.innerText = "Showing results for: " + retrieve


fetch(weatherapi) 

        .then(function (response) {
            return response.json();
    })
        .then(function (data) {
            console.log(data)
            retrieve = document.getElementById("searchBox").value
            localStorage.setItem("searchBox", cityInput)
            console.log(localStorage)
            weatherInfo.innerText = "Showing results for: " + retrieve
            //todays weather
            $("#date1").append("<p>" + "Date: "+ today.format("MM-DD-YY")  + "</p>")
            $("#high1").append("<p>" + "hi: " + data.forecast.forecastday[0].day.maxtemp_f + " °F" + "</p>")
            $("#low1").append("<p>" + "low: " + data.forecast.forecastday[0].day.mintemp_f + " °F" + "</p>")
            $("#rain1").append("<p>" + "rain chance: " + data.forecast.forecastday[0].day.daily_chance_of_rain + "%" + "</p>")
            $("#condition1").append("<p>" + data.forecast.forecastday[0].day.condition.text + "</p>")
            $("#icon1").append("<img src='https:" + data.forecast.forecastday[0].day.condition.icon + "'/>")

            //tomorrows weather
            $("#date2").append("<p>" + "Date: "+ today1.format("MM-DD-YY") + "</p>")
            $("#high2").append("<p>" + "hi: " + data.forecast.forecastday[1].day.maxtemp_f + " °F" + "</p>")
            $("#low2").append("<p>" + "low: " + data.forecast.forecastday[1].day.mintemp_f + " °F" + "</p>")
            $("#rain2").append("<p>" + "rain chance: " + data.forecast.forecastday[1].day.daily_chance_of_rain + "%" + "</p>")
            $("#condition2").append("<p>" + data.forecast.forecastday[1].day.condition.text + "</p>")
            $("#icon2").append("<img src='https:" + data.forecast.forecastday[1].day.condition.icon + "'/>")

            //next days weather
            $("#date3").append("<p>" + "Date: "+ today2.format("MM-DD-YY") + "</p>")
            $("#high3").append("<p>" + "hi: " + data.forecast.forecastday[2].day.maxtemp_f + " °F" + "</p>")
            $("#low3").append("<p>" + "low: " + data.forecast.forecastday[2].day.mintemp_f + " °F" + "</p>")
            $("#rain3").append("<p>" + "rain chance: " + data.forecast.forecastday[2].day.daily_chance_of_rain + "%" + "</p>")
            $("#condition3").append("<p>" + data.forecast.forecastday[2].day.condition.text + "</p>")
            $("#icon3").append("<img src='https:" + data.forecast.forecastday[2].day.condition.icon + "'/>")
            
            

        })
    })

    function display() {

        
        var cityInput= $("searchBox").val();
        localStorage.getItem("searchBox", cityInput);
        
        window.addEventListener('load', () => {
            const zip = document.querySelector('#searchBox');
            const save = localStorage.getItem("searchBox", cityInput) || '';

            zip.value = save;
        })
        
    
    }
    
    display();


    var headClear = document.querySelector(".hmargin");
    headClear.addEventListener("click", headerClear);

    function headerClear() {
        localStorage.removeItem("searchBox");
        
        const zip = document.querySelector('#searchBox');
        

        zip.value = "Enter City/Zipcode...";
        

    }







const apiKey = "5f659ea5f659a42f828b0b14ee26a527";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        searchBox.value = "";
    }
    else {

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
    
        switch (data.weather[0].main) {
            case "Clear":
                weatherIcon.src = "images/clear.png"
                break;
            case "Clouds":
                weatherIcon.src = "images/clouds.png"
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png"
                break;
            case "Mist":
                weatherIcon.src = "images/miat.png"
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png"
                break;
            default:
                break;
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        searchBox.value = "";

    }
    
}

searchBtn.addEventListener("click",() => {
    checkWeather(searchBox.value);
})
document.addEventListener("keypress",(e) =>{
    if(e.key == "Enter")
    checkWeather(searchBox.value);
})



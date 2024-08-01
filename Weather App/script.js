 const apiKey = "50b2ab44df9cf9a4db7bd31f9c8ef969";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );

    var data =  await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML =Math.round(data.main.temp)   + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "Weather App/weather-app-img/images/clouds.png";
} else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "Weather App/weather-app-img/images/clear.png";
} else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "Weather App/weather-app-img/images/rain.png";
}

}

searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);
console.log(searchBox.value);

})

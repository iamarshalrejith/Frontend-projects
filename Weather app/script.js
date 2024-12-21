const apikey = "86d04a6033d8570808d1b1a9f693cc9a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkweather(city) {
    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        if (!response.ok) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return;
        }
        const data = await response.json();
        const weathericon = document.querySelector(".weather-icon");

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        const weatherCondition = data.weather[0].main.toLowerCase();
        console.log("Weather Condition:", weatherCondition);

        if (weatherCondition === "clouds") {
            weathericon.src = "Images/cloudy.png";
        } else if (weatherCondition === "snow") {
            weathericon.src = "Images/snow.png";
        } else if (weatherCondition === "clear") {
            weathericon.src = "Images/clear-sky.png";
        } else if (weatherCondition === "drizzle") {
            weathericon.src = "Images/drizzle.png";
        } else if (weatherCondition === "haze") {
            weathericon.src = "Images/haze.png";
        } else if (weatherCondition === "rain") {
            weathericon.src = "Images/rain.png";
        } 

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    if (!searchbox.value.trim()) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    checkweather(searchbox.value.trim());
});

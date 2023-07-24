const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.description');
const humid = document.querySelector('.humidity');
const wind = document.querySelector('.wind-speed');

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const input = searchBar.value;
    fetchWeather(input);
})

async function fetchWeather(input) {
    try {
        const response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + input +
            "&units=imperial&appid=0a24f6082df14108ca78847b83b32791"   
        );
        console.log(response);
        const data = await response.json()
        console.log(data);
        displayWeather(data)
    } catch (err) {
        alert("City does not exist. Please try again");
    }
}

function displayWeather(data) {
    city.textContent = data.name;
    desc.textContent = data.weather.main;
    temp.textContent = "Temp: " + data.main.temp + " °F";
    humid.textContent = "Humidity: " + data.main.humidity + "%"
    wind.textContent = "Wind Speed: " + data.wind.speed + " mph";

    
}
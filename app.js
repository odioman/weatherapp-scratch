const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.description');
const precip = document.querySelector('.precipitation');
const wind = document.querySelector('.wind-speed');

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
})

async function fetchWeather(input) {
    try {
        const response = (input) = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + input +
            "&units=imperial&appid=0a24f6082df14108ca78847b83b32791"   
        );
        const data = await response.json()
    } catch (err) {
        alert(err);
    }
}

function displayWeather(data) {
    city.textContent = data;
    desc = data.weather[0];
    temp =  data.main
    wind = data.wind;

    
}
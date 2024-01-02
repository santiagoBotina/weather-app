const API_KEY = '4a448afc9428f0083f47f0f0db8ae85b'

const searchButton = document.querySelector('.btn')
const searchBar = document.querySelector('.searchBar')
const cityElement = document.querySelector('.city')

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`;
  console.log(city);

  const weatherData = await fetch(url)
  const data = await weatherData.json()

  const temperatureElement = document.querySelector('.temperature')

  cityElement.textContent =data.name
  temperatureElement.textContent =`${data.main.temp}°C`
}

searchButton.addEventListener('click', () => {
    getWeather(searchBar.value)
})
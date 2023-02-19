let cityName = document.getElementById("citynameInput");
const btn = document.getElementById("searchBtn");
let weatherStatus = document.getElementById("status");
let avgTemp = document.getElementById("avgTemp");
let minTemp = document.getElementById("minTemp");
let maxTemp = document.getElementById("maxTemp");
const tempContainer = document.querySelector(".tempContainer")
const getWeatherData = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`
  ).catch(err => alert(err))
  const data = await response.json();
  console.log(data)
  weatherStatus.innerText = data.weather[0].main
  const {temp,temp_min,temp_max} = data.main
  avgTemp.innerText = temp
  minTemp.innerText = temp_min
  maxTemp.innerText = temp_max
tempContainer.className = "tempContainer block"
  
};
btn.addEventListener("click", () => {
  return getWeatherData();
});

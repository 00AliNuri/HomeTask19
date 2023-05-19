const KEY_OF_API = "134e5abc443346b3915123656231905";

let searchCity = "London";

function getWeather(searchCity) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${KEY_OF_API}&q=${searchCity}&aqi=no`
  )
    .then((x) => x.json())
    .then((x) => weatherRender(x))
    .catch((x) => notFound());
}

const container = document.querySelector(".container");
const searchB = document.querySelector(".searchtxt");
const searchButton = document.querySelector(".searchBTN");

searchB.addEventListener("keyup", (e) => {
  searchCity = e.target.value.trim();
});

searchButton.addEventListener("click", () => {
  getWeather(searchCity);
});

function weatherRender(weather) {
  const icon = weather.current.condition.icon;
  const Country = weather.location.country;
  const City = weather.location.name;
  const tempCelsius = weather.current.temp_c;
  const windK = weather.current.wind_kph;
  const humidityWeather = weather.current.humidity;
  const feelWeather = weather.current.feelslike_c;
  const uvIndex = weather.current.uv;
  const Time = weather.location.localtime;

  container.innerHTML = " ";

  const iconImg = document.createElement("img");
  iconImg.src = `https:${icon}`;
  const tempCelsiusSpan = document.createElement("span");
  tempCelsiusSpan.innerText = `Temperature: ${tempCelsius}`;
  const windKSpan = document.createElement("span");
  windKSpan.innerText = `Wind Speed: ${windK}`;
  const humidityWeatherSpan = document.createElement("span");
  humidityWeatherSpan.innerText = `Humidity of Weather: ${humidityWeather}`;
  const feelWeatherSpan = document.createElement("span");
  feelWeatherSpan.innerText = `Weather Feels Like: ${feelWeather}`;
  const uvIndexSpan = document.createElement("span");
  uvIndexSpan.innerText = `Uv: ${uvIndex}`;
  const CountrySpan = document.createElement("span");
  CountrySpan.innerText = `Country: ${Country}`;
  const CitySpan = document.createElement("span");
  CitySpan.innerText = `City: ${City}`;
  const TimeSpan = document.createElement("span");
  TimeSpan.innerText = `Time: ${Time}`;

  container.appendChild(iconImg);
  container.appendChild(CountrySpan);
  container.appendChild(CitySpan);
  container.appendChild(TimeSpan);
  container.appendChild(tempCelsiusSpan);
  container.appendChild(windKSpan);
  container.appendChild(humidityWeatherSpan);
  container.appendChild(feelWeatherSpan);
  container.appendChild(uvIndexSpan);
}

function notFound() {
  container.innerHTML = " ";
  const notFoundSpan = document.createElement("span");
  notFoundSpan.innerText = "City Not Found";

  container.appendChild(notFoundSpan);
}

const getWeather = async () => {
  const apiKey = 'a0f33a428e9441bfa91150909232208'; // Replace with your actual API key
  const apiUrl = 'https://api.weatherapi.com/v1/current.json';
  const cityInput = document.getElementById('city');
  const cityName = cityInput.value;
  const requestUrl = `${apiUrl}?key=${apiKey}&q=${cityName}`;
  
  try {
    const response = await fetch(requestUrl);
    const result = await response.json();
    console.log(result);
    console.log(result.current.condition.icon);
    console.log(result.current.humidity);
    console.log(result.location.name);
    console.log(result.location.region);
    // Process and display the weather data here
    // const weatherData = `Temperature: ${result.current.temp_c}°C<br>Condition: ${result.current.condition.text}`;
    // <h1 class="card_heading">city:<span class="apiValue">${result.location.name}</span></h1>
    // <h1 class="card_heading">region:<span class="apiValue">${result.location.region}</span></h1>
    const weatherData = `<div class="card">
    <div class="container">
    <img src=${result.current.condition.icon} class="weather_img">
    <h1 class="card_heading">temp:&nbsp &nbsp<span class="apiValue">${result.current.temp_c}°C</span></h1>
    <h1 class="card_heading">Condition:&nbsp &nbsp <span class="apiValue">${result.current.condition.text}</span></h1>
    <h1 class="card_heading">Humidity:&nbsp &nbsp<span class="apiValue">${result.current.humidity}</span></h1>
  </div>
</div>`;
    document.getElementById('result').innerHTML = weatherData;
    // cityName="";
  } catch (error) {
    console.error('An error occurred:', error);
    document.getElementById('result').innerHTML = 'Error fetching weather data.';
  }
};

const getWeatherButton = document.getElementById('getWeather');
getWeatherButton.addEventListener('click', getWeather);


const cityInput = document.getElementById('city');
const cityName = cityInput.value;
console.log(cityName);











// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "870b1b10b58578f725b70b13aff6c357";

async function handleWeatherRequest(e) {
  e.preventDefault();

  // get user input value from textbox
  let city = document.querySelector('input[name="city"]').value;

  // build the url address with YOUR personal API key and the users input city
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myApiKey}`;

  const apiURLAlternative = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + myApiKey;

  // make an API call using fetch() and capture the response in a variable
 
  const response = await fetch(apiURL);

  // convert the response to a readable json format with .json()

  console.log(response);

  const blueberry = await response.json();
  
  // print your data to the console to see its format, dont forget to delete later
  
  console.log(blueberry);

  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C
  
  const currentTemp = convertKtoF(blueberry.main.temp);
  const feelsLikeTemp = convertKtoF(blueberry.main.feels_like);
  const humidity = blueberry.main.humidity;
  const pressure = numberWithCommas(blueberry.main.pressure);
  const highTemp = convertKtoF(blueberry.main.temp_max);
  const lowTemp = convertKtoF(blueberry.main.temp_min);

  const weatherResults = `<li>The temperature in ${blueberry.name} is currently ${currentTemp}&#8457;</li>
  <li>Feels Like: ${feelsLikeTemp}&#8457;</li>
  <li>Humidity: ${humidity}%</li>
  <li>Pressure: ${pressure}</li>
  <li>High: ${highTemp}&#8457;</li>
  <li>Low: ` + lowTemp + `&#8457;</li>`;


  // build the icon src
  
  // create icon img tag
  
  // add icon url as src
  
  // clear out previous icon img
  
  // print all results to dom
  document.getElementById('weather-results').innerHTML = weatherResults;


  // append icon img to dom
  
}


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convertKtoF(kelvinTemp){
  let tempF = (kelvinTemp - 273.15) * 1.8 + 32;

  // Round
  tempF = Math.round(tempF);

  return tempF;
}


// Attach an event listener to the submit button
document.querySelector('#weather-search').addEventListener('submit',handleWeatherRequest);



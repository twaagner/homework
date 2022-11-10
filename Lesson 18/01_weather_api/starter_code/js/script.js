
// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "730eecb2c92a56917eac9bf8c07df80b";

async function handleWeatherRequest(e) {
  e.preventDefault();
  
  // get user input value from textbox
  let city = document.querySelector('input [name=city]').value;

  // build the url address with YOUR personal API key and the users input city
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myApiKey}`;
  // have to use tic marks to imbed with curly brackets
  
  const apiURLAlternative = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + myApiKey;

  // make an API call using fetch() and capture the response in a variable
  const response = await fetch(apiURL);
  // ***fetch input url into browser
 
  // convert the response to a readable json format with .json()

  const convert = await response.json();
  
  // print your data to the console to see its format, dont forget to delete later
  console.log(convert);
  
  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C

  
  // build the icon src

  
  // create icon img tag

  
  // add icon url as src
  

  // clear out previous icon img
  

  // print all results to dom
  

  // append icon img to dom
  

}


// Attach an event listener to the submit button
document.querySelector
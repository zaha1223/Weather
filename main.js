let inptCity = document.querySelector(".cityInput");
let form = document.querySelector(".form");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a3e783baa2msh384e71d79fda43fp128491jsnb123f431e574",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

let elDiv = document.querySelector(".location__weather");

let renderWeather = (data) => {
  elDiv.innerHTML = `
  <h4><strong>Region</strong> ${data.location.region}</h4>
      <h5><strong>Country</strong> ${data.location.country}</h5>
      <p><strong>Weather</strong> ${data.current.condition.text}</p>
      <img src="${data.current.condition.icon}" alt="img" width="50" height="50" />
	  <p>Wind ${data.current.wind_kph} km/h</p>
      <p> ${data.current.temp_c}C</p>
	  <span><strong>Real time</strong> ${data.location.localtime}</span>`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = inptCity.value;

  elDiv.classList.add("location__weather1");

  fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${inputVal}&days=3`,
    options
  )
    .then((response) => response.json())
    .then((response) => renderWeather(response))
    .catch((err) => console.error(err));
});

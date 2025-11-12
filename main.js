const fetchAPI = async () => {
  try {
    const userInput = document.getElementById("cityInput").value.trim();
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=metric&appid=5bcf228078a03cf5a40ce183c62881ad`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.city.name);
    console.log(data.city);
    // console.log(data.list[0].main.feels_like)
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("searchbtn").addEventListener("click", async () => {
  const cityData = await fetchAPI();

  const cityName = cityData.city.name;
  document.getElementById("capitalName").innerHTML = cityName;

  
  const getTemp = Math.round(cityData.list[0].main.temp);
  document.getElementById("temp").innerHTML = `${getTemp} °C`;
   
  const getWindSpeed = cityData.list[0].wind.speed;
  document.getElementById("windspeed").innerHTML = `${getWindSpeed}m/s`;

  const iconTemp = document.getElementById("weatherIcon");
  const weather = cityData.list[0].weather[0];
  const URLICON = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  iconTemp.src = URLICON;


   function calcTemp(element) {
    const minTemp = -20;
    const maxTemp = 40;

    const tempS = Math.max(minTemp, Math.min(maxTemp, getTemp));

    const ratio = (tempS - minTemp) / (maxTemp - minTemp);
    const hue = 270 - ratio * 270;

    element.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
  }

  const currentBox = document.getElementById('currentBox')
  calcTemp(currentBox, getTemp)
  
 
  for (let i = 1; i <= 5; i++) {
    
    const realDiv = document.getElementById("container");
    realDiv.classList.add("container");

    const fakeTemp = document.createElement("div");
    const fakeh1 = document.createElement("h1");
    const fakeh2 = document.createElement("h2");
    const fakeP = document.createElement("p");

    realDiv.appendChild(fakeTemp);
    fakeTemp.appendChild(fakeh1);
    fakeTemp.appendChild(fakeh2);
    fakeTemp.appendChild(fakeP);

    const getTemp = cityData.list[i].main.temp;
    calcTemp(fakeTemp, getTemp);
    fakeh1.innerHTML = Math.round(cityData.list[i].main.temp) + "°C";
    fakeh2.innerHTML = cityData.list[i].wind.speed + "m/s";
    fakeP.innerHTML = cityData.list[i].dt_txt;
  }
});

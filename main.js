const fetchAPI = async() => {
    try {
        const userInput = document.getElementById('cityInput').value.trim()
        const iconTemp = document.getElementById('weatherIcon')

        const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=metric&appid=5bcf228078a03cf5a40ce183c62881ad`
      
        const response = await fetch(URL)
        
        const data = await response.json()
        console.log(data.city.name)
        console.log(data.city)
        // console.log(data.list[0].main.feels_like)
        console.log(data)



        return data;
    } catch (error) {
         console.log(error);
    }
} 
    

    document.getElementById('searchbtn').addEventListener('click', async () => {
    const cityData = await fetchAPI()

   

    const cityName = cityData.city.name
    document.getElementById('capitalName').innerHTML = cityName;

    const getTemp = cityData.list[0].main.temp
    document.getElementById('temp').innerHTML = getTemp + ' ' + 'celcius'

    if (Math.round(getTemp) == 10) {
       const bkColor = document.querySelector('.boxtwo')
       bkColor.style.backgroundColor = 'blue'
    }

     const getWindSpeed = cityData.list[0].wind.speed
    document.getElementById('windspeed').innerHTML = getWindSpeed + ' ' + 'm/s'
    

    const iconTemp = document.getElementById('weatherIcon')
    const weather = cityData.list[0].weather[0]
    const URLICON = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`

    iconTemp.src = URLICON

   

})

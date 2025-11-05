const fetchAPI = async() => {
    try {
        const userInput = document.getElementById('cityInput').value.trim()

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

    const result = document.querySelector('.temp')
    result.innerHTML = cityData.list[0].main.temp
})


const fetchAPI = async() => {

      try {

        const userInput = document.getElementById('cityInput').value.trim()

        const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=metric&appid=5bcf228078a03cf5a40ce183c62881ad`
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data.city.name)
        console.log(data.city)
        // console.log(data.list[0].main.feels_like)
        console.log(data)


         const cityName = data.city.name
        document.getElementById('capitalName').value = cityName;

        const result = document.getElementById('capitalName')
        result.innerHTML = cityName
    } catch (error)

    {
      console.log(error)
    }

    }


document.getElementById('searchbtn').addEventListener('click', () => {
    fetchAPI()
})

// document.getElementById('searchbtn').addEventListener('click', () => {
//             const userInput = document.getElementById('cityInput').value.trim()
//            const result = document.getElementById('capitalName')
//              })




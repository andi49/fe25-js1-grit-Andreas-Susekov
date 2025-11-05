const fetchAPI = async() => {
    try {
        const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=metric&appid=5bcf228078a03cf5a40ce183c62881ad`
         const response = await fetch(URL)
         const data = await response.json()
         console.log(data.city.name)
        console.log(data.city)
        // console.log(data.list[0].main.feels_like)
        console.log(data)

        document.getElementById('searchbtn').addEventListener('click', () => {
            const userInput = document.getElementById('cityInput').value.trim()
           const result = document.getElementById('capitalName')

            
           result.innerHTML = `${data.city.name}`
           
        })  
    } catch (error) {
         console.log(error);
    }
}
fetchAPI()


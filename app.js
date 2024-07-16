const API_Key = `756a8a3e92ea8335eed64111886f46aa`

form = document.querySelector('form');
search_location = document.querySelector('#search-location');
weather = document.querySelector('#weather');

const getWeather =async (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
    const response = await fetch(url);
    const data =await response.json();
    console.log(data)
    const Img_Url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weather.innerHTML  = `
    <div>
        <img src="${Img_Url}">
    </div>
    <div class="info">
        <h1>${data.main.temp}°C</h1>
        <h2>${data.weather[0].main}</h2>
        <p>Wind Speed : ${data.wind.speed}</p>
        

    </div>`
    
}

form.addEventListener('submit',
(event) => {
    getWeather(search_location.value)
    event.preventDefault()
});

const api = {
    key : "dcdc809183f0cf9a1984e5e7f040e299" ,
    base:"https://api.openweathermap.org/data/2.5/"
    }
    // console.log(api);
    const searchBox = document.querySelector('.search-box')
    searchBox.addEventListener('keypress',setQuery)
    
    function setQuery(evt) {
        if (evt.keyCode == 13) {
            getResults(searchBox.value);
    
        }
    }
    
    function getResults(query) {
        fetch( `${api.base}weather?q=${query}&units=metric&APPID=${api.key}` )
        .then(weather => weather.json())
        .then(displayResults)
    }
    
    
    function displayResults(weather) {
        let city = document.querySelector('.location .city');
        city.innerText = ` ${weather.name}, ${weather.sys.country}`;
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = `${Math.round(weather.main.temp)}<span> ˚C </span> `;
        let weather_el = document.querySelector('.current .weather')
        weather_el.innerText = weather.weather[0].main;
        let item = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        document.querySelector('.current .icon').setAttribute('src',item)
    
        let hilow = document.querySelector('.hi-low');
        hilow.innerText = `${Math.round(weather.main.temp_min)}˚C / ${Math.round(weather.main.temp_max)} ˚C `;
    
    }
    
    
    
    
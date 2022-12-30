const apikey = "f9296cbf3e462bf7001dd8046ac44d1b"; //Get your API KEY from https://openweathermap.org

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
  
const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f9296cbf3e462bf7001dd8046ac44d1b`; 


async function getWeatherByLocation(city){
     
         const resp = await fetch(url(city), {
             origin: "cros" });
         const respData = await resp.json();
     
           addWeatherToPage(respData);
          
}

    function addWeatherToPage(data){
        const temp = Ktoc(data.main.temp);

        const weather = document.createElement('div')
        weather.classList.add('weather');

        weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
        <small>${data.weather[0].main}</small>
        
        `;


    //   cleanup 
        main.innerHTML= "";
        main.appendChild(weather);
    }


    function Ktoc(K){
        return Math.floor(K - 273.15);
    }

    if(form){
        form.addEventListener('submit',(e) =>{
            e.preventDefault();
        
            const city = search.value;
        
            if(city){
                getWeatherByLocation(city);
            }
        
        });
    }

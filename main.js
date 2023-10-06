const APIKEY="83496b186ba1f2b8b4bae87662aad105";
const Url="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchinput=document.querySelector('.search input');
const searchbtn=document.querySelector('.search button');
const weathericon=document.querySelector('.weather-icon');

async function weatherapp(city){
    //fetch data
    const response=await fetch(Url+city+`&appid=${APIKEY}`);
    //invalid message if city name is wrong
    if(response.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }else{
//convert data fetched to json
var data=await response.json();
console.log(data);
//update info
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+'°C';  
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".humidity").innerHTML=data.main.humidity+' %';
document.querySelector(".wind").innerHTML=data.wind.speed+' Km/h';
//update image
if(data.weather[0].main=='Clouds'){
weathericon.src='images/clouds.png'
}else if(data.weather[0].main=='Clear'){
    weathericon.src='images/clear.png'
}else if(data.weather[0].main=='Rain'){
    weathericon.src='images/rain.png'
}else if(data.weather[0].main=='Drizzle'){
    weathericon.src='images/drizzle.png'
}else{
    weathericon.src='images/mist.png'
}

document.querySelector(".weather").style.display='block';
document.querySelector(".error").style.display='none';
    }
    
}

searchbtn.addEventListener('click',()=>{
    weatherapp(searchinput.value);
})

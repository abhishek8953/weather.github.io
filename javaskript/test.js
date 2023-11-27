async function getData(city1) {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city1;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b418f4a973mshb14dbae354dab81p14a31ajsnf63e79a56e5a",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    }
  };
  
  fetch(url,options)
  .then(response =>response.json())
  .then((response) =>{

	 cityname.innerHTML=city1
	cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp3.innerHTML=response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML=response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML=response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;

	console.log(response)})
  .catch(err=>console.log(err));
  }


// submit.addEventListener("click",(e)=>{
// 	 e.preventDefault();
// 	getData(city2.value);
// })
//   getData("kolkata");

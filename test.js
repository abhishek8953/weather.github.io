async function getData(city1) {
	const url = `http://api.weatherapi.com/v1/forecast.json?key=51d9992dd6f64e38875153519252803&q=${city1}&days=1&aqi=yes&alerts=yes
`;
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key":
				"b418f4a973mshb14dbae354dab81p14a31ajsnf63e79a56e5a",
			"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
		},
	};

	fetch(url, options)
		.then((response) => response.json())
		.then((response) => {
			cityname.innerHTML = city1;
			cloud_pct.innerHTML = response.current.cloud ? "Yes":"No";
			temp.innerHTML = response.current.temp_c;
			temp3.innerHTML = response.current.temp_c;
			feels_like.innerHTML = response.current.condition.text;
			humidity.innerHTML = response.current.humidity;
			humidity2.innerHTML = response.current.humidity;
			min_temp.innerHTML = response.forecast.forecastday[0].day.mintemp_c;
			max_temp.innerHTML = response.forecast.forecastday[0].day.maxtemp_c;
			wind_speed.innerHTML = response.current.wind_kph;
			wind_speed2.innerHTML = response.current.wind_kph;
			wind_degrees.innerHTML = response.current.wind_degree;
			sunrise.innerHTML = response.forecast.forecastday[0].astro.sunrise;

			console.log(response.forecast.forecastday[0].astro.sunrise);
		})
		.catch((err) => console.log(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getData(city2.value);
});
getData("kolkata");

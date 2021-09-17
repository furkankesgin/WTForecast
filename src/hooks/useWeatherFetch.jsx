// react
import { useState, useEffect } from "react";

// statics
import { weatherAPICallBaseURL, forecastAPICallBaseURL } from "../statics/URLS";

const useWeatherFetch = (city, fetchInterval) => {
    // custom fetch hook for fetching weather and forecast
    // This function fetches weather and forecast on these conditions 
    // 1. on mount
    // 2. on selected interval
    // 3. on city change

	// weather states
	const [weather, setWeather] = useState({});
	const [forecast, setForecast] = useState({});

    // weather fetch functions
    async function fetchWeather() {
        const res = await fetch(`${weatherAPICallBaseURL}?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
        const weather = await res.json();
        setWeather(weather)
    }

    async function fetchForecast() {
        const res = await fetch(`${forecastAPICallBaseURL}?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
        const forecast = await res.json();
        setForecast(forecast)
    }

    // useEffect with interval for auto updates
	useEffect(() => {

        const fetchTimer = setInterval(() => {
            console.log("Weather updated");

            fetchWeather();
            fetchForecast();
        }, fetchInterval);

		fetchWeather();
		fetchForecast();

        return () => {
            clearInterval(fetchTimer);
        };

	}, [city]);  // fetch weather again on city change

    return [weather, setWeather, forecast, setForecast]
}

export default useWeatherFetch;
import Header from "./components/Header";
import Card1 from "./components/card1/Card1";
import Card2 from "./components/card2/Card2Background";

import { useState, useEffect } from 'react'

function App() {

	// const REACT_APP_OPENWEATHERMAP_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
	
	// const fetchWeather = async (city) => {
    //     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
    //     const data = await res.json();
    //     return data
    // }

	const [weather, setWeather] = useState({});


	useEffect(() => {
		async function fetchWeather(city){
			const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
			const data = await res.json();
			setWeather(data)
		}
		fetchWeather("istanbul")
	  }, [])



	return (
		<div className="container">
			<Header />
			<Card1 weather={weather}/>
			<Card2 weather={weather}/>
		</div>
	);
}

export default App;

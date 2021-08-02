// react
import { useState, useEffect } from 'react'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

// styled components
import GlobalStyles from "./styles/GlobalStyles";

// inner components
import Header from "./components/Header";
import Card1 from "./components/card1/Card1";
import Card2 from "./components/card2/Card2";
import Card3 from "./components/card3/Card3";

// statics
import { weatherAPICallBaseURL, forecastAPICallBaseURL } from "./statics/URLS";

// helpers
// import useEffectAfterMount from './helpers/useEffectAfterMount'
import Storage from './helpers/Storage'

// debounce hook
import { useDebounce } from '@react-hook/debounce'


function App() {

	// storage object // TODO find better way for defaults
	const storage = new Storage("WTForecast", {"customUIElements":{"pressure":true,"humidity":true,"wind":true,"cloudiness":true,"minmax":true,"feels":true,"lonlat":true,"sun":true},"unit":"metric","city":"istanbul"});

	// weather states
	const [weather, setWeather] = useState({});
	const [forecast, setForecast] = useState({});

	// settings menu states
	const [citySearch, setCitySearch] = useDebounce("", 1000);
	const [isCityValid, setIsCityValid] = useState("");
	const [city, setCity] = useState(storage.getItemFromStorageWithDefaultFallback("city"));

	const [unit, setUnit] = useState(storage.getItemFromStorageWithDefaultFallback("unit"));
	const [customUIElements, setCustomUIElements] = useState(storage.getItemFromStorageWithDefaultFallback("customUIElements"));

	useEffect(() => {
		storage.setToStorage({customUIElements: customUIElements});
	}, [customUIElements])


	useEffect(() => {
		storage.setToStorage({unit: unit});
	}, [unit])


	useEffect(() => {
		storage.setToStorage({city: city});
	}, [city])


	// on citySearch
	useEffect(() => {
		async function testCity(){
			// TODO maybe test additional stuff

			if(citySearch){
				try{
					const res = await fetch(`${weatherAPICallBaseURL}?q=${citySearch}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
					const weather = await res.json();

					const res2 = await fetch(`${forecastAPICallBaseURL}?q=${citySearch}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
					const forecast = await res2.json();

					if(weather.cod === 200){
						// if city is valid

						// display message
						setIsCityValid("is-valid");

						// weather and forecast states
						setWeather(weather);
						setForecast(forecast);
						
						// change city to the searched city (changing state of the city automatically saves it to storage)
						setCity(citySearch);
					}
					else{
						// if city is not valid display city invalid message
						setIsCityValid("is-invalid");
					}
				}
				catch{
					// if something is broken display city invalid message
					setIsCityValid("is-invalid");
				}
			}
			else{
				// if city textbox is empty don't display any message
				setIsCityValid("");
			}

		}

		testCity();
	},[citySearch]);



	// on load (fetch weather and forecast data for saved city from api)
	useEffect(() => {
		async function fetchWeather(){
			const res = await fetch(`${weatherAPICallBaseURL}?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
			const weather = await res.json();
			setWeather(weather)
		}
		async function fetchForecast(){
			const res = await fetch(`${forecastAPICallBaseURL}?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
			const forecast = await res.json();
			setForecast(forecast)
		}

		fetchWeather();
		fetchForecast();
	}, [])



	return (
		<Container>
			<GlobalStyles />
			<Header />

			<Card1 
				weather={weather} 

				isCityValid={isCityValid} 
				setCitySearch={setCitySearch} 

				unit={unit} 
				setUnit={setUnit} 

				customUIElements={customUIElements} 
				setCustomUIElements={setCustomUIElements}
			/>

			<Card2 forecast={forecast} unit={unit} />
			<Card3 forecast={forecast} unit={unit} />
		</Container>
	);

}

export default App;

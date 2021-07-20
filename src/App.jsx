import Header from "./components/Header";
import Card1 from "./components/card1/Card1";
import Card2 from "./components/card2/Card2Background";
import GlobalStyles from "./styles/GlobalStyles";
import { useState, useEffect } from 'react'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

// API base urls
import { weatherAPICallBaseURL, forecastAPICallBaseURL } from "./statics/URLS";

// for settings part
import { useDebounce } from '@react-hook/debounce'
import useEffectAfterMount from './helpers/useEffectAfterMount'
import Storage from './helpers/Storage'


function App() {

	const storage = new Storage("WTForecast");


	const [weather, setWeather] = useState({});
	const [forecast, setForecast] = useState({});



	// settings menu states
	const [citySearch, setCitySearch] = useDebounce("", 1000);
	const [isCityValid, setIsCityValid] = useState("");
	const [city, setCity] = useState("");


	const [unit, setUnit] = useState("");
	const [customUIElements, setCustomUIElements] = useState({});


	

	useEffectAfterMount(() => {
		storage.setToStorage({customUIElements: customUIElements});
	}, [customUIElements])


	useEffectAfterMount(() => {
		storage.setToStorage({unit: unit});
	}, [unit])


	useEffectAfterMount(() => {
		storage.setToStorage({city: city});
	}, [city])



	// on citySearch
	useEffect(() => {
		async function testCity(){
			// test additional stuff

			if(citySearch){
				try{
					const res = await fetch(`${weatherAPICallBaseURL}?q=${citySearch}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
					const weather = await res.json();

					const res2 = await fetch(`${forecastAPICallBaseURL}?q=${citySearch}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
					const forecast = await res2.json();

					if(weather.cod === 200){
						setIsCityValid("is-valid");
						setWeather(weather);
						setForecast(forecast);

						setCity(citySearch);
						// storage.setToStorage({city: city});
					}
					else{
						setIsCityValid("is-invalid");
					}
				}
				catch{
					setIsCityValid("is-invalid");
				}
			}
			else{
				// if city textbox is empty don't show any message
				setIsCityValid("");
			}


		}
		testCity();
	},[citySearch]);





	useEffect(() => {
		async function fetchWeather(city){
			const res = await fetch(`${weatherAPICallBaseURL}?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
			const data = await res.json();
			setWeather(data)
		}
		async function fetchForecast(city){
			const res = await fetch(`${forecastAPICallBaseURL}?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
			const data = await res.json();
			setForecast(data)
		}

		if(storage.isTherePreviousSave()){
			// TODO add exception handling
			const items = storage.getFromStorage();
			// console.log(items)

			// fetch the last saved city
			setCity(items.city);
			fetchWeather(items.city);
			fetchForecast(items.city);
			
			// set the unit from the storage
			setUnit(items.unit);

			//set custom ui elements
			setCustomUIElements(items.customUIElements);
		}
		else{
			// TODO find better way for defaults
			// defaults
			setCity("istanbul");
			fetchWeather("istanbul");
			fetchForecast("istanbul");

			setUnit("metric");

			setCustomUIElements({
					"pressure":true,
					"humidity":true,
					"wind":true,
					"cloudiness":true,
					
					"minmax":true,
					"feels":true,

					"lonlat":true,
					"sun":true
				});
		}

	}, [])

	

	return (
		<Container>
			<GlobalStyles/>
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
			
			
			<Card2 forecast={forecast}/>
		</Container>
	);

}

export default App;

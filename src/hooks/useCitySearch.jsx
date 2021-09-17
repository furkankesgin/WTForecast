// react
import { useState, useEffect } from "react";

// statics
import { weatherAPICallBaseURL } from "../statics/URLS";
import DEFAULTS from "../statics/DEFAULTS";

// custom hooks
import { useDebounce } from '@react-hook/debounce';
import useStateWithAutoSave from "./useStateWithAutoSave";


const useCitySearch = () => {

	// settings menu states
	const [citySearch, setCitySearch] = useDebounce("", DEFAULTS.cityFormDebounceTime);
	const [isCityValid, setIsCityValid] = useState("");
	const [city, setCity] = useStateWithAutoSave(DEFAULTS.storageNames.city);

	// on citySearch
	useEffect(() => {
		async function testCity() {
            // uses bootstrap messages like "is-valid" 

			if (citySearch) {
				try {
                    // try to fetch weather data for city
                    const res = await fetch(`${weatherAPICallBaseURL}?q=${citySearch}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
                    const weather = await res.json();
                    
                    // if city is valid
					if (weather.cod === 200) {

						// display message
						setIsCityValid("is-valid");

						// change city to the searched city (changing state of the city automatically saves it to storage and updates the ui see useWeatherFetch custom hook)
						setCity(citySearch);
					}
					else {
						// if city is not valid display city invalid message
						setIsCityValid("is-invalid");
					}
				}
				catch {
					// if something is broken display city invalid message
					setIsCityValid("is-invalid");
				}
			}
			else {
				// if city textbox is empty don't display any message
				setIsCityValid("");
			}

		}

		testCity();
	}, [citySearch]);


    return [city, setCity, citySearch, setCitySearch, isCityValid, setIsCityValid]
}

export default useCitySearch;
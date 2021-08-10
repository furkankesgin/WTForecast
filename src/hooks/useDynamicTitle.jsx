import { useEffect } from 'react';
import UNITS from "../statics/UNITS";
import { convertTemp } from "../helpers/convertUnits";

const useDynamicTitle = (weather, unit) => {
    // dynamically changes the title of the application

	useEffect(() => {
		if(weather.main){
			document.title = `WTF: ${weather.name} ${convertTemp({ temp: weather.main.temp, unit: unit })}${UNITS[unit].temp}`;
		}
		else{
			document.title = "WTForecast";
		}
	}, [weather, unit])

}

export default useDynamicTitle;
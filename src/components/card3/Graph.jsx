import { Line } from 'react-chartjs-2';
import { splitByHour } from "../../helpers/splitByHour";
import { weekDay } from "../../helpers/dateTime";
import { convertTemp, convertSpeed } from "../../helpers/convertUnits"
import { useEffect, useState } from 'react'
import UNITS from "../../statics/UNITS";
import { withTheme } from 'styled-components';


const Graph = (props) => {
	const buildGraphDataset = () => {
		let days = [], temp = [], humidity = [], wind = [];

		if (props.allList.list) {
			props.allList.list.map((weather) => {
				if (splitByHour(weather, "12")) {
					days.push(weekDay(new Date(weather.dt * 1000).getDay()));
					temp.push(convertTemp({ temp: weather.main.temp, unit: props.unit }));
					humidity.push(weather.main.humidity);
					wind.push(convertSpeed({ speed: weather.wind.speed, unit: props.unit }));
				}
			})
		}

		return { days: days, temp: temp, humidity: humidity, wind: wind }
	}

	useEffect(() => {
		const { days, temp, humidity, wind } = buildGraphDataset();
		setDays(days);
		setTemperatureDataset(temp);
		setHumidityDataset(humidity);
		setWindDataset(wind)
	}, [props.allList, props.unit]);

	const [days, setDays] = useState('');
	const [temperatureDataset, setTemperatureDataset] = useState('');
	const [humidityDataset, setHumidityDataset] = useState('');
	const [windyDataset, setWindDataset] = useState('');

	const [tempInvisibility, setTempVisibility] = useState(false);
	const [humidityInvisibility, setHumidityVisibility] = useState(true);
	const [windInvisibility, setWindVisibility] = useState(true);

	const visibilityFunctions = [setTempVisibility, setHumidityVisibility, setWindVisibility];

	const data = {
		labels: days,
		datasets: [
			{
				type: 'line',
				label: 'Temperature' + UNITS[props.unit].temp,
				hidden: tempInvisibility,
				backgroundColor: props.theme.color_secondary,
				borderColor: props.theme.text_important,
				data: temperatureDataset,
				fill: true
			},

			{
				type: 'line',
				label: 'Humidity ' + UNITS[props.unit].humidity,
				hidden: humidityInvisibility,
				backgroundColor: props.theme.color_secondary,
				borderColor: props.theme.text_important,
				data: humidityDataset,
				borderWidth: 2,
				fill: true,
			},

			{
				type: 'line',
				label: 'Wind ' + UNITS[props.unit].wind,
				hidden: windInvisibility,
				backgroundColor: props.theme.color_secondary,
				borderColor: props.theme.text_important,
				data: windyDataset,
				borderWidth: 2,
				fill: true,
			}

		],
	};


	const options = {
		// change legend color example  https://stackoverflow.com/questions/37292423/chart-js-label-color

		indexAxis: 'x',
		responsive: true,

		plugins: {
			legend: {
				position: 'top',
				onClick: function (evt, item) {
					for (let index = 0; index < data.datasets.length; index++) {
						visibilityFunctions[index](true);
					}
					visibilityFunctions[item.datasetIndex](false);
				},

				labels: {
					color: props.theme.text_primary,
					font: {
						size: 20
					}
				}
			},
		},

		scales: {
			y: {
				ticks: {
					stepSize: 3,
					color: props.theme.text_primary,
					// beginAtZero: true,
					font: {
						size: 20
					}
				}
			},

			x: {
				ticks: {
					stepSize: 1,
					color: props.theme.text_primary,
					// beginAtZero: true,						
					font: {
						size: 20
					}
				}
			}

		},

	};

	return (
		<Line data={ data } options={ options } />
	);
}

// withTheme is for using global styles here
export default withTheme(Graph);

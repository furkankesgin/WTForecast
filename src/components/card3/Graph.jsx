import { Line } from 'react-chartjs-2';
import { splitByHour } from "../../helpers/splitByHour";
import { weekDay } from "../../helpers/dateTime";
import { convertTemp } from "../../helpers/convertUnits"
import { useEffect, useState } from 'react'
import UNITS from "../../statics/UNITS";
import COLORS from "../../statics/COLORS";

const Graph = (props) => {
	const buildGraphDataset = () => {
		let days = [], temp = [], humidity = [];

		if (props.allList.list) {
			props.allList.list.map((weather) => {
				if (splitByHour(weather, "12")) {
					days.push(weekDay(new Date(weather.dt * 1000).getDay()));
					temp.push(convertTemp({ temp: weather.main.temp, unit: props.unit }));
					humidity.push(weather.main.humidity);
				}
			})
		}

		return { days: days, temp: temp, humidity: humidity }
	}

	useEffect(() => {
		const { days, temp, humidity } = buildGraphDataset();
		setDays(days);
		setTemperatureDataset(temp);
		setHumidityDataset(humidity);
	}, [props.allList, props.unit]);

	const [days, setDays] = useState('');
	const [temperatureDataset, setTemperatureDataset] = useState('');
	const [humidityDataset, setHumidityDataset] = useState('');


	const [tempInvisibility, setTempVisibility] = useState(false);
	const [humidityInvisibility, setHumidityVisibility] = useState(true);
	const [bbInvisibility, setbbVisibility] = useState(true);

	const visibilityFunctions = [setTempVisibility, setHumidityVisibility, setbbVisibility];

	const data = {
		labels: days,
		datasets: [
			{
				type: 'line',
				label: 'Temperature' + UNITS[props.unit].temp,
				hidden: tempInvisibility,
				backgroundColor: COLORS.dark.background_color,
				borderColor: COLORS.dark.text_important,
				data: temperatureDataset,
				fill: true
			},

			{
				type: 'line',
				label: 'Humidity' + UNITS[props.unit].humidity,
				hidden: humidityInvisibility,
				backgroundColor: COLORS.dark.background_color,
				borderColor: COLORS.dark.text_important,
				data: humidityDataset,
				borderWidth: 2,
				fill: true,
			},

			{
				type: 'line',
				label: 'bb' + UNITS[props.unit].humidity,
				hidden: bbInvisibility,
				backgroundColor: COLORS.dark.background_color,
				borderColor: COLORS.dark.text_important,
				data: humidityDataset,
				borderWidth: 2,
				fill: true,
			}

		],
	};


	const options = {
		// change legend color example  https://stackoverflow.com/questions/37292423/chart-js-label-color

		indexAxis: 'x',
		responsive: true,

		// elements: {
		// 	bar: {
		// 		borderWidth: 2,
		// 	},
		// },

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
					color: COLORS.dark.text_primary,
					font: {
						size: 20
					}
				}
			},

			// title: {
			// 	display: true,
			// 	text: 'Chart.js Horizontal Bar Chart',
			// },
		},

		scales: {

			y: {
				ticks: {
					stepSize: 3,
					color: COLORS.dark.text_primary,
					// beginAtZero: true,
					font: {
						size: 20
					}
				}
			},

			x: {
				ticks: {
					stepSize: 1,
					color: COLORS.dark.text_primary,
					// beginAtZero: true,						
					font: {
						size: 20
					}
				}
			}

		},

	};

	return (
		<Line data={data} options={options} />
	);
}

export default Graph;

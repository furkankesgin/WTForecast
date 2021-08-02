import { Bar} from 'react-chartjs-2';
import {splitByHour} from "../../helpers/splitByHour";
import { weekDay } from "../../helpers/dateTime";
import {convertTemp} from "../../helpers/convertUnits"

let days = [];
let temp = [];
let tempMax = [];
let tempMin = [];
let humidity = [];
const Graph = (props) => {
  {props.allList.list ? 
  props.allList.list.map((weather)=> splitByHour(weather,"12") ? 
    days.push(weekDay(new Date(weather.dt * 1000).getDay()))+
    temp.push(convertTemp({temp:weather.main.temp, unit:props.unit}))+
    humidity.push(weather.main.humidity)
    // tempMax.push(convertTemp({temp:weather.main.temp_max, unit:props.unit}))+
    // tempMin.push(convertTemp({temp:weather.main.temp_min, unit:props.unit}))
   
  : <div></div>): <div></div>};
  const data = {
    labels: days.slice(0,5),
    datasets: [
      {
        type: 'bar',
        label: 'Temp',
        backgroundColor: 'rgb(75, 192, 192)',
        data: temp.slice(0,5),
      },
      // {
      //   type: 'bar',
      //   label: 'Temp Max',
      //   borderColor: 'red',
      //   borderWidth: 2,
      //   fill: false,
      //   data: tempMax.slice(0.5),
      // },
      {
        type: 'line',
        label: 'Humidity %',
        backgroundColor: 'blue',
        data: humidity.slice(0.5),
        borderColor: 'white',
        borderWidth: 2,
        fill:true,
      }
      
    ],
  };
  
  const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
  
  
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        
      },
      title: {
        display: false,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
  return (
    <Bar data={data} options={options}/>
  );
}

export default Graph;

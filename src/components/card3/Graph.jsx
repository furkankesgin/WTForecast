import { Bar} from 'react-chartjs-2';
import {splitByHour} from "../../helpers/splitByHour";
import { weekDay } from "../../helpers/dateTime";
import {convertTemp} from "../../helpers/convertUnits"
import { useEffect, useState } from 'react'




const Graph = (props) => {
  const buildGraphDataset=() =>{
    let days = [], temp=[], humidity=[];
    {props.allList.list ? 
      props.allList.list.map((weather)=> splitByHour(weather,"12") ? 
      days.push(weekDay(new Date(weather.dt * 1000).getDay()))+
      temp.push(convertTemp({temp:weather.main.temp, unit:props.unit}))+ 
      humidity.push(weather.main.humidity): <div></div>)
      : <div></div>};
    return {days: days, temp:temp, humidity:humidity}
  }

  useEffect(() => {
   const {days, temp, humidity} = buildGraphDataset()
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


  // const [humidityDataset2, setHumidityDataset2] = useState('');
const a = [setTempVisibility, setHumidityVisibility, setbbVisibility];

  const data = {
    labels: days,
    datasets: [
      {
        
        type: 'line',
        label: 'Temp',
        hidden:tempInvisibility,
        backgroundColor: 'rgb(75, 192, 192)',
        // data: temp.slice(0,5),
        data: temperatureDataset,
        fill:true
      },

      {
        type: 'bar',
        label: 'Humidity %', 
        hidden:humidityInvisibility,
        backgroundColor: 'blue',
        data: humidityDataset,
        borderColor: 'white',
        borderWidth: 2,
        fill:true,
      },
      {
        type: 'bar',
        label: 'bb %', 
        hidden:bbInvisibility,
        backgroundColor: 'blue',
        data: humidityDataset,
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
        'onClick' : function (evt, item) {
          for (let index = 0; index < data.datasets.length; index++) {
            a[index](true);
          }
        a[item.datasetIndex](false);
      },
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

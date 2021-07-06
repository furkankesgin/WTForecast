import {convertTemp} from "../../helpers/convertTemp"
const Card2Background = (props) => {
    var my_key=1;

    
    return (
        <div className="card">
            


            

              {props.forecast.list ? props.forecast.list.map((weather)=> 
weather.dt_txt.split(" ")[1].split(":")[0] == 12 ? 
<div key={my_key+=1} className="weeklyForecast">
    <div className="temp">
    <p>{weather.dt_txt.split(" ")[0].substring(5)}</p>
    <div className='forecastImage'>
    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='vcv'></img>
    </div>
    <h5>{convertTemp(weather.main.temp,"C")+"˚C"}</h5>
    </div>
</div>
: console.log(" ")) :" "}


            </div>
       
    )
}


export default Card2Background;

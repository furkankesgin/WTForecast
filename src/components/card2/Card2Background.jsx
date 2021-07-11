import {convertTemp} from "../../helpers/convertTemp"
import { weekDay } from "../../helpers/weekDays";

const Card2Background = (props) => {
    var today = new Date(),
    day = today.getDay();
    var my_key=1;

    
    return (
        <div className="card">
                        {props.forecast.list ? props.forecast.list.map((weather)=> 
            weather.dt_txt.split(" ")[1].split(":")[0] === "12" ? 
            <div key={my_key+=1} className="flip-card">
                <div className="front">
                    <p>{weather.dt_txt.split(" ")[0].substring(5)}</p>
                    <p>{(weekDay(new Date(weather.dt * 1000).getDay()))}</p>
                        <div className='forecastImage'>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='vcv'></img>
                        </div>
                    <p>{convertTemp(weather.main.temp,"C")+"˚C"}</p>
                </div>
                <div className="back">
                    <div className="bg-backcard">
                    <h6>Temp</h6>
                    <p>{convertTemp(weather.main.temp,"C")+"˚C"}</p>
                    </div>


                    <div className="bg-backcard">
                    <h6>Feels</h6>
                    <p>{convertTemp(weather.main.feels_like,"C")+"˚C"}</p>
                    </div>


                    <div className="bg-backcard">
                    <h6>Temp Min</h6>
                    <p>{convertTemp(weather.main.temp_min,"C")+"˚C"}</p>
                    <h6>Temp Max</h6>
                    <p>{convertTemp(weather.main.temp_max,"C")+"˚C"}</p>
                    </div>

                    
                    

                </div>
            </div>
            : console.log(" ")) :" "}

        </div>
       
    )
}


export default Card2Background;

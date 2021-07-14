import {convertTemp} from "../../helpers/convertTemp"
import { weekDay } from "../../helpers/weekDays";

const Card2Front = (props) => {
    return (
        <div className="front">
       <p>{props.allList.dt_txt.split(" ")[0].substring(5)}</p>
       <p>{(weekDay(new Date(props.allList.dt * 1000).getDay()))}</p>
       <div className='forecastImage'>
            <img src={`https://openweathermap.org/img/wn/${props.allList.weather[0].icon}@2x.png`} alt='vcv'></img>
        </div>
        <p>{convertTemp(props.allList.main.temp,"C")+"˚C"}</p>
       </div>
       
    )
}


export default Card2Front;

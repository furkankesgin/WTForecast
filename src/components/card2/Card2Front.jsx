import {convertTemp} from "../../helpers/convertUnits"
import UNITS from "../../statics/UNITS";
import { weekDay } from "../../helpers/dateTime";
import {CardFront} from "../../styles/card2/Card2Styles" 
const Card2Front = (props) => {
    return (

                <CardFront className="card-color2 p-3 px-2 mx-md-6 col-6 col-sm-5 mt-md-0 col-lg-2 col-xl-2 col-xxl-2.5">
                <p className="h5">{props.allList.dt_txt.split(" ")[0].substring(5)}</p>
                <h6 className="h6">{(weekDay(new Date(props.allList.dt * 1000).getDay()))}</h6>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${props.allList.weather[0].icon}@2x.png`} alt='vcv'></img>
                    </div>
                <p className="h4 mb-0 mt-0 pb-md-2">{convertTemp({temp:props.allList.main.temp, unit:props.unit})+ UNITS[props.unit].temp}</p>
                </CardFront>                  
       
       
    )
}


export default Card2Front;

import {convertTemp} from "../../helpers/convertTemp"
import { weekDay } from "../../helpers/weekDays";
import {splitByHour} from "../../helpers/splitByHour";
import Card2Front from "./Card2Front";
import Card2Back from "./Card2Back";
import Card2BackgroundStyles from "../../styles/card2/Card2BackgroundStyles";

const Card2Background = (props) => {
    var my_key=1;
    return (
        <Card2BackgroundStyles>
            {props.forecast.list ? props.forecast.list.map((weather)=> 
            splitByHour(weather,"12") ? 
            <div key={my_key+=1} className="flip-card">
                    <Card2Front allList={weather}/>
                    <Card2Back allList={weather} />
            </div>
                :console.log("aaa"+weather.dt_txt.split(" ")[1].split(":")[0]))
            :console.log("adana")}
        </Card2BackgroundStyles>
            
       
    )
}


export default Card2Background;

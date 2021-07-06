import {convertTemp} from "../../helpers/convertTemp"
const Card2Background = (props) => {
    var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+ "-" + today.getTime();

   console.log(date);
    var my_key=1;

    
    return (
        <div className="card">
                        {props.forecast.list ? props.forecast.list.map((weather)=> 
            weather.dt_txt.split(" ")[1].split(":")[0] == 12 ? 
            <div key={my_key+=1} className="flip-card">
                <div className="front">
                    <p>{weather.dt_txt.split(" ")[0].substring(5)}</p>
                        <div className='forecastImage'>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='vcv'></img>
                        </div>
                    <h5>{convertTemp(weather.main.temp,"C")+"˚C"}</h5>
                </div>
                <div className="back">
                    <div className="bg-backcard">
                    <h6>Temp</h6>
                    <h3>{convertTemp(weather.main.temp,"C")+"˚C"}</h3>
                    </div>
                    <div className="bg-backcard">
                    <h6>Feels</h6>
                    <h3>{convertTemp(weather.main.feels_like,"C")+"˚C"}</h3>
                    </div>
                    <div className="bg-backcard">
                    <h6>Temp Min</h6>
                    <h3>{convertTemp(weather.main.temp_min,"C")+"˚C"}</h3>
                    <h6>Temp Max</h6>
                    <h3>{convertTemp(weather.main.temp_max,"C")+"˚C"}</h3>
                    </div>
                    
                    

                </div>
            </div>
            : console.log(" ")) :" "}

        </div>
       
    )
}


export default Card2Background;

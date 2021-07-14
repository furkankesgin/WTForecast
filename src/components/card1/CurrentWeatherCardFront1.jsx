import convertTemp from "../../helpers/convertTemp";
import prettifyDate from "../../helpers/prettifyDate";

import { CurrentWeatherCardFrontStyle, CurrentWeatherCardFrontTableStyle } from "../../styles/card1/CurrentWeatherCardFrontStyles.jsx"

const CurrentWeatherCardFront = (props) => {
    
    const iconBaseUrl = "http://openweathermap.org/img/wn/";

    return (
        <CurrentWeatherCardFrontStyle>
            <CurrentWeatherCardFrontTableStyle>

         
                <li> 
                    <div className="second-card">

                        <h4>{props.weather.name ? props.weather.name : "-"} {props.weather.sys ? props.weather.sys.country : "-"}</h4>{/* city */}
                        <h6>lon: {props.weather.coord ? props.weather.coord.lon : "-"} - lat: {props.weather.coord ? props.weather.coord.lat : "-"}</h6>{/* coords */}
 
                        <h1>{props.weather.main ? convertTemp(props.weather.main.temp, "C") + "˚C" : "-"}</h1>
                        <h5>{props.weather.weather ? 
                            `${convertTemp(props.weather.main.temp_min, "C", 0) + "˚C"} - ${convertTemp(props.weather.main.temp_max, "C", 0) + "˚C"}` 
                        : "-"} | feels: {props.weather.main ? convertTemp(props.weather.main.feels_like, "C") + "˚C" : "-"}</h5>
                    </div>
                </li>


                <li>
                    <div className="third-card">
                        <h6>Pressure</h6><h4>{props.weather.weather ? props.weather.main.pressure : "-"} hPa</h4>
                        <hr/>
                        <h6>Humidity</h6><h4>{props.weather.weather ? props.weather.main.humidity : "-"} %</h4>
                        <hr/>
                        <h6>Cloudiness</h6><h4>{props.weather.clouds ? props.weather.clouds.all : "-"} %</h4>
                    </div>
                </li>


                <li>
                   <div className="first-card">
                        <div className="image-card">
                            <img src={props.weather.weather ? iconBaseUrl + props.weather.weather[0].icon + "@2x.png" : "https://github.com/github.png"} alt="weather icon" width="100" height="100"></img>
                        </div>
                        
                        <h4>{props.weather.weather ? props.weather.weather[0].description : "-"}</h4> 
                        {/* <h4>thunderstorm with heavy drizzle</h4> */}
                    </div>
                </li>    


            </CurrentWeatherCardFrontTableStyle> 

            {/* <CurrentWeatherCardFrontTableStyle>
                <li>
                    <div className="bottom-card">
                        <h5>Sun</h5>
                        <div>
                            <h6>Sunrise:&nbsp;</h6><h4>{props.weather.sys ? prettifyDate(props.weather.sys.sunrise).split(",")[1] : "-"}</h4>
                        </div>
                        <div>
                            <h6>Sunset:&nbsp;</h6><h4>{props.weather.sys ? prettifyDate(props.weather.sys.sunset).split(",")[1] : "-"}</h4>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="bottom-card">
                        <h5>Wind</h5>
                        <div>
                            <h6>Speed:&nbsp;</h6><h4>{props.weather.wind ? props.weather.wind.speed : "-"}</h4>
                        </div>
                        <div>
                            <h6>Deg:&nbsp;</h6> <h4>{props.weather.wind ? props.weather.wind.deg : "-"}</h4>
                        </div>
                    </div>
                </li>
            </CurrentWeatherCardFrontTableStyle> */}


            {/*şuna mesaj ekle
            "cod":200 
            */}

        </CurrentWeatherCardFrontStyle>

    )
}


export default CurrentWeatherCardFront;

import styled from 'styled-components';
import convertTemp from "../../helpers/convertTemp";
import prettifyDate from "../../helpers/prettifyDate";

const CurrentWeatherCardFront = (props) => {
    
    return (

        <CurrentWeatherCardFrontStyle style={props.settingsVisibility ? {transform: `rotateY(180deg)`} : {transform: `rotateY(0deg)`}}>

            <MainWeatherStyle>
                {props.weather.main ? convertTemp(props.weather.main.temp, "C") : "-"}
            </MainWeatherStyle>

            {/* city */}
            <div>
                {props.weather.name ? props.weather.name : "-"}

            </div>

            {/* other weather */}
            <div>
                {/* "weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}] */}
                {props.weather.weather ? 
                `icon: ${props.weather.weather[0].icon} 
                description: ${props.weather.weather[0].description}` 
                : "-"}
            </div>

            {/* other weather2 */}
            <div>
                {/* {"main":{"temp":300.53,"feels_like":300.54,"temp_min":298.19,"temp_max":300.83,"pressure":1007,"humidity":44} */}
                {props.weather.weather ? 
                `feels_like: ${props.weather.main.feels_like}
                min: ${props.weather.main.temp_min}
                max: ${props.weather.main.temp_max}
                pressure: ${props.weather.main.pressure}
                humidity: ${props.weather.main.humidity}` 
                : "-"}
            </div>

            {/* coords */}
            <div>
            {/* "coord":{"lon":28.9833,"lat":41.0351}  */}
            {props.weather.coord ? `lon:${props.weather.coord.lon} lat:${props.weather.coord.lat}` : "-"}
            </div>

            {/* clouds */}
            <div>
            {/* "clouds":{"all":40} */}
            {props.weather.clouds ? `clouds: ${props.weather.clouds.all}` : "-"}
            </div>

            {/* wind */}
            <div>
                {/* "wind":{"speed":2.57,"deg":120} */}
                {props.weather.wind ? `speed:${props.weather.wind.speed} deg:${props.weather.wind.deg}` : "-"}
            </div>

            {/* sun */}
            <div>
                {/* "sys":{"type":1,"id":6970,"country":"TR","sunrise":1625452655,"sunset":1625506761} */}
                {props.weather.sys ? 
                `country:${props.weather.sys.country} 
                sunrise:${prettifyDate(props.weather.sys.sunrise)} 
                sunset:${prettifyDate(props.weather.sys.sunset)}
                dt:${prettifyDate(props.weather.dt)}
                `
                : "-"}
            </div>
        
            {/*şuna mesaj ekle
            "cod":200 
            */}
        
        </CurrentWeatherCardFrontStyle>

    )
}

const CurrentWeatherCardFrontStyle = styled.div`
    position: absolute;
    width: 90%; 
    height: 100%;
    /* height: fit-content; */
    transition: transform 1s;
    backface-visibility:hidden;
    background-color: #17B978;

    border-radius: 15px;
`;

const MainWeatherStyle = styled.div`
    font-size: 7em;
    font-weight: bolder;
`;


export default CurrentWeatherCardFront;

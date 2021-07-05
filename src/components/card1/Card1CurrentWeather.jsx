
const Card1CurrentWeather = (props) => {
    return (
        <div>
            {props.weather.main ? props.weather.main.temp : "aaaaa"}
        </div>
    )
}

export default Card1CurrentWeather;

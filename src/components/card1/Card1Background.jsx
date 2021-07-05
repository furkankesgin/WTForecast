import Card1CurrentWeather from "./Card1CurrentWeather"

const Card1Background = (props) => {
    return (
        <div className="card">
            <Card1CurrentWeather weather={props.weather}/>
        </div>
    )
}

export default Card1Background;

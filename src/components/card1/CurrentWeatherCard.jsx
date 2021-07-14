import CurrentWeatherCardFront from './CurrentWeatherCardFront';
import CurrentWeatherCardBack from './CurrentWeatherCardBack';
import ReactCardFlip from 'react-card-flip';

const CurrentWeatherCard = (props) => {
    return (
        <>
            {/* <ReactCardFlip isFlipped={props.settingsVisibility} flipDirection="horizontal"> */}
            <ReactCardFlip isFlipped={props.settingsVisibility} flipDirection="vertical">
    
                <CurrentWeatherCardFront className="front" weather={props.weather} settingsVisibility={props.settingsVisibility} />

                <CurrentWeatherCardBack className="back" settingsVisibility={props.settingsVisibility} />

            </ReactCardFlip>
        </>
    )
}

export default CurrentWeatherCard;

// react card flip
import ReactCardFlip from 'react-card-flip';

// inner components
import CurrentWeatherCardFront from './CurrentWeatherCardFront';
import CurrentWeatherCardBack from './CurrentWeatherCardBack';


const CurrentWeatherCard = (props) => {
    return (
        <ReactCardFlip isFlipped={props.isFront} flipDirection="vertical">

            <CurrentWeatherCardFront keys="front" 
                weather={props.weather} 

                unit={props.unit} 

                customUIElements={props.customUIElements}
            />

            <CurrentWeatherCardBack keys="back" 
                isCityValid={props.isCityValid} 
                setCitySearch={props.setCitySearch} 

                unit={props.unit} 
                setUnit={props.setUnit} 
                
                customUIElements={props.customUIElements} 
                setCustomUIElements={props.setCustomUIElements}

                theme={props.theme}
                setTheme={props.setTheme}
            />

        </ReactCardFlip>
    )
}

export default CurrentWeatherCard;

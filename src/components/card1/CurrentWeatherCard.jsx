import styled from 'styled-components';
import CurrentWeatherCardFront from './CurrentWeatherCardFront';
import CurrentWeatherCardBack from './CurrentWeatherCardBack';

const CurrentWeatherCard = (props) => {
    return (
        <CurrentWeatherCardStyle>

            <CurrentWeatherCardInnerStyle>
    
                <CurrentWeatherCardFront  weather={props.weather} settingsVisibility={props.settingsVisibility} />

                <CurrentWeatherCardBack settingsVisibility={props.settingsVisibility} />

            </CurrentWeatherCardInnerStyle>

        </CurrentWeatherCardStyle>
    )
}


const CurrentWeatherCardStyle = styled.div`
    perspective: 30rem;
`;

const CurrentWeatherCardInnerStyle = styled.div`
    width: 100%; 
    min-height: 20em;
`;


export default CurrentWeatherCard;

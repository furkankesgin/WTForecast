import { useState } from 'react'
import styled from 'styled-components';

import CurrentWeatherCard from "./CurrentWeatherCard"

const Card1 = (props) => {

    const [settingsVisibility, setSettingsVisibility] = useState(false);

    const toggleSettingsMenu = () => {
        setSettingsVisibility(!settingsVisibility)
    }

    return (
        <Card1Style>
            <Card1InnerStyle>
                <CurrentWeatherCard weather={props.weather} settingsVisibility={settingsVisibility}/>
                <SettingsButtonStyle onClick={toggleSettingsMenu}>⚙</SettingsButtonStyle>
            </Card1InnerStyle>
        </Card1Style>
    )
}


const Card1Style = styled.div`
	background-color: #086972;
    padding: 20px;
    border-radius: 15px;
`;

const Card1InnerStyle = styled.div`
    position: relative;
`;

const SettingsButtonStyle = styled.button`
    position: absolute;
    top: 0px;
    right: 0px;

	background: inherit;
	color: inherit;

	border: 2px solid white;
	font-size: 35px;
	border: 0ch;
	/* padding: 0.3em; */
	/* margin-top: 1.5em; */
	cursor: pointer;
    
    &:focus {
  	    outline: none;
    }
    &:hover {
        color: #17B978;
        border-color: #17B978;
        transform: rotate(15deg);
    }
    &:active {
        transform: rotate(30deg);
    }
`;


export default Card1;

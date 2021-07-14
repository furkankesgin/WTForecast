import { useState } from 'react'
import CurrentWeatherCard from "./CurrentWeatherCard"
import CityInfo from "./CityInfo"

import {Card1Style} from "../../styles/card1/Card1Styles.jsx"

const Card1 = (props) => {

    const [settingsVisibility, setSettingsVisibility] = useState(false);

    const toggleSettingsMenu = () => {
        setSettingsVisibility(!settingsVisibility)
    }

    return (
        <Card1Style>
            <div className="card1-inner">
                <CityInfo weather={props.weather}/>
                <CurrentWeatherCard weather={props.weather} settingsVisibility={settingsVisibility}/>
                <button className="settings-button" onClick={toggleSettingsMenu}>⚙</button>
            </div>
        </Card1Style>
    )
}


export default Card1;

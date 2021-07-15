import { useState } from 'react'
import CurrentWeatherCard from "./CurrentWeatherCard"
import CityInfo from "./CityInfo"

import {SettingsButton} from "../../styles/card1/Card1Styles.jsx"
import {Card, Row, Col} from 'react-bootstrap'


const Card1 = (props) => {

    const [settingsVisibility, setSettingsVisibility] = useState(false);

    const toggleSettingsMenu = () => {
        setSettingsVisibility(!settingsVisibility)
    }

    return (
        <Card className="card-color1 p-3">
            <Row>
                <Col>
                    <CityInfo weather={props.weather}/>
                </Col>
                <Col>
                    <SettingsButton className="float-end" onClick={toggleSettingsMenu}><p className="display-6">⚙</p></SettingsButton>
                </Col>
            </Row>

            <Row>
                <Col>
                    <CurrentWeatherCard weather={props.weather} settingsVisibility={settingsVisibility}/>
                </Col>
            </Row>
        </Card>
    )
}


export default Card1;

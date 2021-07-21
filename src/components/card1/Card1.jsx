import { useState } from 'react'
import CurrentWeatherCard from "./CurrentWeatherCard"
import CityInfo from "./CityInfo"

import { SettingsButton } from "../../styles/card1/Card1Styles.jsx"
import { Card, Row, Col } from 'react-bootstrap'


const Card1 = (props) => {

    const [isFront, setIsFront] = useState(false);

    const toggleSettingsMenu = () => {
        setIsFront(!isFront)
    }

    return (
        <Card className="card-color1 p-3">
            <Row>
                <Col className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                    <CityInfo weather={props.weather} customUIElements={props.customUIElements}/>
                </Col>
                <Col className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                    <SettingsButton className="float-end" onClick={toggleSettingsMenu}><p className="display-6">⚙</p></SettingsButton>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <CurrentWeatherCard 
                    weather={props.weather} 

                    isFront={isFront} 

                    isCityValid={props.isCityValid} 
                    setCitySearch={props.setCitySearch} 

                    unit={props.unit} 
                    setUnit={props.setUnit} 

                    customUIElements={props.customUIElements} 
                    setCustomUIElements={props.setCustomUIElements}
                    />
                </Col>
            </Row>
        </Card>
    )
}


export default Card1;

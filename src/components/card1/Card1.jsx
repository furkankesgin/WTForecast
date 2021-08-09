// react
import { useState } from 'react'

// bootstrap
import { Card, Row, Col } from 'react-bootstrap'

// styled components
import { SettingsButton } from "../../styles/card1/Card1Styles.jsx"

// inner components
import CurrentWeatherCard from "./CurrentWeatherCard"
import CityInfo from "./CityInfo"


const Card1 = (props) => {

    // card flipper state
    const [isFront, setIsFront] = useState(false);
    const toggleSettingsMenu = () => {
        setIsFront(!isFront)
    }

    return (
        <Card className="color-primary p-3">
            {/* settings button */}
            <Row>
                <Col className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                    <CityInfo weather={props.weather} customUIElements={props.customUIElements} />
                </Col>
                <Col className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                    <SettingsButton className="float-end" onClick={toggleSettingsMenu}><p className="display-6"><img className="m-0 p-0" src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Settings-icon.png" alt="aa" width="52" height="52"></img></p></SettingsButton>
                </Col>
            </Row>


            {/* inner card */}
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

                        theme={props.theme}
                        setTheme={props.setTheme}
                    />
                </Col>
            </Row>
        </Card>
    )
}


export default Card1;

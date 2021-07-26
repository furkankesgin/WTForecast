// bootstrap
import { Card, Row, Col } from 'react-bootstrap'

// statics
import UNITS from "../../statics/UNITS";
import { iconBaseURL, placeHolderImageURL } from "../../statics/URLS";

// helpers
import { convertTemp, convertSpeed } from "../../helpers/convertUnits";


const CurrentWeatherCardFront = (props) => {
    return (
        <Card className="card-color2 p-3">

            <Row>
                <Col className="col-xxl-10 col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12 align-self-center">
                    {/* other temp elements */}
                    <Row>
                        {
                            props.customUIElements.pressure ?
                                <Col className="col-md-auto">
                                    <p className="text-secondary h6 mb-0 text-center">Pressure</p><p className="text-center"><small>{props.weather.weather ? props.weather.main.pressure : "-"}{UNITS[props.unit].pressure}</small></p>
                                </Col>
                            : ""
                        }
                        {
                            props.customUIElements.humidity ?
                                <Col className="col-md-auto">
                                    <p className="text-secondary h6 mb-0 text-center">Humidity</p><p className="text-center"><small>{props.weather.weather ? props.weather.main.humidity : "-"}{UNITS[props.unit].humidity}</small></p>
                                </Col>
                            : ""
                        }
                        {
                            props.customUIElements.wind ?
                                <Col className="col-md-auto">
                                    <p className="text-secondary h6 mb-0 text-center">Wind</p><p className="text-center"><small>{props.weather.wind ? convertSpeed({speed:props.weather.wind.speed, unit:props.unit}) : "-"}{UNITS[props.unit].wind}</small></p>
                                </Col>                   
                            : ""
                        }
                        {
                            props.customUIElements.cloudiness ?
                                <Col className="col-md-auto">
                                    <p className="text-secondary h6 mb-0 text-center">Cloudiness</p><p className="text-center"><small>{props.weather.clouds ? props.weather.clouds.all : "-"}{UNITS[props.unit].cloudiness}</small></p>
                                </Col>
                            : ""
                        }
                    </Row>

                    {/* main temp */}
                    <Row>
                        <Col className="col-md-auto text-center">
                            <h1 className="display-1">{props.weather.main ? convertTemp({temp:props.weather.main.temp, unit:props.unit}) + UNITS[props.unit].temp : "-"}</h1>
                        </Col>
                    </Row>

                    {/* sub temp elements */}
                    <Row>
                        {
                            props.customUIElements.minmax ?
                                <>
                                    <Col className="col-md-auto">
                                        <p className="text-secondary h6 mb-0 text-center">Min</p><p className="text-center mb-0"><small>{props.weather.weather ? convertTemp({temp:props.weather.main.temp_min, unit:props.unit, fractionDigits:0}) + UNITS[props.unit].temp : "-"}</small></p>
                                    </Col>
                                    <Col className="col-md-auto">
                                        <p className="text-secondary h6 mb-0 text-center">Max</p><p className="text-center mb-0"><small>{props.weather.weather ? convertTemp({temp:props.weather.main.temp_max, unit:props.unit, fractionDigits:0}) + UNITS[props.unit].temp : "-"}</small></p>
                                    </Col>
                                </>
                            : ""
                        }
                        {
                            props.customUIElements.feels ?
                                <Col className="col-md-auto">
                                    <p className="text-secondary h6 mb-0 text-center">Feels</p><p className="text-center mb-0"><small>{props.weather.main ? convertTemp({temp:props.weather.main.feels_like, unit:props.unit, fractionDigits:0}) + UNITS[props.unit].temp : "-"}</small></p>
                                </Col>
                            : ""
                        }
                    </Row>
                </Col>

                {/* temp description and image */}
                <Col className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 align-self-center"> {/* col-6 */}
                    <Card className="card-color2">
                        <img className="align-self-center" src={props.weather.weather ? iconBaseURL + props.weather.weather[0].icon + "@2x.png" : placeHolderImageURL} alt="weather icon" width="100" height="100"></img>
                        <div class="card-body">
                            <p className="h5 text-center">{props.weather.weather ? props.weather.weather[0].description : "-"}</p> 
                            {/* <h6 className="text-center">thunderstorm with heavy drizzle</h6> */}
                        </div>
                    </Card>
                </Col>
            </Row>

        </Card>
    )
}


export default CurrentWeatherCardFront;

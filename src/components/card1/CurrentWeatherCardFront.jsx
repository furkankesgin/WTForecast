import convertTemp from "../../helpers/convertTemp";

import {Card, Row, Col} from 'react-bootstrap'

const CurrentWeatherCardFront = (props) => {

    const iconBaseUrl = "http://openweathermap.org/img/wn/";

    return (
        <Card className="card-color2 p-3">

            <Row>

                <Col className="col-xxl-10 col-xl-10 col-lg-9 col-md-9 col-sm-8 col-xs-8">
                    <Row>
                        <Col className="col-md-auto">
                            <p className="text-secondary h6 mb-0 text-center">Pressure</p><p className="text-center"><small>{props.weather.weather ? props.weather.main.pressure : "-"}hPa</small></p>
                        </Col>
                        <Col className="col-md-auto">
                            <p className="text-secondary h6 mb-0 text-center">Humidity</p><p className="text-center"><small>{props.weather.weather ? props.weather.main.humidity : "-"}%</small></p>
                        </Col>
                        <Col className="col-md-auto">
                            <p className="text-secondary h6 mb-0 text-center">Wind</p><p className="text-center"><small>{props.weather.wind ? props.weather.wind.speed : "-"}m/s</small></p>
                        </Col>{/* Metric: meter/sec, Imperial: miles/hour */}                        
                        <Col className="col-md-auto">
                            <p className="text-secondary h6 mb-0 text-center">Cloudiness</p><p className="text-center"><small>{props.weather.clouds ? props.weather.clouds.all : "-"}%</small></p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-md-auto">
                            <div className="text-center">
                                <Row>
                                    <h1 className="display-1">{props.weather.main ? convertTemp(props.weather.main.temp, "C") + "˚C" : "-"}</h1>
                                </Row>
                                <Row className="g-md-1">
                                    <Col>
                                        <h6 className="text-secondary">{props.weather.weather ? `${convertTemp(props.weather.main.temp_min, "C", 0) + "˚C"} - ${convertTemp(props.weather.main.temp_max, "C", 0) + "˚C"}` : "-"}</h6>
                                    </Col>
                                    <Col>
                                        <h6 className="text-secondary">feels:{props.weather.main ? convertTemp(props.weather.main.feels_like, "C") + "˚C" : "-"}</h6>  
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-4 align-self-center">
                    <Card className="card-color2">
                        <img className="align-self-center" src={props.weather.weather ? iconBaseUrl + props.weather.weather[0].icon + "@2x.png" : "https://github.com/github.png"} alt="weather icon" width="100" height="100"></img>
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

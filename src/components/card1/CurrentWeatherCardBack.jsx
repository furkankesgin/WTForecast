// bootstrap
import { Card, Row, Col } from 'react-bootstrap'

const CurrentWeatherCardBack = (props) => {

    const toggleCustomUI = (name) => {
        // checkbox id's used as name
        props.setCustomUIElements({...props.customUIElements, [name]:!props.customUIElements[name]});
    }

    const changeUnit = (unit) => {
        // checkbox id's used as unit
        props.setUnit(unit);
    }

    return (
        <Card className="card-color2 p-3">
            <Row>

                {/* city selection */}
                <Col className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p className="h4">Choose City</p>
                    <div className="form-floating mb-3"> {/* if value isCityValid is unset show no message if it is set show error or success messages */}
                        <input type="text" className={`form-control ${props.isCityValid}`} placeholder="City" aria-label="city-selection" aria-describedby="city-selection" 
                        onChange={(e) => props.setCitySearch(e.target.value)}/>
                        <label for="city-selection" className="form-label">Search City</label>
                        
                        <div className="valid-feedback">
                            City Found!
                        </div>
                        <div className="invalid-feedback">
                            City Not Found
                        </div>
                    </div>
                </Col>

                {/* Unit selection */}
                <Col className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-0 col-0">
                    <p className="h4">Choose Unit</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="metric" name="unitRadio"
                        checked={props.unit === "metric" ? "checked" : ""}
                        onChange={(e) => changeUnit(e.target.id)} />

                        <label className="form-check-label" for="metricRadio">
                            Metric (˚C)
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="imperial" name="unitRadio"
                        checked={props.unit === "imperial" ? "checked" : ""}
                        onChange={(e) => changeUnit(e.target.id)} />

                        <label className="form-check-label" for="imperialRadio">
                            Imperial (˚F)
                        </label>
                    </div>
                </Col>

                {/* theme selection TODO*/}
                <Col className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-0 col-0">
                    <p className="h4">Choose Theme</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="themeRadio1" name="themeRadio" checked
                        // checked={props.unit === "metric" ? "checked" : ""}
                        onChange={(e) => console.log("theme 1 button")} />

                        <label className="form-check-label" for="themeRadio1">
                            theme 1
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="themeRadio2" name="themeRadio"
                        // checked={props.unit === "imperial" ? "checked" : ""}
                        onChange={(e) => console.log("theme 2 button")} />

                        <label className="form-check-label" for="themeRadio2">
                            theme 2
                        </label>
                    </div>
                </Col>

            </Row>

            {/* ui customization */}
            <Row>
                {/* other temp elements */}
                <p className="h4 mt-2">Customize Look</p>
                <Col>
                    <Row>
                        <Col>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="pressure" 
                                onChange={(e) => toggleCustomUI(e.target.id)}
                                checked={props.customUIElements.pressure ? "checked" : ""} />
                                <label class="form-check-label" for="pressureCheckBox">Pressure</label>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="humidity" 
                                onChange={(e) => toggleCustomUI(e.target.id)}
                                checked={props.customUIElements.humidity ? "checked" : ""}/>
                                <label class="form-check-label" for="humidityCheckBox">Humidity</label>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="wind" 
                                onChange={(e) => toggleCustomUI(e.target.id)}
                                checked={props.customUIElements.wind ? "checked" : ""}/>
                                <label class="form-check-label" for="windCheckBox">Wind</label>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="cloudiness" 
                                onChange={(e) => toggleCustomUI(e.target.id)}
                                checked={props.customUIElements.cloudiness ? "checked" : ""}/>
                                <label class="form-check-label" for="cloudinessCheckBox">Cloudiness</label>
                            </div>
                        </Col>
                    </Row>
                </Col>

                {/* min max - feels like */}
                <Col>
                    <Row>
                        <Col>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="minmax" 
                                onChange={(e) => toggleCustomUI(e.target.id)}
                                checked={props.customUIElements.minmax ? "checked" : ""}/>
                                <label class="form-check-label" for="minmaxCheckBox">Min Max</label>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="feels" 
                                onChange={(e) => toggleCustomUI(e.target.id)}
                                checked={props.customUIElements.feels ? "checked" : ""}/>
                                <label class="form-check-label" for="feelsCheckBox">Feels like</label>
                            </div>
                        </Col>
                    </Row>
                </Col>

                {/* lon lat - sun */}
                <Col>
                    <Row>
                        <Col>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="lonlat" 
                                onChange={(e) => toggleCustomUI(e.target.id)}
                                checked={props.customUIElements.lonlat ? "checked" : ""}/>
                                <label class="form-check-label" for="lonlatCheckBox">Lon Lat</label>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="sun" 
                                onChange={(e) => toggleCustomUI(e.target.id)}
                                checked={props.customUIElements.sun ? "checked" : ""}/>
                                <label class="form-check-label" for="sunCheckBox">Sunrise/set</label>
                            </div>
                        </Col>
                    </Row>
                </Col>

            </Row>

        </Card>
    )
}


export default CurrentWeatherCardBack;

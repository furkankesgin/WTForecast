// bootstrap
import { Row, Col } from 'react-bootstrap'

// helpers
import { prettifyDate } from "../../helpers/dateTime";


const CityInfo = (props) => {
    return (
        <>
            {/* city - country */}
            <p className="display-6 mb-0">{props.weather.name ? props.weather.name : "-"} {props.weather.sys ? props.weather.sys.country : "-"}</p>

            {/* city lon-lat */}
            <Row className="row-cols-auto">
                {
                    props.customUIElements.lonlat ?
                        <>
                            <Col className="pe-0">
                                <p className="h6 mb-1"><small className="text-secondary">Lon:{props.weather.coord ? props.weather.coord.lon : "-"}</small></p>
                            </Col>
                            <Col>
                                <p className="h6 mb-1"><small className="text-secondary">Lat:{props.weather.coord ? props.weather.coord.lat : "-"}</small></p>
                            </Col>
                        </>
                        : ""
                }
            </Row>

            {/* sunrise - sunset */}
            <Row className="row-cols-auto">
                {
                    props.customUIElements.sun ?
                        <>
                            <Col className="pe-0">
                                <p className="h6 mb-0"><small className="text-secondary">Sunrise:{props.weather.sys ? prettifyDate(props.weather.sys.sunrise).split(", ")[1] : "-"}</small></p>
                            </Col>
                            <Col>
                                <p className="h6 mb-0"><small className="text-secondary">Sunset:{props.weather.sys ? prettifyDate(props.weather.sys.sunset).split(", ")[1] : "-"}</small></p>
                            </Col>
                        </>
                        : ""
                }
            </Row>
        </>
    )
}

export default CityInfo;

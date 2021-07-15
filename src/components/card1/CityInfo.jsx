import prettifyDate from "../../helpers/prettifyDate";
import {Row, Col} from 'react-bootstrap'

const CityInfo = (props) => {
    return (
        <>
            <p className="display-6 mb-0">{props.weather.name ? props.weather.name : "-"} {props.weather.sys ? props.weather.sys.country : "-"}</p>
            <Row className="g-md-2">
                <Col className="col-md-auto">
                    <p className="h6 mb-0"><small className="text-secondary">lon:{props.weather.coord ? props.weather.coord.lon : "-"}</small></p>
                </Col>
                <Col className="col-md-auto">
                    <p className="h6 mb-0"><small className="text-secondary">lat:{props.weather.coord ? props.weather.coord.lat : "-"}</small></p>
                </Col>
            </Row>
            <Row className="g-md-2">
                <Col className="col-md-auto">
                    <p className="h6"><small className="text-secondary">Sunrise:{props.weather.sys ? prettifyDate(props.weather.sys.sunrise).split(",")[1] : "-"}</small></p>
                </Col>
                <Col className="col-md-auto">
                    <p className="h6"><small className="text-secondary">Sunset:{props.weather.sys ? prettifyDate(props.weather.sys.sunset).split(",")[1] : "-"}</small></p>
                </Col>
            </Row>
        </>
    )
}

export default CityInfo;

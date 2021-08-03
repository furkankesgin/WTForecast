import {convertSpeed, convertTemp} from "../../helpers/convertUnits"
import UNITS from "../../statics/UNITS";

import {Row} from 'react-bootstrap'
import {CardBack} from "../../styles/card2/Card2Styles" 

const Card2Back = (props) => {
    return (

            <CardBack className="card-back card-color2 align-items-center p-2 mx-md-6 px-2 col-6 col-sm-5 col-sm-4 col-xl-2 mt-md-0 col-lg-2 col-xxl-2.5 mb-0 mt-0">
                <Row>
                    <h6 className="text-secondary mb-0 mt-1">Feels</h6>
                    <p className="h5 mb-1">{props.allList.main ? convertTemp({temp:props.allList.main.feels_like, fractionDigits:0, unit:props.unit})+ UNITS[props.unit].temp:"-"}</p>
                </Row>
                <Row>
                    <h6 className="text-secondary mb-1">Humidity</h6>
                    <p className="h5 mb-0">{props.allList.main ? props.allList.main.humidity + UNITS[props.unit].humidity:"-"}</p>
                </Row>
                <Row className="pt-1">
                    <h6 className="text-secondary mb-0">Wind</h6>
                    <p className="h5 mb-0">{props.allList.main ? convertSpeed({speed:props.allList.wind.speed, unit:props.unit}) + UNITS[props.unit].wind:"-"}</p>
                </Row>
                <Row >
                    <h6 className="text-secondary mb-0">Cloudiness</h6>
                    <p className="h5 mb-0">{props.allList.main ? props.allList.clouds.all+ UNITS[props.unit].cloudiness:"-"}</p>
                </Row>
                
            </CardBack>


       
    )
}

export default Card2Back;

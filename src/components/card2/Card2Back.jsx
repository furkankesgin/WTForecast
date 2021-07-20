import {convertTemp} from "../../helpers/convertUnits"
import {Card, Col, Row} from 'react-bootstrap'
import styled from "styled-components"
import {CardBack} from "../../styles/card2/Card2Styles" 

const Card2Back = (props) => {
    return (

            <CardBack className="card-back card-color2 align-items-center p-2 mx-md-6 px-2 col-6 col-sm-5 col-sm-4 col-xl-2 mt-md-0 col-lg-2 col-xxl-2.5 mb-0 mt-0">
                <Row>
                    <h6 className="text-secondary mb-0">Temp</h6>
                    <p className="h5 mb-1">{convertTemp({temp:props.allList.main.temp, unit:"metric", fractionDigits:0})+"˚C"}</p>
                </Row>
                <Row className="pb-1 pb-xl-2">
                    <h6 className="text-secondary mb-1">Feels</h6>
                    <p className="h5 mb-0">{convertTemp({temp:props.allList.main.feels_like, unit:"metric", fractionDigits:0})+"˚C"}</p>
                </Row>
                <Row >
                    <h6 className="text-secondary mb-0">Temp Min</h6>
                    <p className="h5 mb-0">{convertTemp({temp:props.allList.main.temp_min, unit:"metric", fractionDigits:0})+"˚C"}</p>
                </Row>
                <Row className="pt-1">
                    <h6 className="text-secondary mb-0">Temp Max</h6>
                    <p className="h5 mb-0">{convertTemp({temp:props.allList.main.temp_max, unit:"metric", fractionDigits:0})+"˚C"}</p>
                </Row>
            </CardBack>


       
    )
}

export default Card2Back;

import {splitByHour} from "../../helpers/splitByHour";
import Card2Front from "./Card2Front";
import Card2Back from "./Card2Back";
import {Row, Col} from 'react-bootstrap';
import {Card2Styles} from "../../styles/card2/Card2Styles" 

const Card2Background = (props) => {
    return (
        <Card2Styles className="card-color1 mt-3">
            <Row className="g-md-3 p-3 g-ml-3 justify-content-center">
                    {props.forecast.list ? props.forecast.list.map((weather)=> 
                    splitByHour(weather,"12") ? 
                        <Col className="p-2 col-auto col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2" style={{flex:1}}>
                            <div className="flipcard">
                                <div className="flipcard-wrap">
                                    <Card2Front allList={weather} unit={props.unit}/>
                                    <Card2Back allList={weather} unit={props.unit}/>
                                </div>        
                            </div>                       
                        </Col>
                        :"")
                    :""}
            </Row>
        </Card2Styles>

    )
}


export default Card2Background;

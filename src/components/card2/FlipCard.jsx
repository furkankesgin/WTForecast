import Front from "./Front";
import Back from "./Back";
import {Col} from 'react-bootstrap';

const FlipCard = (props) => {
    return (
        <Col className="p-2 col-auto col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2" style={{flex:1}}>
            <div className="flipcard">
                <div className="flipcard-wrap">
                    <Front allList={props.weather} unit={props.unit}/>
                    <Back allList={props.weather} unit={props.unit}/>
                </div>
            </div>
        </Col>
    );
}

export default FlipCard;


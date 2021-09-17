import { splitByHour } from "../../helpers/splitByHour";
import { Row } from 'react-bootstrap';
import { Card2Styles } from "../../styles/card2/Card2Styles"
import FlipCard from "./FlipCard";

const Card2 = (props) => {
    let dummyWeather = [0, 1, 2, 3, 4];
    return (
        <Card2Styles className="color-primary mt-3">
            <Row className="g-md-3 p-3 g-ml-3 justify-content-center">
                {props.forecast.list ? props.forecast.list.map((weather) =>
                    //get data by time 12:00:00, 
                    splitByHour(weather, "12") ?
                        <FlipCard weather={weather} unit={props.unit} /> : "")
                    //create dummyWeather create empty cards
                    : dummyWeather.map((weather) =>
                        <FlipCard weather={weather} unit={props.unit} />
                    )}
            </Row>
        </Card2Styles>
    )
}
export default Card2;

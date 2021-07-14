import {convertTemp} from "../../helpers/convertTemp"

const Card2Back = (props) => {
    return (
        <div className="back">
            <div className="bg-backcard">
            <h6>Temp</h6>
            <p>{convertTemp(props.allList.main.temp,"C")+"˚C"}</p>
            </div>
            <div className="bg-backcard">
            <h6>Feels</h6>
            <p>{convertTemp(props.allList.main.feels_like,"C")+"˚C"}</p>
            </div>
                <div className="bg-backcard">
                    <h6>Temp Min</h6>
                    <p>{convertTemp(props.allList.main.temp_min,"C")+"˚C"}</p>
                    <h6>Temp Max</h6>
                    <p>{convertTemp(props.allList.main.temp_max,"C")+"˚C"}</p>
                </div>
        </div>
       
    )
}


export default Card2Back;

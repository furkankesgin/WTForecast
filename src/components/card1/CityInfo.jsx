import {CityInfoStyle} from "../../styles/card1/CityInfoStyles.jsx"

const CityInfo = (props) => {
    return (
        <CityInfoStyle>
            <h1>{props.weather.name ? props.weather.name : "-"} {props.weather.sys ? props.weather.sys.country : "-"}</h1>
            <h6>lon: {props.weather.coord ? props.weather.coord.lon : "-"} - lat: {props.weather.coord ? props.weather.coord.lat : "-"}</h6>
            <br />
        </CityInfoStyle>
    )
}

export default CityInfo;

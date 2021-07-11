import styled from 'styled-components';
import convertTemp from "../../helpers/convertTemp";
import prettifyDate from "../../helpers/prettifyDate";

const CurrentWeatherCardFront = (props) => {
    
    const iconBaseUrl = "http://openweathermap.org/img/wn/";

    return (

        <CurrentWeatherCardFrontStyle style={props.settingsVisibility ? {transform: `rotateY(180deg)`} : {transform: `rotateY(0deg)`}}>

            {/* <CurrentWeatherCardFrontInnerStyle> */}
            <ul>
                <li>
                   <div className="first-div">

                        <div className="image-div">
                            <img src={props.weather.weather ? iconBaseUrl + props.weather.weather[0].icon + "@2x.png" : "https://github.com/github.png"} alt="weather icon" width="100" height="100"></img>
                        </div>
                        
                        <h4>{props.weather.weather ? props.weather.weather[0].description : "-"}</h4> 
                        {/* <h4>thunderstorm with heavy drizzle</h4> */}

                    </div>
                </li>    

        
                <li> 
                    <div className="middle-div">

                        <h4>{props.weather.name ? props.weather.name : "-"} {props.weather.sys ? props.weather.sys.country : "-"}</h4>{/* city */}
                        <h6>lon: {props.weather.coord ? props.weather.coord.lon : "-"} - lat: {props.weather.coord ? props.weather.coord.lat : "-"}</h6>{/* coords */}
 

                        <h1>{props.weather.main ? convertTemp(props.weather.main.temp, "C") + "˚C" : "-"}</h1>
                        <h5>{props.weather.weather ? 
                            `${convertTemp(props.weather.main.temp_min, "C", 0) + "˚C"} - ${convertTemp(props.weather.main.temp_max, "C", 0) + "˚C"}` 
                        : "-"} | feels: {props.weather.main ? convertTemp(props.weather.main.feels_like, "C") + "˚C" : "-"}</h5>
                        {/* <h4>{props.weather.weather ? props.weather.weather[0].description : "-"}</h4> */}
                    </div>
                </li>


                {/* <li className="right-li">
                    <ul>
                        <li>
                            <VerticalLineStyle />
                        </li>
                        <li>
                            <div className="side-stuff">
                                <h4>pressure: {props.weather.weather ? props.weather.main.pressure : "-"}</h4>
                                <h4>humidity: {props.weather.weather ? props.weather.main.humidity : "-"}</h4>
                                <h4>clouds: {props.weather.clouds ? props.weather.clouds.all : "-"}</h4>
                                <h4>Wind speed: {props.weather.wind ? props.weather.wind.speed : "-"}</h4>
                                <h4>Wind deg: {props.weather.wind ? props.weather.wind.deg : "-"}</h4>
                            </div>
                        </li>
                    </ul>
                </li> */}

                <li className="right-li">
                    <div className="side-stuff">
                        <h4>pressure: {props.weather.weather ? props.weather.main.pressure : "-"}</h4>
                        <h4>humidity: {props.weather.weather ? props.weather.main.humidity : "-"}</h4>
                        <h4>clouds: {props.weather.clouds ? props.weather.clouds.all : "-"}</h4>
                        <h4>Wind speed: {props.weather.wind ? props.weather.wind.speed : "-"}</h4>
                        <h4>Wind deg: {props.weather.wind ? props.weather.wind.deg : "-"}</h4>
                    </div>
                </li>


            </ul> 
            {/* </CurrentWeatherCardFrontInnerStyle> */}


            {/* <CurrentWeatherCardFrontInnerStyle2>
                wind
                <h4>Wind speed: {props.weather.wind ? props.weather.wind.speed : "-"}</h4>
                <h4>Wind deg: {props.weather.wind ? props.weather.wind.deg : "-"}</h4>

                <div>
                    sun 

                    <h4>sunrise: {props.weather.sys ? prettifyDate(props.weather.sys.sunrise) : "-"}</h4>
                    <h4>sunset: {props.weather.sys ? prettifyDate(props.weather.sys.sunset) : "-"}</h4>
                    <h4>dt: {props.weather.dt ? prettifyDate(props.weather.dt) : "-"}</h4>
                </div>

            </CurrentWeatherCardFrontInnerStyle2> */}

            {/*şuna mesaj ekle
            "cod":200 
            */}
        
        </CurrentWeatherCardFrontStyle>

    )
}

// const CurrentWeatherCardFrontStyle = styled.div`
//     position: absolute;


//     width: 90%; 
//     height: 100%;

//     transition: transform 1s;
//     backface-visibility:hidden;
//     background-color: #17B978;

//     border-radius: 15px;
//     padding: 0.7rem;
// `;


const VerticalLineStyle = styled.div`
    border-left: 2px solid white;
    height: 7rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;



/* const CurrentWeatherCardFrontInnerStyle = styled.div` */
const CurrentWeatherCardFrontStyle = styled.div`


position: absolute;
width: 90%; 
/* height: fit-content; */


transition: transform 1s;
backface-visibility:hidden;
background-color: #17B978;

border-radius: 15px;
padding: 0.7rem;


    /* background-color: #034b99; */
    border-radius: 15px;
    /* display: inline-block; */
    
    padding: 1rem;
    /* text-align: center; */

    /* display: inline; */

    .image-div{
        display: inline-block;
        background-color: #007bff;
        border-radius: 50%;
        /* display: inline-block; */
        /* position: absolute; */
        /* padding: 0.3rem; */
        /* margin-top: 0.3rem; */
        
        /* margin-right: 1rem; */
        /* margin-top: 1em; */

    } 

    .description-div{
        /* inline-size: 100%; 
        overflow: hidden; */
    }


    .first-div{
        padding: 0.5rem;
        /* padding-left: 0.5rem; */
        text-align: center;
        background-color: #002d5e;
        border-radius: 15px;
        width: 140px;

        margin-right: 0.3rem;
    }


    .right-div{
        /* position: fixed; */

    }

    .middle-div{
        padding: 0.5rem;
        /* padding-left: 0.5rem; */
        text-align: center;
        background-color: #002d5e;
        border-radius: 15px;
    }

    .right-li{
        /* display: block; */
        /* float: right; */

    }

    .side-stuff{

        margin-left: 0.3rem;

        padding: 0.3rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;

        background-color: #002d5e;
        border-radius: 15px;
        /* display: inline-block; */
        /* position: absolute; */
        /* padding: 0.5rem; */
        /* margin-top: 0.3rem; */
        
        /* margin-right: 1rem; */
        

        h4{
            margin-bottom: 0.5rem;
            /* margin-bottom: 0.3rem; */
            font-size: 0.7em;
            /* margin-top: 0.3rem; */
            /* font-size: 0.7em; */
            font-weight: lighter;  
        }
            
    }

    ul{
        vertical-align:middle;
        justify-content: space-around; 
        display: flex;

        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        /* list-style: none; */
    }
  
    .right-li{
        display: block;
        vertical-align: top;
    }


    li {
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;

        display: inline-block;
        /* line-height: 1.2em; */
        /* height: 1px;
        line-height: 1px; */
        /* display:table-cell */
        vertical-align: middle;
    }

    /* text-align: center; */

    h1{
        font-size: 3em;
        font-weight: bolder;
    }

    h3{
        margin-left: 0.2rem;
        font-weight: lighter;   
        color: #f2f2f2ba;
    }

    h4{
        font-size: 0.8em;
        margin-top: 0.3rem;
        /* font-size: 0.7em; */
        font-weight: lighter; 
    }

    h5{
        font-size: 0.7em;
        /* margin-top: -0.3em; */
        font-weight: lighter;   
        color: #f2f2f2ba;
    }

    h6{
        font-size: 0.5em;
        font-weight: lighter;   
        color: #f2f2f2ba;
    }

    img{
        /* position: absolute;
        top: 0%;
        left: 0%;

        z-index: -1; */
    }

    
`;




const CurrentWeatherCardFrontInnerStyle2 = styled.div`

    background-color: #034b99;
    border-radius: 15px;
    /* display: inline-block; */
    
    margin-top: 0.5rem;
    padding: 1rem;


    div:nth-child(1){
        padding: 0.2rem;
        margin-top: 0.3rem;
    } 

    div:nth-child(2){
        /* margin: 1rem; */
        margin-left: 5.5em;
        /* background-color: green; */
        /* text-align: center;
        display: block; */



    } 


    h1{
        font-size: 3em;
        font-weight: bolder;
    }

    h3{
        margin-left: 0.2rem;
        font-weight: lighter;   
        color: #f2f2f2ba;
    }

    h5{
        font-size: 0.7em;
        font-weight: lighter;   
        color: #f2f2f2ba;
    }


    
`;




export default CurrentWeatherCardFront;

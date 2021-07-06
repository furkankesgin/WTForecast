import styled from 'styled-components';

const CurrentWeatherCardBack = (props) => {
    return (
        <CurrentWeatherCardBackStyle style={props.settingsVisibility ? {transform: `rotateY(360deg)`} : {transform: `rotateY(180deg)`}}>
            <SettingsFormStyle>
                <label>test</label>
                <input type='text' placeholder='test' />
            </SettingsFormStyle> 
        </CurrentWeatherCardBackStyle>
    )
}

const CurrentWeatherCardBackStyle = styled.div`
    position: absolute;
    width: 90%; 
    height: 100%;
    /* height: fit-content; */
    transition: transform 1s;
    backface-visibility:hidden;
    background-color: #17B978;

    border-radius: 15px;
`;


const SettingsFormStyle = styled.div`
position: absolute;
top: 10%;
right: 5%;

z-index: 1;

label {
    
}

input {
    float: right;
    width: 50%;
    height: 2em;
    padding-left: 1em;
    padding-right: 1em;
    font-size: 15px;
    border-radius: 15px;
}
input:focus {
    box-shadow: 0px 0px 1px 2px #17B978;
    outline: none;
}

`;



export default CurrentWeatherCardBack;

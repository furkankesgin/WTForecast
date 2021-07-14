import styled from 'styled-components';

const CurrentWeatherCardFrontStyle = styled.div`
    width: 90%; 
    backface-visibility:hidden;
    background-color: #17B978;
    border-radius: 15px;
    padding: 1rem;
    color: #3c3c3c;
`;

const CurrentWeatherCardFrontTableStyle = styled.ul`
    /* ul */
    vertical-align:middle;
    justify-content: space-between; 
    display: flex;

    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;

    li {
        display: inline-block;
        vertical-align: middle;
    }

    .image-card{
        display: inline-block;
        background-color: #007bff;
        border-radius: 30%;
    } 

    .second-div{
        text-align: center;
        border-radius: 15px;
        width: 140px;
    }

    .first-div{
        text-align: left;
        border-radius: 15px;
    }

    .top-div{
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        hr{
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }

        h4{
            font-weight: lighter;
        }

        h6 ~ h4{
            margin-top: 0.1rem;
        }

        hr{
            margin-top: 0.3rem;
            margin-bottom: 0.3rem;
        }
    }

    h1{
        font-size: 5em;
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
        font-weight: lighter; 
    }

    h5{
        font-size: 0.7em;
        font-weight: lighter;   
        color: #f2f2f2ba;
    }

    h6{
        font-size: 0.5em;
        font-weight: lighter;   
        color: #f2f2f2ba;
    }

`;


export {CurrentWeatherCardFrontStyle, CurrentWeatherCardFrontTableStyle}

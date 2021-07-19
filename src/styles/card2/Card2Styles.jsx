import styled from "styled-components";
import {Card, Row, Col} from 'react-bootstrap';

const Card2Styles = styled(Card)`

    .flipcard {
    perspective: 1000px;
    z-index: 2;
    width: 100%;
    height: 100%;
    position: relative;
    backface-visibility: hidden;
    transition: all .3s;
    text-align: center;
    }
    .flipcard .flipcard-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    }
    
    .flipcard:hover .flipcard-wrap {
    transform: rotateY(-180deg);
    }

`;

const CardFront = styled(Card)`
    width: 100%;
    position: relative;
    backface-visibility: hidden;
    transition: all .3s;
    text-align: center;
`;

const CardBack = styled(Card)`
    width: 100%;
    height: 100%;
    /* position: relative; */
    backface-visibility: hidden;
    transition: all .3s;
    text-align: center;
    position: absolute;
    top: 0;
    transform: rotateY(180deg);
`;


export {Card2Styles, CardFront, CardBack};

// styled components
import styled from "styled-components";

// bootstrap
import { Card } from 'react-bootstrap';

const HeaderStyle = styled(Card)`

    .flip-card { 
        perspective: 1000px;
        width: 100%;
        height: 100%;
        position: relative;
        backface-visibility: hidden;
        transition: all .3s;
    }
    .flip-card .flip-card-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
    
    .flip-card:hover .flip-card-wrap {
        transform: rotateX(-180deg);
    }

`;

const HeaderFrontStyle = styled(Card)`
    width: 100%;
    position: relative;
    backface-visibility: hidden;
    transition: all .3s;
    text-align: center;
`;

const HeaderBackStyle = styled(Card)`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: all .3s;
    text-align: center;
    position: absolute;
    top: 0;
    transform: rotateX(180deg);

    /* bootstrap 5 sizes
    <576px	xs
    ≥576px	sm
    ≥768px	md
    ≥992px	lg
    ≥1200px	xl
    ≥1400px xxl */

    @media (max-width: 780px) {
        p{
            font-size: 15px;
        }
        a{
            font-size: 15px;
        }
    }

    @media (max-width: 400px) {
        p{
            font-size: 12px;
        }
        a{
            font-size: 12px;
        }
    }
`;


export { HeaderFrontStyle, HeaderBackStyle, HeaderStyle };
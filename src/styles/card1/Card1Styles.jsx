import styled from 'styled-components';

const Card1Style = styled.div`
	background-color: #086972;
    padding: 20px;
    border-radius: 15px;
    
    .card1-inner{
        position: relative;
    }

    .settings-button{
        position: absolute;
        top: 0px;
        right: 0px;

        background: inherit;
        color: inherit;

        border: 2px solid white;
        font-size: 35px;
        border: 0ch;
        /* padding: 0.3em; */
        /* margin-top: 1.5em; */
        cursor: pointer;
        
        &:focus {
            outline: none;
        }
        &:hover {
            color: #17B978;
            border-color: #17B978;
            transform: rotate(15deg);
        }
        &:active {
            transform: rotate(30deg);
        }
    }

`;




export {Card1Style}


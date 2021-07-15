import styled from 'styled-components';

const SettingsButton = styled.button`
    background: inherit;
    color: inherit;

    border: 2px solid white;
    font-size: 35px;
    border: 0ch;
    cursor: pointer;
    
    &:focus {
        outline: none;
    }
    &:hover {
        color: var(--button-color2);
        border-color: var(--button-color2);
        transform: rotate(15deg);
    }
    &:active {
        transform: rotate(30deg);
    }
`;

export {SettingsButton}


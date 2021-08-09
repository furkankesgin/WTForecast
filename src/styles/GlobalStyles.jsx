import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --background-color: ${ props  => props.theme.background_color };        
        --color-primary: ${ props  => props.theme.color_primary };
        --color-secondary: ${ props  => props.theme.color_secondary };
        
        --text-primary: ${ props  => props.theme.text_primary };
        --text-secondary: ${ props  => props.theme.text_secondary };
        --text-important: ${ props  => props.theme.text_important };
    }

    *{
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-size: 1.2rem;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        background-color: var(--background-color) !important;
        color: var(--text-primary);
    }

    .card{
        border-radius: 15px !important;
        border:0px;
    }

    .color-primary{
        background-color: var(--color-primary);
    }

    .color-secondary{
        background-color: var(--color-secondary);
    }



    .text-secondary{
        color: var(--text-secondary) !important;
    }

    .text-important{
        color: var(--text-important) !important;
    }

    a{
        color: var(--color-secondary) !important;
    }



    /* img, svg{
        border: 2px #02b7c2 solid;
        border-radius: 50%;
    } */

`;

export default GlobalStyles;

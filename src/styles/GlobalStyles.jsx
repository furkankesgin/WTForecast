import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        /* --primary-color:#007bff;
        --secondary-color:#6c757d;
        --background-dark-color:#10121A;
        --background-dark-grey:#191d2b;
        --border-color:#00ffcd;
        --background-light-color:#f1f1f1;
        --background-light-color-2:rgba(3,127,255,.3);
        --white-color:#fff;
        --font-light-color:#a4acc4;
        --font-dark-color:#313131;
        --font-dark-color-2:#151515;
        --sidebar-dark-color:#191d2b;
        --scrollbar-bg-color: #6b6b6b;
        --scrollbar-track-color: #383838;  */

        --card-color1: #086972;
        --card-color2: #17B978;
        --card-color3: #A7FF83;
        /* --cardColor4: #086972; */

        --text-primary: #3c3c3c;
        --text-secondary: #e2e2e2;

        --button-color1: #3c3c3c;
        --button-color2: #17B978;

        --background-color: #071A52;

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
        background-color: #071A52 !important;
        color: var(--text-primary);
    }

    .header{
        header{
            font-family: "Handlee";
        }
        color: white;
        background-color: var(--background-color);
    }

    .card{
        border-radius: 15px !important;
    }

    .card-color1{
        background-color: var(--card-color1);
    }

    .card-color2{
        background-color: var(--card-color2);
    }


    .text-primary{
        color: var(--text-primary);
    }

    .text-secondary{
        color: var(--text-secondary) !important;
    }

`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color:#007bff;
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
        --scrollbar-track-color: #383838; 
    }

    *{
        margin:0; 
        padding:0;
        box-sizing:border-box;
        list-style:none;
        text-decoration:none;
        font-size:1.2rem;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        background-color: #071A52;
        color: #ffff;
    }

    .card{
        border: 2px solid var(--border-color);
        padding: 10px;
        border-radius: 15px;
        margin-top: 1rem;
    }

    .container {
        max-width: 40%;
        margin: 30px auto;
        padding: 30px;
    }

`;

export default GlobalStyle;

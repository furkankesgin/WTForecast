import { createGlobalStyle } from "styled-components";
import COLORS from "../statics/COLORS";

const GlobalStyles = createGlobalStyle`
    /* :root{
        --color-primary: ${COLORS.light.color_primary};
        --color-secondary: ${COLORS.light.color_secondary};

        --text-primary: ${COLORS.light.text_primary};
        --text-secondary: ${COLORS.light.text_secondary};

        --background-color: ${COLORS.light.background_color};
        --text-important: ${COLORS.light.text_important};
    } */

    :root{
        --color-primary: ${COLORS.dark.color_primary};
        --color-secondary: ${COLORS.dark.color_secondary};
        
        --text-primary: ${COLORS.dark.text_primary};
        --text-secondary: ${COLORS.dark.text_secondary};
        
        --background-color: ${COLORS.dark.background_color};
        --text-important: ${COLORS.dark.text_important};
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

    .header{
        header{
            font-family: "Handlee";
        }
        color: var(---text-primary);
        background-color: var(--background-color);
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


    .text-primary{
        color: var(--text-primary);
    }

    .text-secondary{
        color: var(--text-secondary) !important;
    }

    .text-important{
        color: var(--text-important) !important;
    }

    /* img, svg{
        border: 2px #02b7c2 solid;
        border-radius: 50%;
    } */

`;

export default GlobalStyles;

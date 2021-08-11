import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --background-color: ${props => props.theme.background_color};        
        --color-primary: ${props => props.theme.color_primary};
        --color-secondary: ${props => props.theme.color_secondary};
        
        --text-primary: ${props => props.theme.text_primary};
        --text-secondary: ${props => props.theme.text_secondary};
        --text-important: ${props => props.theme.text_important};

        --form-placeholder: ${props => props.theme.form_placeholder};
        --valid-input: ${props => props.theme.valid_input};
        --invalid-input: ${props => props.theme.invalid_input};
    }

    * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-size: 1.2rem;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: var(--background-color) !important;
        color: var(--text-primary);
    }

    .card {
        border-radius: 15px !important;
        border:0px;
    }

    .color-primary {
        background-color: var(--color-primary);
    }

    .color-secondary {
        background-color: var(--color-secondary);
    }



    .text-secondary {
        color: var(--text-secondary) !important;
    }

    .text-important {
        color: var(--text-important) !important;
    }

    a {
        color: var(--color-secondary) !important;
    }


    /* bootstrap customizations */

    .form-check-input:checked {
        background-color: var(--text-important);
        border-color: var(--text-important);
    }

    .form-check-input:focus {
        outline: none;
        box-shadow: none;
    }

    .form-control:focus {
        border-color: var(--text-important);
        box-shadow: inset 0 0px 7px rgb(252, 252, 252), 0 0 7px var(--text-important);
    }

    .form-floating {
        color: var(--form-placeholder);
    }

    .valid-feedback {
        color: var(--valid-input) !important;
    }

    .invalid-feedback {
        color: var(--invalid-input) !important;
    }

    .is-valid {
        border-color: var(--valid-input) !important;
        box-shadow: inset 0 0px 7px rgb(252, 252, 252), 0 0 10px var(--valid-input) !important;
    }

    .is-invalid {
        border-color: var(--valid-input) !important;
        box-shadow: inset 0 0px 7px rgb(252, 252, 252), 0 0 10px var(--invalid-input) !important;
    }

`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --gray-600: #3D3C42;
        --gray-700:#222f3e;
        --violet-200:#6c5ce7;
        --violet-400:#5f27cd;
        --green-500:#44bd32;
    }    

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--gray-600);
    }

    body, input, select, textarea, button{
        font-family: 'Poppins',sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

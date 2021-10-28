import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --gray-100:#dfe6e9;
        --gray-600: #3D3C42;
        --gray-700:#222f3e;
        --violet-200:#6c5ce7;
        --violet-400:#5f27cd;
        --green-500:#44bd32;
    }    

    html{
        //15px
        @media(max-width:1120px){
            font-size: 93.5%;
        }

        //14px
        @media(max-width:720px){
            font-size: 83.75%;
        }
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--gray-600);
        color: var(--gray-100);
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
    }
`;

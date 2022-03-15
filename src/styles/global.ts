    import { createGlobalStyle } from "styled-components";
    
    //criado componente com configurações globais
    export const GlobaStyle = createGlobalStyle`

    //declarando variaveis css
    :root{
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;

        --blue-light:#6933ff;

        --text-title:#363f3f;
        --text-body: #969cb3;

        --backgroud: #f8f2f5;
        --shape: #ffffff;
    }

    //estilização geral
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    //deixando fontes responsivas e tornando acessiveis
    html{ 
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px

        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }

    }

    body, input,textarea, button{
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }

    //estilização do body
    body {
        //utilizando variaveis do css
        background: var(background);
        --webkit-font-smoothing:antialiased;
    }

    //estilizando buttom
    buttom {
        cursor: pointer;
    }
    //estilizando disable
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);

        position: fixed;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items:center ;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem ;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute ;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s ;
        
        &:hover{
        filter: brightness(0.8) ;
    }
    }

   

    `
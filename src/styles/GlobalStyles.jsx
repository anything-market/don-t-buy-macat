import './font.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    
    .A11yHidden{
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        clip-path: polygon(0 0, 0 0, 0, 0);
    }
    a{
        text-decoration:none;
        cursor: pointer;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    html {
        font-size: 10px;
    }
    body{
        font-family: 'Pretendard', sans-serif;
    }
    img{
        width: 100%;
        height: auto;
    }
    button {
        border: none;
        cursor: pointer;
        padding: 0;
        background-color: inherit;
    }
    input {
        &:focus {
        outline:none;
      }
    }
    textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; 
}
`;
export default GlobalStyles;

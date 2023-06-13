import { createGlobalStyle } from 'styled-components'
import { normalize } from "styled-normalize";


const globalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }
  
  :root{
    font-size:10px;
  }
  
  html{
    height:100vh; /* cngn */
  }

  body {
    width:100%;
    border: 1px solid black;
  }

  button {
    background-color: initial;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin:0; 
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`
export default globalStyle;
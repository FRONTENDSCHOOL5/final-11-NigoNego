import { createGlobalStyle } from 'styled-components'
import { normalize } from "styled-normalize";


const globalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    font-size: 12px;
  }
  
  html{
    width:390px;
    height:100vh; /* cngn */
    margin: 0 auto;
  }

  body {
    width:100%;
    border: 1px solid black;
  }
`
export default globalStyle;
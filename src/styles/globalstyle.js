import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const globalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }
  
  :root {
    font-size:10px;
    --light-yellow:#FFECA7;
    --basic-yellow:#FFDE00;
    --basic-grey:#767676;
    --light-grey:#EFEFEF;
    --basic-orange:#F37831;
    --basic-red:#C01605;
    --basic-blue:#026cc4;
    --basic-black:#000;
    --basic-border-color: #DBDBDB;
    
  }
  
  html{
    height:100vh; /* cngn */
  }

  body {
    width:100%;
    /* border: 1px solid black; */
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
`;
export default globalStyle;

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const globalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  
  :root {
    font-size:10.5px;
    --light-yellow:#FFECA7;
    --basic-yellow:#FFDE00;
    --basic-grey:#767676;
    --bg-border-color:#F2F2F2;
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

  .body-wrapper {
    margin: 4.8rem 10px 0px 10px;
    /* box-shadow: inset 0px 0px 3px 1px rgb(0, 38, 255); */
    height: 90vh;
    overflow: scroll;
  }
`;
export default globalStyle;

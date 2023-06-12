import { createGlobalStyle } from 'styled-components'
import { normalize } from "styled-normalize";


const globalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    font-size: 12px;
  }
`
export default globalStyle;
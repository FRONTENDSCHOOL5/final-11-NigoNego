import styled from "styled-components";

const Layout = styled.article`
  max-width: 390px;
  position: relative;
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.1), -4px 0 4px rgba(0, 0, 0, 0.1); /* 양쪽에 흐림 효과를 줍니다 */
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;

export default Layout;
import styled from "styled-components";

const Layout = styled.div`
  max-width: 390px;
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.1), -4px 0 4px rgba(0, 0, 0, 0.1); /* 양쪽에 흐림 효과를 줍니다 */
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  box-sizing: border-box;
  //padding: 48px 0 73px;
`;

export default Layout;
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  width: 100%;
  border-top: 1px solid var(--basic-border-color);
  color: var(--basic-grey);
  position: fixed;
  bottom: 0px;
  background-color: #fff;
  p {
    margin: 5px 0 0 0;
  }

  ul {
    display: flex;
    padding: 10px;
    justify-content: center;
  }

  li {
    width: 100px;

    button {
      width: 100%;
      border: none;
      font-size: 1.4rem;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      * {
        pointer-events: none;
      }
    }
  }
`;

export { NavbarWrapper };

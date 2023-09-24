import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  border-top: 1px solid var(--basic-border-color);
  color: var(--basic-grey);
  position: absolute;
  bottom: 0px;
  background-color: #fff;
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
  }

  li {
    width: calc(100% / 4);

    button {
      width: 100%;
      padding: 10px;
      border: none;
      font-size: 1.4rem;
      flex-direction: column;
      align-items: center;
      * {
        pointer-events: none;
      }
    }
  }
`;

export { NavbarWrapper };

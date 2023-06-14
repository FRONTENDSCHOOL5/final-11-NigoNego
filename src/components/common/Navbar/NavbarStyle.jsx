import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarWrapper = styled.nav`
  width: 100%;
  background-color: yellow;
`;

const NavbarLink = styled(Link)`
  padding: 10px;
`;

export { NavbarWrapper, NavbarLink };

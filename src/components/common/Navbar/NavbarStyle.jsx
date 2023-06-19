import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import navIcon from '../../../assets/images/navbar-icon.png';

const NavbarWrapper = styled.nav`
  width: 100%;
  border-top: 1px solid var(--basic-border-color);
  color: var(--basic-grey);
  position: fixed;
  bottom: 0px;
`;

const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  flex-grow: 1;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

// Nav탭 기본 사이즈
const NavTapDefault = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${navIcon});
`;

const PostUpload = styled(NavTapDefault)`
  background-position: -10px -10px;
`;

const HomeIcon = styled(NavTapDefault)`
  background-position: -10px -54px;
`;

const Message = styled(NavTapDefault)`
  background-position: -54px -10px;
`;

const UserProfile = styled(NavTapDefault)`
  background-position: -54px -54px;
`;

const PostUploadActive = styled(NavTapDefault)`
  background-position: -10px -98px;
`;

const HomeIconActive = styled(NavTapDefault)`
  background-position: -54px -98px;
`;

const MessageActive = styled(NavTapDefault)`
  background-position: -98px -54px;
`;

const UserProfileActive = styled(NavTapDefault)`
  background-position: -98px -10px;
`;

export {
  NavbarWrapper,
  Ul,
  Li,
  PostUpload,
  HomeIcon,
  Message,
  UserProfile,
  PostUploadActive,
  HomeIconActive,
  MessageActive,
  UserProfileActive,
};

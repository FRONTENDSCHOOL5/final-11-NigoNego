import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import {
  NavbarWrapper,
  PostUploadActive,
  HomeIconActive,
  MessageActive,
  UserProfileActive,
} from './NavbarStyle';

import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <NavbarWrapper>
      <ul>
        <li>
          <a href="www.jdjkd.com">
            <HomeIconActive />
            <p>홈</p>
          </a>
        </li>
        <li>
          <a href="www.jdjkd.com">
            <MessageActive />
            <p>채팅</p>
          </a>
        </li>
        <li>
          <a href="www.jdjkd.com">
            <PostUploadActive />
            <p>게시물 작성</p>
          </a>
        </li>
        <li>
          <Link to="/myprofile">
            <UserProfileActive />
            <p>프로필</p>
          </Link>
          {/* <a href="www.jdjkd.com">
            <p>프로필</p>
          </a> */}
        </li>
      </ul>
    </NavbarWrapper>
  );
}

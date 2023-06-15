import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import {
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
} from './NavbarStyle';

export default function Navbar() {
  return (
    <NavbarWrapper>
      <Ul>
        <Li>
          <a href="www.jdjkd.com">
            <HomeIcon />
            <p>홈</p>
          </a>
        </Li>
        <Li>
          <a href="www.jdjkd.com">
            <Message />
            <p>채팅</p>
          </a>
        </Li>
        <Li>
          <a href="www.jdjkd.com">
            <PostUpload />
            <p>게시물 작성</p>
          </a>
        </Li>
        <Li>
          <a href="www.jdjkd.com">
            <UserProfile />
            <p>프로필</p>
          </a>
        </Li>
        <Li>
          <a href="www.jdjkd.com">
            <HomeIconActive />
            <p>홈</p>
          </a>
        </Li>
        <Li>
          <a href="www.jdjkd.com">
            <MessageActive />
            <p>채팅</p>
          </a>
        </Li>
        <Li>
          <a href="www.jdjkd.com">
            <PostUploadActive />
            <p>게시물 작성</p>
          </a>
        </Li>
        <Li>
          <a href="www.jdjkd.com">
            <UserProfileActive />
            <p>프로필</p>
          </a>
        </Li>
      </Ul>
    </NavbarWrapper>
  );
}

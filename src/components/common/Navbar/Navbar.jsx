import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { ReactComponent as HomeIcon } from '../../../assets/icons/icon-home-fill.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/icon-message-circle.svg';
import { ReactComponent as PostIcon } from '../../../assets/icons/icon-edit.svg';
import { ReactComponent as ProfileIcon } from '../../../assets/icons/icon-user.svg';
import { ReactComponent as HomeIconF } from '../../../assets/icons/icon-home-f.svg';
import { ReactComponent as ChatIconF } from '../../../assets/icons/icon-message-circle-f.svg';
import { ReactComponent as PostIconF } from '../../../assets/icons/icon-edit-f.svg';
import { ReactComponent as ProfileIconF } from '../../../assets/icons/icon-user-fill-f.svg';

export default function Navbar({ homeV, chatV, postV, profileV }) {
  const navigate = useNavigate();
  const [homeFill, setHomeFill] = useState(true);
  const [chatFill, setChatFill] = useState(true);
  const [postFill, setPostFill] = useState(true);
  const [profileFill, setProfileFill] = useState(true);

  const user = 'nigonego';

  async function handleClick(e) {
    if (e.target.value == '/homefeed') {
      setHomeFill(false);
      navigate('/homefeed');
    } else if (e.target.value == '/chat') {
      setChatFill(false);
      navigate('/chat');
    } else if (e.target.value == '/postupload') {
      setPostFill(false);
      navigate('/postupload');
    } else if (e.target.value == '/myprofile') {
      setProfileFill(false);
      navigate('/myprofile', {
        state: { user },
      });
    }
  }

  return (
    <NavbarWrapper>
      <ul>
        <li>
          <button value={'/homefeed'} type="button" onClick={handleClick}>
            {homeV ? <HomeIcon /> : <HomeIconF />}
          </button>
        </li>

        <li>
          <button value={'/chat'} type="button" onClick={handleClick}>
            {chatV ? <ChatIcon /> : <ChatIconF />}
          </button>
        </li>

        <li>
          <button value={'/postupload'} type="button" onClick={handleClick}>
            {postV ? <PostIcon /> : <PostIconF />}
          </button>
        </li>

        <li>
          <button value={'/myprofile'} type="button" onClick={handleClick}>
            {profileV ? <ProfileIcon /> : <ProfileIconF />}
          </button>
        </li>
      </ul>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.nav`
  border-top: 1px solid var(--basic-border-color);
  color: var(--basic-grey);
  position: fixed;
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

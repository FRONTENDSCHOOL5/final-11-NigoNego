import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarWrapper } from './NavbarStyle';
import { ReactComponent as HomeIcon } from '../../../assets/icons/icon-home-fill.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/icon-message-circle.svg';
import { ReactComponent as PostIcon } from '../../../assets/icons/icon-edit.svg';
import { ReactComponent as ProfileIcon } from '../../../assets/icons/icon-user.svg';

export default function Navbar() {
  const navigate = useNavigate();
  const [homeFill, setHomeFill] = useState('none');
  const [chatFill, setChatFill] = useState('none');
  const [postFill, setPostFill] = useState('none');
  const [profileFill, setProfileFill] = useState('none');
  // setFillColor('#767676');

  const user = 'nigonego';

  function handleClick(e) {
    if (e.target.value === '/homefeed') {
      setHomeFill('#767676');
      navigate('/homefeed');
    } else if (e.target.value === '/chat') {
      setChatFill('#767676');
      navigate('/chat');
    } else if (e.target.value === '/postupload') {
      setPostFill('#767676');
      navigate('/postupload');
    } else if (e.target.value === '/myprofile') {
      setProfileFill('#767676');
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
            <HomeIcon
              fill={homeFill}
              onClick={handleClick}
              stroke={homeFill !== 'none' ? '#fff' : '#767676'}
            />
            <p>홈</p>
          </button>
        </li>

        <li>
          <button value={'/chat'} type="button" onClick={handleClick}>
            <ChatIcon fill={chatFill} onClick={handleClick} />
            <p>채팅</p>
          </button>
        </li>

        <li>
          <button value={'/postupload'} type="button" onClick={handleClick}>
            <PostIcon fill={postFill} onClick={handleClick} />
            <p>게시물 작성</p>
          </button>
        </li>

        <li>
          <button value={'/myprofile'} type="button" onClick={handleClick}>
            <ProfileIcon fill={profileFill} onClick={handleClick} />
            <p>프로필</p>
          </button>
        </li>
      </ul>
    </NavbarWrapper>
  );
}

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import atomYourData from '../../atom/atomYourData';

const ProfileUserWrapper = styled.div`
  /* box-shadow: inset 0 0 10px blue; */
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
  align-items: center;

  a {
    margin-bottom: 100px;
  }

  img {
    border-radius: 50%;
    width: 110px;
    height: 110px;
  }
`;
const FollowNumberWrapper = styled.div`
  /* box-shadow: inset 0 0 10px purple; */
  padding: 20px 12px;
`;

export default function ProfileUser({ myProfileData }) {
  const pathName = window.location.pathname;
  const yourDatAtom = useRecoilValue(atomYourData);
  const yourData =
    pathName === '/myprofile'
      ? myProfileData.data.user
      : yourDatAtom.data.profile;
  return (
    <ProfileUserWrapper>
      <Link
        to={'/myfollowers'}
        state={{ value: 'follower', yourData: yourData }}
      >
        <FollowNumberWrapper>
          <h3>{yourData.followerCount}</h3>
          <small>followers</small>
        </FollowNumberWrapper>
      </Link>
      <div>
        <img src={yourData.image} alt="프로필사진" />
        <h2>{yourData.username}</h2>
        <small>{yourData.accountname}</small>
        <p>{yourData.intro}</p>
      </div>
      <Link
        to={`/myfollowers`}
        state={{ value: 'following', yourData: yourData }}
      >
        <FollowNumberWrapper>
          <h3>{yourData.followingCount}</h3>
          <small>followings</small>
        </FollowNumberWrapper>
      </Link>
    </ProfileUserWrapper>
  );
}

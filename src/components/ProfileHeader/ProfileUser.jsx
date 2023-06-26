import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  return (
    <ProfileUserWrapper>
      <Link
        to={'/myfollowers'}
        state={{ value: 'follower', myProfileData: myProfileData }}
      >
        <FollowNumberWrapper>
          <h3>{myProfileData.followerCount}</h3>
          <small>followers</small>
        </FollowNumberWrapper>
      </Link>
      <div>
        <img src={myProfileData.image} alt="프로필사진" />
        <h2>{myProfileData.username}</h2>
        <small>{myProfileData.accountname}</small>
        <p>{myProfileData.intro}</p>
      </div>
      <Link
        to={`/myfollowers`}
        state={{ value: 'following', myProfileData: myProfileData }}
      >
        <FollowNumberWrapper>
          <h3>{myProfileData.followingCount}</h3>
          <small>followings</small>
        </FollowNumberWrapper>
      </Link>
    </ProfileUserWrapper>
  );
}

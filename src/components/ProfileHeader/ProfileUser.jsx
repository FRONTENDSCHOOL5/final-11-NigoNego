import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import atomYourData from '../../atom/atomYourData';
import atomId from '../../atom/atomId';
import accountNameAtom from '../../atom/accountName';

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

export default function ProfileUser({ userProfile }) {
  const [click, setClick] = useState();
  const accountAtom = useRecoilValue(accountNameAtom);
  console.log(userProfile);
  console.log(accountAtom);
  const myData = userProfile.hasOwnProperty('author') ? userProfile : null;

  return (
    <ProfileUserWrapper>
      <FollowNumberWrapper>
        <h3>
          {myData
            ? userProfile.author.followerCount
            : userProfile.followerCount}
        </h3>
        <small>followers</small>
      </FollowNumberWrapper>
      <div>
        <img src={userProfile.image} alt="프로필사진" />
        <h2>{myData ? userProfile.author.username : userProfile.username}</h2>
        <small>{userProfile.accountname}</small>
        <p>{myData ? userProfile.author.intro : userProfile.intro}</p>
      </div>
      <FollowNumberWrapper>
        <h3>
          {myData
            ? userProfile.author.followingCount
            : userProfile.followingCount}
        </h3>
        <small>followings</small>
      </FollowNumberWrapper>

      {/* <Link
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
      </Link> */}
    </ProfileUserWrapper>
  );
}

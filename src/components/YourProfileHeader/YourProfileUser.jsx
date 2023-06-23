import React from 'react';
import styled from 'styled-components';

const ProfileUserWrapper = styled.div`
  box-shadow: inset 0 0 10px blue;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px 0;

  img {
    border-radius: 50%;
    width: 110px;
  }
`;
const FollowNumberWrapper = styled.div`
  box-shadow: inset 0 0 10px purple;
  padding: 20px 12px;
`;

// export default function ProfileUser({ myProfileData }) {
//   console.log(myProfileData);
//   return (
//     <ProfileUserWrapper>
//       <FollowNumberWrapper>
//         <h3>{'기본' ?? myProfileData.followerCount}</h3>
//         <small>followers</small>
//       </FollowNumberWrapper>
//       <div>
//         <img src={'기본' ?? myProfileData.image} alt="프로필사진" />
//         <h2>{'기본' ?? myProfileData.username}</h2>
//         <small>{'기본' ?? myProfileData.accountname}</small>
//         <p>{'기본' ?? myProfileData.intro}</p>
//       </div>
//       <FollowNumberWrapper>
//         <h3>{'기본' ?? myProfileData.followingCount}</h3>
//         <small>followings</small>
//       </FollowNumberWrapper>
//     </ProfileUserWrapper>
//   );
// }

export default function ProfileUser({ myProfileData }) {
  console.log(myProfileData);
  console.log();
  return (
    <ProfileUserWrapper>
      <FollowNumberWrapper>
        <h3>{myProfileData.followerCount}</h3>
        <small>followers</small>
      </FollowNumberWrapper>
      <div>
        <img src={myProfileData.image} alt="프로필사진" />
        <h2>{myProfileData.username}</h2>
        <small>{myProfileData.accountname}</small>
        <p>{myProfileData.intro}</p>
      </div>
      <FollowNumberWrapper>
        <h3>{myProfileData.followingCount}</h3>
        <small>followings</small>
      </FollowNumberWrapper>
    </ProfileUserWrapper>
  );
}

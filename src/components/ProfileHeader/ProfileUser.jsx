import React from 'react';
import styled from 'styled-components';
import 프사 from '../../assets/images/프사.png';
import FollowNumber from './FollowNumber';

const ProfileUserWrapper = styled.div`
  /* box-shadow: inset 0 0 10px blue; */
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px 0;

  img {
    border-radius: 50%;
    width: 110px;
  }
`;

export default function ProfileUser() {
  return (
    <ProfileUserWrapper>
      <FollowNumber />
      <div>
        <img src={프사} alt="프로필사진" />
        <h2>애월읍 위니브 감귤농장</h2>
        <small>@weniv-Mandarin</small>
        <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤농장</p>
      </div>
      <FollowNumber />
    </ProfileUserWrapper>
  );
}

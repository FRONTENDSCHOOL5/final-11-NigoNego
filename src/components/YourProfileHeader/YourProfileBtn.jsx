import React from 'react';
import styled from 'styled-components';
import { MBtn } from '../common/button/Button';
import { ReactComponent as BtnShare } from '../../assets/image/BtnShare.svg';
import { ReactComponent as BtnComment } from '../../assets/image/BtnComment.svg';

const FollowBtnWrapper = styled.div`
  /* box-shadow: inset 0 0 10px red; */
  display: flex;
  justify-content: center;
  gap: 8px;

  .shareBtn {
    border: 1px solid #dbdbdb;
    border-radius: 30px;
    padding: 4px;
  }
`;
export default function YourProfileBtn() {
  return (
    <FollowBtnWrapper>
      <button className="shareBtn" type="button">
        <BtnComment width="24px" />
      </button>
      <MBtn content="팔로우" />
      <button className="shareBtn" type="button">
        <BtnShare width="24px" />
      </button>
    </FollowBtnWrapper>
  );
}

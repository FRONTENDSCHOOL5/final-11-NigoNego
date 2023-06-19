import React from 'react';
import styled from 'styled-components';
import messageIcon from '../../assets/icons/message-icon.png';
import { MBtn } from '../common/button/Button';

const FollowBtnWrapper = styled.div`
  /* box-shadow: inset 0 0 10px red; */
  display: flex;
  justify-content: center;
  gap: 8px;

  .shareBtn {
    border: 2px solid #dbdbdb;
    border-radius: 50%;
    padding: 4px;
  }
`;
export default function FllowBtn() {
  return (
    <FollowBtnWrapper>
      <button className="shareBtn" type="button">
        <img src={messageIcon} alt="메시지아이콘" />
      </button>
      <MBtn />
      <button className="shareBtn" type="button">
        <img src={messageIcon} alt="공유아이콘" />
      </button>
    </FollowBtnWrapper>
  );
}

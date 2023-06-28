import styled from 'styled-components';
import { MBtn, MActivBtn } from '../common/button/Button';
import { ReactComponent as BtnShare } from '../../assets/image/BtnShare.svg';
import { ReactComponent as BtnComment } from '../../assets/image/BtnComment.svg';
import { useState } from 'react';

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

export default function YourProfileBtn({ myProfileData, accountname }) {
  const [initial, setInitial] = useState(Boolean(myProfileData.isFollow));
  const [isFollow, setIsFollow] = useState(initial);

  function handleFollow(e) {
    e.preventDefault();
    if (initial) {
      setIsFollow(Boolean(false));
    } else {
      setIsFollow(Boolean(true));
      setInitial(Boolean(true));
    }
  }
  return (
    <FollowBtnWrapper>
      {console.log(isFollow)}
      <button className="shareBtn" type="button">
        <BtnComment width="24px" />
      </button>
      {isFollow ? (
        <MBtn content="팔로우" onClick={e => handleFollow(e)} />
      ) : (
        <MActivBtn onClick={e => handleFollow(e)} />
      )}
      <button className="shareBtn" type="button">
        <BtnShare width="24px" />
      </button>
    </FollowBtnWrapper>
  );
}

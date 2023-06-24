import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetFollowerData } from '../../../api/getData/getData';
import { MImage } from '../UserImage/UserImage';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const StyledUser = styled.div`
  height: 5rem;
  width: 100%;
  max-width: 50rem;
  display: flex;
  strong {
    color: var(--basic-orange);
  }
`;

export const ProfileImgWrapper = styled.div`
  width: 5rem;
  flex-shrink: 0;
`;

export const UserSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding-left: 1.2rem;
`;

export const UserName = styled.div`
  width: 100%;
  flex-basis: 50%;
  line-height: 2.5rem;
  font-size: 14px;
`;

export const UserId = styled.div`
  flex-basis: 50%;
  line-height: 2.5rem;
  font-size: 12px;
  color: var(--basic-grey);
`;

const BtnWrapper = styled.button`
  width: 100%;
  text-align: left;

  * {
    pointer-events: none;
  }
`;

// GetFollowerData

export default function UserSearch({ data }) {
  const navigate = useNavigate();
  const [accountname, setAccountName] = useState('');

  useEffect(() => {
    // console.log(data.author.accountname);
    if (accountname) {
      navigate('/yourprofile', {
        state: {
          accountname: accountname,
        },
      });
    }
  }, [accountname]);

  function moveToYourProfile() {
    setAccountName(data.author.accountname);
    console.log(data.author.accountname);
  }

  return (
    // 클릭시 유저 프로필로 이동하는 기능 추가
    <BtnWrapper onClick={moveToYourProfile}>
      <StyledUser>
        <ProfileImgWrapper>
          <MImage backgroundUrl={data.author.image} />
          {console.log(data.author.image)}
        </ProfileImgWrapper>
        <UserSection>
          <UserName>
            {/* 애월읍을 검색했을때 검색한 부분만 색이 변해야함 */}
            <strong>{data.author.username}</strong>
          </UserName>
          <UserId>{data.author.accountname}</UserId>
        </UserSection>
      </StyledUser>
    </BtnWrapper>
  );
}

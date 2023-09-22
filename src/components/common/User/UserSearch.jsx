import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MImage } from '../UserImage/UserImage';
import { useNavigate } from 'react-router-dom';
import UseFetchToken from '../../../Hooks/UseFetchToken';

export default function UserSearch({ data }) {
  const navigate = useNavigate();
  const { getUserFeed } = UseFetchToken();
  const [click, setClick] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (click) {
      navigate('/yourprofile', {
        state: { data },
      });
    }
  }, [click]);

  function moveToYourProfile(e) {
    getUserFeed(data.author.accountname).then(res => {
      setClick(true);
      setUserData(res);
    });
  }

  return (
    // 클릭시 유저 프로필로 이동하는 기능 추가
    <BtnWrapper onClick={moveToYourProfile}>
      <StyledUser>
        <ProfileImgWrapper>
          <MImage backgroundUrl={data.author.image} />
        </ProfileImgWrapper>
        <UserSection>
          <UserName>
            <strong>{data.author.username}</strong>
            <UserId>{data.author.accountname}</UserId>
          </UserName>
        </UserSection>
      </StyledUser>
    </BtnWrapper>
  );
}

export const StyledUser = styled.div`
  height: 5rem;
  width: 100%;
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
  padding-left: 1.2rem;
  margin-right: auto;
`;

export const UserName = styled.div`
  width: 100%;
  flex-basis: 50%;
  line-height: 2.5rem;
  font-size: 14px;
`;

export const UserId = styled.div`
  line-height: 1.5;
  font-size: 12px;
  color: var(--basic-grey);
  margin-right: 5px;
`;

const BtnWrapper = styled.button`
  width: 100%;
  text-align: left;
  border: none;

  * {
    pointer-events: none;
  }
`;

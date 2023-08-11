import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { MImage } from '../UserImage/UserImage';
import { UserSection, UserName, UserId } from './UserSearch';
import { ButtonShort, SBtn } from '../button/Button';
import { useLocation } from 'react-router-dom';
import UseFetchToken from '../../../Hooks/UseFetchToken';

const StyledFollower = styled.section`
  width: 100%;
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;

export default function UserFollow() {
  const { getFollowData } = UseFetchToken();
  const location = useLocation();
  const userGetData = location.state.value;
  const accountname = location.state.myProfileData.accountname;

  const [userData, setUserData] = useState([]);
  const postListRef = useRef(null);

  useEffect(() => {
    fetchData(); // 초기 데이터 로드
  }, []);

  const fetchData = () => {
    getFollowData(accountname)
      .then(response => {
        console.log(response);
        setUserData(prevData => [...prevData, ...response.data]);
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <UserFollowWrapper ref={postListRef}>
        {userData.length > 0 &&
          userData.map(data => {
            return (
              <StyledFollower>
                <MImage backgroundUrl={data.image} />
                <UserSection>
                  <UserName>
                    <strong>{data.accountname}</strong>
                  </UserName>
                  <UserId>{data.intro}</UserId>
                </UserSection>
                <ButtonShort>팔로우</ButtonShort>
              </StyledFollower>
            );
          })}
      </UserFollowWrapper>
    </>
  );
}

const UserFollowWrapper = styled.div`
  height: 83vh;
  overflow: scroll;
`;

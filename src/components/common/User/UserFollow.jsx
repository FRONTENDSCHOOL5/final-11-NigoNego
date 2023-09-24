import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { MImage } from '../UserImage/UserImage';
import { UserSection, UserName, UserId } from './UserSearch';
import { ButtonShort, SBtn } from '../button/Button';
import { useLocation } from 'react-router-dom';
import UseFetchToken from '../../../Hooks/UseFetchToken';
import { useRecoilValue } from 'recoil';
import atomYourAccount from '../../../atom/atomYourAccount';
import accountNameAtom from '../../../atom/accountName';

const StyledFollower = styled.section`
  width: 100%;
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;

export default function UserFollow() {
  const { getFollowData } = UseFetchToken();
  const myAccount = useRecoilValue(accountNameAtom);
  const yourAccount = useRecoilValue(atomYourAccount);

  const location = useLocation();
  const follower = location.state.value;
  const userName = location.state.yourData.accountname;
  const [userData, setUserData] = useState([]);
  const postListRef = useRef(null);
  const accountName = userName === myAccount ? myAccount : yourAccount;
  useEffect(() => {
    fetchData(); // 초기 데이터 로드
  }, []);

  const fetchData = async () => {
    await getFollowData(accountName, follower)
      .then(response => {
        setUserData(response.data);
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

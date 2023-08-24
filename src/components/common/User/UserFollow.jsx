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
import atomMyData from '../../../atom/atomMyData';
import atomYourData from '../../../atom/atomYourData';

const StyledFollower = styled.section`
  width: 100%;
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;

export default function UserFollow({ followUserData }) {
  console.log(followUserData.state.yourData.accountname);
  const { getFollowData } = UseFetchToken();
  const yourData = useRecoilValue(atomYourData);
  const myData = useRecoilValue(atomMyData);
  const follower = followUserData.state.value;
  const location = useLocation();
  const userName = location.state.yourData.accountname;
  const myAccount = myData.data.user.accountname;
  const yourAccount = yourData.data.profile.accountname;
  const [accountName, setAccountName] = useState();
  console.log(yourAccount);
  console.log(userName);
  console.log(myAccount);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    console.log(followUserData.state.yourData.accountname);
    console.log(myAccount);
    if (followUserData.state.yourData.accountname === myAccount) {
      setAccountName(myAccount);
      console.log(accountName);
    } else {
      setAccountName(yourAccount);
    }
  }, [followUserData]);

  const postListRef = useRef(null);
  useEffect(() => {
    fetchData(); // 초기 데이터 로드
  }, [accountName]);

  const fetchData = async () => {
    console.log(userName);

    await getFollowData(accountName, follower)
      .then(response => {
        console.log(response);
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

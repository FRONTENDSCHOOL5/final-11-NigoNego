import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { MImage } from '../UserImage/UserImage';
import { UserSection, UserName, UserId } from './UserSearch';
import { SBtn } from '../button/Button';
import { GetFollowerData } from '../../../api/getData/getData';
import { useLocation } from 'react-router-dom';

const StyledFollower = styled.section`
  width: 100%;
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;

export default function UserFollow() {
  const location = useLocation();
  const userGetData = location.state.value;
  const accountname = location.state.myProfileData.accountname;

  const [userData, setUserData] = useState([]);
  const postListRef = useRef(null);

  useEffect(() => {
    fetchData(0); // 초기 데이터 로드
  }, []);

  const fetchData = (skip = 5) => {
    GetFollowerData(accountname, userGetData, skip)
      .then(response => {
        console.log(response);
        setUserData(prevData => [...prevData, ...response.data]);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = postListRef.current;
      if (container) {
        const { scrollTop, clientHeight, scrollHeight } = container;
        if (scrollTop + clientHeight >= scrollHeight) {
          const skip = userData.length;
          fetchData(skip);
        }
      }
    };
    const postList = postListRef.current;
    if (postList) {
      postList.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (postList) {
        postList.removeEventListener('scroll', handleScroll);
      }
    };
  }, [userData]);

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
                <SBtn />
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

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import HomePost from '../../components/HomePost/HomePost';
import Navbar from '../../components/common/Navbar/Navbar';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import UseFetchToken from '../../Hooks/UseFetchToken';
import atomMyData from '../../atom/atomMyData';
import { useRecoilState } from 'recoil';

function HomeFeed() {
  const { GetHomeFeedData, getProfileData } = UseFetchToken();
  const [myData, setMyData] = useRecoilState(atomMyData);
  const [userData, setUserData] = useState([]);
  console.log(myData);

  const postListRef = useRef(null);

  useEffect(() => {
    fetchData(0); // 초기 데이터 로드
  }, []);

  const fetchData = async skip => {
    GetHomeFeedData(5, skip)
      .then(response => {
        setUserData(prevData => [...prevData, ...response.data.posts]);
      })
      .catch(error => console.error(error));

    getProfileData().then(res => setMyData(res));
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
      <HeaderBasicNav />
      <MyHomePostwarpper ref={postListRef} className="myHomePost">
        {userData.length > 0 &&
          userData.map(data => {
            return (
              <>
                <HomePost data={data} />
              </>
            );
          })}
      </MyHomePostwarpper>
      <Navbar homeV={false} chatV={true} postV={true} profileV={true} />
    </>
  );
}

const HomePostImg = styled.img`
  width: 100%;
  aspect-ratio: 5 / 3;
  border-radius: 10px;
  object-fit: cover;
`;

const MyHomePostwarpper = styled.div`
  height: 86vh;
  padding-bottom: 20px;
  overflow: scroll;
  /* box-shadow: inset 0px 0px 3px 5px rgb(0, 38, 255); */

  .icon-wrapper {
    margin: 10px 0;
  }

  .container {
    margin: 0 20px 0 70px;
    max-width: 700px;

    p {
      margin: 0 0 10px 0;
    }
  }
  button {
    border: none;
  }

  .post-item-wrapper {
    padding: 10px 0;

    button {
      padding: 0 10px 0 0;
    }
  }
`;

export default HomeFeed;

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import HomePost from '../../components/HomePost/HomePost';
import Navbar from '../../components/common/Navbar/Navbar';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import UseFetchToken from '../../Hooks/UseFetchToken';
import Layout from '../../styles/Layout';

function HomeFeed() {
  const [userData, setUserData] = useState([]);
  const postListRef = useRef(null);
  const { getFeedData } = UseFetchToken();

  useEffect(() => {
    fetchData(0); // 초기 데이터 로드
  }, []);

  const fetchData = async skip => {
    const res = await getFeedData(5, skip);
    if (res) {
      setUserData(prev => [...prev, ...res]);
    }
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
    <Layout>
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
    </Layout>
  );
}

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

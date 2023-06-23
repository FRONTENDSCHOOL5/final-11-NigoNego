import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import msg from '../../assets/icons/message-icon.svg';
import like from '../../assets/icons/like-icon.svg';
import UserSearch from '../../components/common/User/UserSearch';

import { useState, useEffect } from 'react';

function HomeFeed() {
  const [followersData, setFollowersData] = useState('');

  const getFollowers = () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';

    try {
      axios({
        method: 'GET',
        url: `https://api.mandarin.weniv.co.kr/post/feed`,

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then(response => {
        setFollowersData(response.data.posts);
      });
    } catch (err) {
      console.log('에러');
    }
  };

  useEffect(() => {
    getFollowers();
  }, []);
  return (
    <>
      <HeaderBasicNav />
      {followersData.length > 0 &&
        followersData.map(data => {
          return (
            <>
              <UserSearch data={data} />
              <p>{data.content}</p>
              <HomePostImg src={data.image} />
              <div>
                <button type="button">
                  <img src={msg} alt="" />
                  <span>{data.heartCount}</span>
                </button>
                <button type="button">
                  <img src={like} alt="" />
                  {/* <span>{data.author.commentCount}</span> */}
                </button>
              </div>
              {/* <time>{data.updatedAt}</time> */}
            </>
          );
        })}
      {/* <div>{followresData}</div> */}
      <Navbar />
    </>
  );
}

const HomePostImg = styled.img`
  vertical-align: middle;
  padding-bottom: 10px;
  width: 500px;
`;

export default HomeFeed;

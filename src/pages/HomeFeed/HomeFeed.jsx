import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import Navbar from '../../components/common/Navbar/Navbar';
import msg from '../../assets/icons/message-icon.svg';
import like from '../../assets/icons/like-icon.svg';
import UserSearch from '../../components/common/User/UserSearch';
import HomePost from '../../components/HomePost/MyHomePost';
import { authAtom, accountNameAtom } from '../../atom/atoms';
import { useRecoilValue } from 'recoil';

function HomeFeed() {
  const [followersData, setFollowersData] = useState('');

  const auth = useRecoilValue(authAtom);
  const accountname = useRecoilValue(accountNameAtom);

  console.log(auth, accountname);
  const getFollowers = () => {
    try {
      axios({
        method: 'GET',
        url: `https://api.mandarin.weniv.co.kr/post/feed`,

        headers: {
          Authorization: `Bearer ${auth}`,
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
            <HomePost data={data} />
            // <>
            //   <UserSearch data={data} />
            //   <p>{data.content}</p>
            //   <HomePostImg src={data.image} />
            //   <div>
            //     <button type="button">
            //       <img src={msg} alt="" />
            //       <span>{data.heartCount}</span>
            //     </button>
            //     <button type="button">
            //       <img src={like} alt="" />
            //       <span>{data.author.commentCount}</span>
            //     </button>
            //   </div>
            //   <time>{data.updatedAt}</time>
            // </>
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

/**
 * 1. 유저를 클릭하면
 * 2. 해당 유저의
 * 3. your profile 페이지로 이동
 * onClick={(e) => {함수1(e)}}
 * 함수1의 역할1. yourprofile로 이동
 * 함수1의 역할2. 해당 데이터를 받아와서
 * useNavigator('/yourprofile')
 * your profile 페이지에서 특정 유저가 데이터가 선택되는 방법은?
 */

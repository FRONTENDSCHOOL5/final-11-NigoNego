import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
// import { useNavigate } from 'react-router-dom';
import { authAtom, accountNameAtom } from '../../atom/atoms';
import { GetHomeFeedData } from '../../api/getData/getData';
import HomePost from '../../components/HomePost/HomePost';
import Navbar from '../../components/common/Navbar/Navbar';
import { HeaderBasicNav } from '../../components/common/Header/Header';

function HomeFeed() {
  // const [postId, setPostId] = useState(null);
  // const navigate = useNavigate();
  const auth = useRecoilValue(authAtom);

  const accountname = useRecoilValue(accountNameAtom);

  console.log(auth, accountname);

  const [feedPost, setFeedPost] = useState([]);

  useEffect(() => {
    GetHomeFeedData().then(response => {
      setFeedPost(response.data.posts);
      console.log(feedPost);
    });
  }, []);

  return (
    <>
      <HeaderBasicNav />
      {feedPost.length > 0 &&
        feedPost.map(data => {
          return <HomePost data={data} />;
        })}
      {/* <div>{followresData}</div> */}
      <Navbar />
    </>
  );
}

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

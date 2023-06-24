import React, { useState, useEffect } from 'react';
// import Navbar from '../../../components/common/Navbar/Navbar';
import styled from 'styled-components';
import axios from 'axios';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import HomePost from '../../../components/HomePost/MyHomePost';
import CommentInput from '../../../components/common/Comment/CommentInput/Comment';
import CommentPost from '../../../components/common/Comment/CommentPost/CommentPost';
import { useLocation } from 'react-router-dom';
import { authAtom } from '../../../atom/atoms';
import { useRecoilValue } from 'recoil';

function PostMain() {
  const auth = useRecoilValue(authAtom);
  const location = useLocation();
  const [postData, setPostData] = useState(null);
  const url = 'https://api.mandarin.weniv.co.kr';
  const postId = location.state.id;
  const getData = async () => {
    try {
      const res = await axios.get(`${url}/post/${postId}`, {
        header: {
          Authorization: `Bearer ${auth}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      setPostData(res);
    } catch (error) {
      console.log('post 데이터 전송 실패');
      console.log(error);
    }
  };

  useEffect(() => {
    // getMyAccountName();
    getData();
    console.log(postData);
  }, []);

  // useEffect(() => {
  //   getMyProfilePic();
  //   if (postData) {
  //     getCommentList();
  //   }
  // }, [token, postData]);

  function PostMain() {
    return (
      <PostPageWrapper>
        <HeaderBasicNav />
        <ContentSection>
          {postData && <HomePost data={postData} />}
        </ContentSection>
        <hr />
        <CommentWrapper>
          <CommentPost />
          <CommentPost />
        </CommentWrapper>
        {/* <CommentInput userId={postData && postData.author} /> */}
        {console.log(postData)}
      </PostPageWrapper>
    );
  }

  const PostPageWrapper = styled.div`
    height: 80vh;
  `;

  const CommentWrapper = styled.section`
    margin: 20px 16px 16px;
    min-height: 300px;
  `;

  const ContentSection = styled.section`
    padding: 20px 12px 12px;
    & + hr {
      margin: 0;
      border: solid 0.5px #dbdbdb;
    }
  `;
}
export default PostMain;

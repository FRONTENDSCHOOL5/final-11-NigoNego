import React, { useState, useEffect } from 'react';
// import Navbar from '../../../components/common/Navbar/Navbar';
import styled from 'styled-components';
import axios from 'axios';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import HomePost from '../../../components/HomePost/HomePost';
import CommentInput from '../../../components/common/Comment/CommentInput/Comment';
import CommentPost from '../../../components/common/Comment/CommentPost/CommentPost';

function PostMain({ img }) {
  function PostPage() {
    const [postData, setPostData] = useState(null);
    const url = 'https://api.mandarin.weniv.co.kr';

    const getData = async () => {
      try {
        const res = await axios.get(`${url}/post/nigonego/userpost`, {
          header: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjY4MjY0OCwiaWF0IjoxNjg3NDk4NjQ4fQ.Lbc2l13Wki7ku44eLRg7QigVgH4RQvNZ8_djTVE0fFw`,
            'Content-type': 'application/json',
          },
        });
        setPostData(res.data.post);
        console.log(postData);
      } catch (error) {
        console.log('post 데이터 전송 실패');
        console.log(error);
      }
    };

    useEffect(() => {
      // getMyAccountName();
      getData();
    }, []);

    // useEffect(() => {
    //   getMyProfilePic();
    //   if (postData) {
    //     getCommentList();
    //   }
    // }, [token, postData]);

    return (
      <PostPageWrapper>
        <HeaderBasicNav />
        <ContentSection>
          <HomePost />
        </ContentSection>
        <hr />
        <CommentWrapper>
          <CommentPost />
          <CommentPost />
        </CommentWrapper>
        <CommentInput userId={postData && postData.id} />
      </PostPageWrapper>
    );
  }
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

export default PostMain;

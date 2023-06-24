import React from 'react';

// import Navbar from '../../../components/common/Navbar/Navbar';
import styled from 'styled-components';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import HomePost from '../../../components/HomePost/MyHomePost';
import CommentInput from '../../../components/common/Comment/CommentInput/Comment';
import CommentPost from '../../../components/common/Comment/CommentPost/CommentPost';

function PostMain() {
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
      <CommentInput />
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

export default PostMain;

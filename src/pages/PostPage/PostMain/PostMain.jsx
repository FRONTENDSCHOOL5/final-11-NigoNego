import React, { useState, useEffect, useCallback } from 'react';
// import Navbar from '../../../components/common/Navbar/Navbar';
import styled from 'styled-components';
import axios from 'axios';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import HomePost from '../../../components/HomePost/HomePost';
import CommentInput from '../../../components/common/Comment/CommentInput/Comment';
import CommentPost from '../../../components/common/Comment/CommentPost/CommentPost';
import { useLocation } from 'react-router-dom';
import { authAtom } from '../../../atom/atoms';
import { useRecoilValue } from 'recoil';
import { GetCommentData } from '../../../api/getData/getData';

function PostMain() {
  const auth = useRecoilValue(authAtom);
  const location = useLocation();
  const [postData, setPostData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [recentCommentData, setRecentCommentData] = useState('');
  const url = 'https://api.mandarin.weniv.co.kr';
  const postId = location.state.id;

  //post 데이터 요청
  const getData = useCallback(async () => {
    try {
      const res = await axios.get(`${url}/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      setPostData(res.data.post);
    } catch (error) {
      console.log('post 데이터 전송 실패');
      console.log(error);
    }
  });

  const getComment = useCallback(async () => {
    GetCommentData(postId).then(response => {
      setCommentData(response.data.comments);
      if (commentData.length > 0) {
        if (recentCommentData !== '') {
          setCommentData(commentData => [
            recentCommentData,
            ...commentData.reverse(),
          ]);
          // setCommentData(commentData => commentData.reverse());
          console.log(commentData);
        }
      }
    });
  }, []);

  useEffect(() => {
    // getMyAccountName();
    getData();
  }, [auth, postId]);

  useEffect(() => {
    getComment();
  }, []);
  //커멘트 시간

  return (
    <>
      {/* 여기서 문제였음 postData, postData.id값이 계속 null 이 나왔는데 그이유는 getData가 비동기 함수 인데 
        setPostData()가 실행되기도 전에 HomePost 컴포넌트가 렌더링 되니까 여기서 조건을 추가해주는 방법사용 
        보통 이부분에서 로딩 컴포넌트를 만들어서 삼항연산자안에 postdata가 null일때 로딩컴포넌트를 보여주는 방식으로 함
         */}
      {console.log(postId)}
      <HeaderBasicNav />
      <PostPageWrapper>
        <ContentSection>
          {postData !== null && <HomePost data={postData} />}
          <CommentWrapper className="111">
            {commentData.length > 0 &&
              commentData.map(comment => {
                return <CommentPost comment={comment} />;
              })}
          </CommentWrapper>
        </ContentSection>
        {postId !== null && (
          <CommentInput
            userId={postId}
            setRecentCommentData={setRecentCommentData}
            getComment={getComment}
          />
        )}
      </PostPageWrapper>
    </>
  );
}

const PostPageWrapper = styled.div`
  height: 80vh;
`;

const CommentWrapper = styled.section`
  margin: 20px 16px 16px;
  /* min-height: 300px; */
`;

const ContentSection = styled.section`
  height: 84vh;
  overflow: scroll;
`;

export default PostMain;

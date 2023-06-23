import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import userDefaultImage from '../../../../assets/images/basic-profile-img.png';

const CommentWrapper = styled.div`
  width: 100%;
  /* 댓글 컴포넌트 하단 고정할지 안할지 */
  /* position: fixed;
  bottom: 0;
  border-top: solid 0.5px #dbdbdb;
  background-color: white; */
  form,
  input,
  button {
    padding: 8px;
  }
  form {
    width: 100%;
    align-items: center;

    display: flex;
  }
  img {
    width: 36px;
    margin-right: 12px;
  }
  input {
    width: 100%;
    border: 0;
  }
  button {
    flex-basis: 60px;
    color: ${props => (props.disableBtn === '' ? '#c4c4c4' : '#FFA200')};
    border: 0;
  }
`;

export default function CommentInput({ userId }) {
  const [comment, setComment] = useState('');
  const commentChange = useCallback(event => {
    setComment(event.target.value);
  }, []);
  const isBtnDisable = comment === '';

  const onhandlesubmit = useCallback(async event => {
    event.preventDefault();

    try {
      const url = 'https://api.mandarin.weniv.co.kr';
      const token = localStorage.getItem('token');
      const res = await axios.post(`${url}/post/${userId}/comments`, {
        comment: {
          content: comment,
        },
        header: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      // 여기서 왜 토큰값이 안정해졌을까 ...
      // id 가 undefined 가 나오는데...
      console.log('댓글 데이터 전송 성공');
      console.log('res', res.data);
      console.log(`${token}`);
    } catch (error) {
      console.log('댓글 데이터 전송 실패');
      console.log(error);
    }
  }, []);
  return (
    <CommentWrapper disableBtn={comment}>
      <form>
        <img src={userDefaultImage} alt="유저기본이미지" />
        <input
          type="text"
          name="comment"
          placeholder="댓글 입력하기"
          onChange={commentChange}
        />
        <button
          type="submit"
          value={comment}
          disabled={isBtnDisable}
          onClick={onhandlesubmit}
        >
          게시
        </button>
      </form>
    </CommentWrapper>
  );
}

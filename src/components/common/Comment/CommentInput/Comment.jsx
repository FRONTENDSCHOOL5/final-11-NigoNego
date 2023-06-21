import React from 'react';
import styled from 'styled-components';
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
    color: #c4c4c4;
    border: 0;
  }
`;

export default function CommentInput() {
  return (
    <CommentWrapper>
      <form>
        <img src={userDefaultImage} alt="유저기본이미지" />
        <input type="text" placeholder="댓글 입력하기" />
        <button type="submit">게시</button>
      </form>
    </CommentWrapper>
  );
}

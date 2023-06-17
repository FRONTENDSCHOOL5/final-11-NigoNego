import React from 'react';
import styled from 'styled-components';
import userDefaultImage from '../../../assets/images/basic-profile-img.png';

const CommentWrapper = styled.div`
  width: 100%;

  form,
  input,
  button {
    padding: 8px;
  }
  form {
    width: 100%;
    align-items: center;

    display: flex;
    justify-content: space-between;
  }
  img {
    width: 36px;
  }
  input {
    width: 80%;
    border: 0;
  }
  button {
    color: #c4c4c4;
    border: 0;
  }
`;

export default function Comment() {
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

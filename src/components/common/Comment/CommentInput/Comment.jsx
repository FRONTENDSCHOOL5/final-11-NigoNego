import React, { useState } from 'react';
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
    color: ${props => (props.disableBtn === '' ? '#c4c4c4' : '#FFA200')};
    border: 0;
  }
`;

export default function CommentInput() {
  const [comment, setComment] = useState('');
  const commentChange = event => {
    setComment(event.target.value);
  };
  const isBtnDisable = comment === '';
  // async function onhandlesubmit(event) {
  //   event.preventDefault();
  //   const token = localStorage.getItem("token");
  //   const id = localStorage.getItem().id;

  //   try {
  //     const url = 'https://api.mandarin.weniv.co.kr';

  //     const res = await axios.post(${url}/post/:{post_id}/comments, {
  //       comment: {
  //         content: iscomment,
  //       },
  //       header: {
  //         "Authorization" : "Bearer ${token}",
  //         "Content-type" : "application/json"
  //       },
  //     });
  //     console.log('res', res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
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
        <button type="submit" disabled={isBtnDisable}>
          게시
        </button>
      </form>
    </CommentWrapper>
  );
}

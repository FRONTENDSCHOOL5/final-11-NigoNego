import React, { useState } from 'react';
import styled from 'styled-components';
import { HeaderUploadNav } from '../../../components/common/Header/Header';
import { SImage } from '../../../components/common/UserImage/UserImage';
import buttonImg from '../../../assets/images/upload-file.svg';

export default function PostUpload() {
  // 토큰 가져오는 거 잊으면 안돼요!! -> 토큰인 로그인할 때 받을 수 있음.
  // 리액트에서 바뀌는 부분, 바뀌어야 하는 부분은 모두 state!
  const token = '받은 토큰';
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  // const image = '';

  const handleImageUpload = e => {
    console.log(e.target.value);

    // 데이터 호출, 비동기에 대해서 조금은 알아보는 것이 좋을 것 같아요!

    // 이미지를 등록하면 이미지 filename을 응답받는 api를 호출할꺼야!
    // 여기다가 api 호출하는 로직을 작성
    // 여기서 받은 응답을 어딘가에 저장하기! setImage(filename) -> 미리보기 구현은 끝!

    // 그 이미지 파일이름을 받으면 그거를 사용해서 미리보기 구현한다.
  };

  const handleSubmit = () => {
    // 게시글 작성 api 호출
    try {
      const res = axios({
        method: 'post',
        url: `https://api.mandarin.weniv.co.kr/post`,
        body: {
          post: {
            content: content,
            image: `https://api.mandarin.weniv.co.kr/${image}`,
          },
        },
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      // 여기서 응답 확인 -> 어떤 응답이 왔는지, 성공 유무
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <HeaderUploadNav onSubmit={handleSubmit} />
      <PostUploadWrapper>
        <ProfileWrapper>
          <SImage />
        </ProfileWrapper>
        <textarea
          className="inputPost"
          placeholder="게시글 입력하기…"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </PostUploadWrapper>
      {/* <UploadButton /> */}
      <UploadButtonStyle>
        <label htmlFor="input" />
        <input id="input" type="file" onChange={handleImageUpload} />
      </UploadButtonStyle>
      {image.length > 0 && <img src={image} alt="" />}
    </>
  );
}

const ProfileWrapper = styled.div`
  /* flex-shrink: 0; */
`;

const PostUploadWrapper = styled.div`
  display: flex;
  margin: 20px 16px 0px;
  .inputPost {
    margin-top: 10px;
    font-size: 14px;
  }
  & > textarea {
    height: 300px;
    border-style: none;
    width: 100%;
    margin-left: 12px;
    &:focus {
      outline: 0;
    }
  }
`;

const UploadButtonStyle = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  label {
    width: 50px;
    height: 50px;
    display: inline-block;
    background-image: url(${buttonImg});
    background-size: cover;
  }

  input {
    display: none;
  }

  input::file-selector-button {
    display: none;
  }
`;

// function UploadButton() {
//   return (
//     <UploadButtonStyle>
//       <label htmlFor="input" />
//       <input id="input" type="file" />
//     </UploadButtonStyle>
//   );
// }

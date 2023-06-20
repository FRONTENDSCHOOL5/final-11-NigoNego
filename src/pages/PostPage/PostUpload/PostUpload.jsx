import React, { useState } from 'react';
import styled from 'styled-components';
import { HeaderUploadNav } from '../../../components/common/Header/Header';
import { SImage } from '../../../components/common/UserImage/UserImage';
import buttonImg from '../../../assets/images/upload-file.svg';
import axios from 'axios';

export default function PostUpload() {
  // 토큰 가져오는 거 잊으면 안돼요!! -> 토큰인 로그인할 때 받을 수 있음.
  // 리액트에서 바뀌는 부분, 바뀌어야 하는 부분은 모두 state!
  // const token = '받은 토큰';
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  // const image = '';

  const handleImageUpload = e => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    // 데이터 호출, 비동기에 대해서 조금은 알아보는 것이 좋을 것 같아요!

    // 이미지를 등록하면 이미지 filename을 응답받는 api를 호출할꺼야!
    axios({
      method: 'post',
      url: 'https://api.mandarin.weniv.co.kr/image/uploadfile',
      data: formData,
    }).then(result => {
      console.log('요청성공');
      setImage(result.data.path);
      // 여기서 받은 응답을 어딘가에 저장하기! setImage(filename) -> 미리보기 구현은 끝!

      // 그 이미지 파일이름을 받으면 그거를 사용해서 미리보기 구현한다.
    });
  };

  // const handleSubmit = () => {
  //   // 게시글 작성 api 호출
  //   try {
  //     const res = axios({
  //       method: 'post',
  //       url: `https://api.mandarin.weniv.co.kr/post`,
  //       body: {
  //         post: {
  //           content: content,
  //           image: `https://api.mandarin.weniv.co.kr/${image}`,
  //         },
  //       },
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-type': 'application/json',
  //       },
  //     });
  //     // 여기서 응답 확인 -> 어떤 응답이 왔는지, 성공 유무
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <HeaderUploadNav />
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
        {image.length > 0 && <img src={image} alt="" />}
      </PostUploadWrapper>
      {/* <UploadButton /> */}
      <UploadButtonStyle>
        <label htmlFor="input" />
        <input id="input" type="file" onChange={e => handleImageUpload(e)} />
      </UploadButtonStyle>
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
  img {
    box-shadow: inset 0 0 10px red;
    width: 100%;
    height: 200px;
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

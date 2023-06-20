import React, { useState } from 'react';
import styled from 'styled-components';
import { HeaderUploadNav } from '../../../components/common/Header/Header';
import { SImage } from '../../../components/common/UserImage/UserImage';
import buttonImg from '../../../assets/images/upload-file.svg';
import axios from 'axios';

export default function PostUpload() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleImageUpload = e => {
    e.preventDefault();

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    axios({
      method: 'POST',
      url: 'https://api.mandarin.weniv.co.kr/image/uploadfile',
      data: formData,
    }).then(result => {
      // console.log('요청성공');
      setImage(`https://api.mandarin.weniv.co.kr/${result.data.filename}`);
      // console.log(image);
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';
    // 게시글 작성 api 호출
    try {
      const response = axios({
        method: 'POST',
        url: `https://api.mandarin.weniv.co.kr/post`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        data: {
          post: {
            content: content,
            image: `https://api.mandarin.weniv.co.kr/${image}`,
          },
        },
      }).then(response => {
        console.log(response);
        // console.log('POST 요청 완료');
        return axios.get('https://api.mandarin.weniv.co.kr/post');
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <input id="input" type="file" onChange={handleImageUpload} />
        </UploadButtonStyle>
      </form>
    </>
  );
}
const ProfileWrapper = styled.div`
  flex-shrink: 0;
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

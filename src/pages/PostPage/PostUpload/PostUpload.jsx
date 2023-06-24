import React, { useState } from 'react';
import styled from 'styled-components';
import { HeaderUploadNav } from '../../../components/common/Header/Header';
import { SImage } from '../../../components/common/UserImage/UserImage';
import buttonImg from '../../../assets/images/upload-file.svg';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { authAtom } from '../../../atom/atoms';
import { useRecoilValue } from 'recoil';

export default function PostUpload() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  // user 데이터 저장
  const [userImage, setUserImage] = useState('');
  const [userContent, setUserContent] = useState('');

  const auth = useRecoilValue(authAtom);

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
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // 게시글 작성 api 호출
    try {
      axios({
        method: 'POST',
        url: `https://api.mandarin.weniv.co.kr/post`,
        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
        data: {
          post: {
            content: content,
            image: `${image}`,
          },
        },
      }).then(response => {
        navigate('/myprofile');
        console.log(response);
      });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(userImage);
  console.log(userContent);

  // 재랜더링 확인
  // console.log(userImage);
  // console.log(userContent);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <HeaderUploadNav content={'업로드'} />
        <PostUploadWrapper>
          <ProfileWrapper>
            <SImage />
          </ProfileWrapper>
          <textarea
            className="inputPost"
            placeholder="게시글 입력하기"
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

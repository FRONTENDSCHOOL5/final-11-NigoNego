import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HeaderUploadNav } from '../../../components/common/Header/Header';
import { SImage } from '../../../components/common/UserImage/UserImage';
import buttonImg from '../../../assets/images/upload-file.svg';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { authAtom } from '../../../atom/atoms';
import { useRecoilValue } from 'recoil';
import BodyGlobal from '../../../styles/BodyGlobal';

export default function PostUpload() {
  const navigate = useNavigate();
  const user = 'nigonego';

  const [isFormValid, setIsFormValid] = useState(false);
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  // user 데이터 저장
  const [userImage, setUserImage] = useState('');
  const [userContent, setUserContent] = useState('');

  const auth = useRecoilValue(authAtom);

  useEffect(() => {
    if (content && image) {
      setIsFormValid(true);
    }
  }, [content, image]);

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
        navigate('/myprofile', {
          state: { user },
        });
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
      <HeaderUploadNav content={'업로드'} />
      <form onSubmit={handleSubmit}>
        <BodyGlobal>
          <PostUploadWrapper>
            <SImage />
            <textarea
              className="inputPost"
              placeholder="게시글 입력하기"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </PostUploadWrapper>
          {image.length > 0 && <UploadImg src={image} alt="" />}
        </BodyGlobal>
      </form>
      <UploadButtonStyle>
        <label htmlFor="input" />
        <input id="input" type="file" onChange={handleImageUpload} />
      </UploadButtonStyle>
    </>
  );
}

const PostUploadWrapper = styled.div`
  /* box-shadow: inset 0 0 10px red; */
  margin-top: 10px;
  display: flex;
  textarea {
    display: block;
    border: 0px;
    width: 80vw;
    min-height: 30vh;
    padding: 12px 6px;
    resize: none;
    margin: auto;
  }
`;

const UploadImg = styled.img`
  margin-top: 10px;
  display: block;
  overflow: hidden;
  width: 75%;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
  margin-left: 53px;
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

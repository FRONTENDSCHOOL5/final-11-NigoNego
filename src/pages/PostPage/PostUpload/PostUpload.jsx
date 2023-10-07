import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import { SImage } from '../../../components/common/UserImage/UserImage';
import buttonImg from '../../../assets/images/upload-file.svg';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import BodyGlobal from '../../../styles/BodyGlobal';
import authAtom from '../../../atom/authToken';
import Layout from '../../../styles/Layout';
import FileUploadInput from '../../../components/common/Input/FileUploadInput';
import useFetchToken from "../../../Hooks/UseFetchToken";
import UserProfileCircle from "../../../components/common/User/UserProfileCircle";
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
  const { postPostUpload, postJoinImage } = useFetchToken();

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

    postJoinImage(formData).then(response => {
      setImage(`https://api.mandarin.weniv.co.kr/${response.data.filename}`);
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    postPostUpload(content, image).then(response => {
      navigate('/myprofile');
    });

  };

  return (
    <Layout>
      <HeaderBasicNav disabled={!isFormValid}>업로드</HeaderBasicNav>
      <form onSubmit={handleSubmit}>
        <BodyGlobal>
          <PostUploadWrapper>
            <UserProfileCircle isWidth="48px"/>
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

      <FileUploadInput
        id="input"
        type="file"
        onChange={handleImageUpload}
        right="20px"
        bottom="20px"
      />
    </Layout>
  );
}

const PostUploadWrapper = styled.div`
  /* box-shadow: inset 0 0 10px red; */
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  
  textarea {
    border: none;
    width: calc(100% - 60px);
    min-height: 140px;
    padding: 10px;
    box-sizing: border-box;
    line-height: 1.2em;
    white-space: pre-wrap;
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

// const UploadButtonStyle = styled.div`
//   position: fixed;
//   bottom: 16px;
//   right: 16px;
//   label {
//     width: 50px;
//     height: 50px;
//     display: inline-block;
//     background-image: url(${buttonImg});
//     background-size: cover;
//   }
//
//   input {
//     display: none;
//   }
//
//   input::file-selector-button {
//     display: none;
//   }
// `;

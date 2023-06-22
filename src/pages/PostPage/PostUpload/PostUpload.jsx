import React from 'react';
import styled from 'styled-components';
import { HeaderUploadNav } from '../../../components/common/Header/Header';
import { SImage } from '../../../components/common/UserImage/UserImage';
import buttonImg from '../../../assets/images/upload-file.svg';

export default function PostUpload() {
  return (
    <>
      <HeaderUploadNav />
      <PostUploadWrapper>
        <ProfileWrapper>
          <SImage />
        </ProfileWrapper>
        <textarea className="inputPost" placeholder="게시글 입력하기..." />
      </PostUploadWrapper>
      <UploadButton />
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

function UploadButton() {
  return (
    <UploadButtonStyle>
      <label htmlFor="input" />
      <input id="input" type="file" />
    </UploadButtonStyle>
  );
}

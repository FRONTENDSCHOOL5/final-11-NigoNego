import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import testImg from '../../assets/images/post-test-img.jpg';
import imgUploadBtn from '../../assets/icons/img-btn.png';
import buttonImg from '../../assets/images/upload-file.svg';

export default function AddProductImg() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  // user 데이터 저장
  const [userImage, setUserImage] = useState('');
  const [userContent, setUserContent] = useState('');

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
      console.log('요청성공');
      console.log(result);
      setImage(`https://api.mandarin.weniv.co.kr/${result.data.filename}`);
      // console.log(image);
    });
  };

  return (
    <AddProductImgWrapp>
      <p>이미지 등록</p>
      <div className="img-wrapper">
        {image.length > 0 && <img src={image} alt="" />}
      </div>

      <UploadButtonStyle>
        <label htmlFor="input" />
        <input id="input" type="file" onChange={handleImageUpload} />
      </UploadButtonStyle>
    </AddProductImgWrapp>
  );
}

const AddProductImgWrapp = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .img-wrapper {
    height: 200px;
    background-color: var(--basic-border-color);
  }

  button {
    border: none;
    padding: 0;
    position: absolute;
    width: 36px;
    height: 36px;
    bottom: 0;
    right: 0;
    margin: 20px;
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

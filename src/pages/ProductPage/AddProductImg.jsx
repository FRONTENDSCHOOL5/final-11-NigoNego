import React from 'react';
import styled from 'styled-components';
import testImg from '../../assets/images/post-test-img.jpg';
import imgUploadBtn from '../../assets/icons/img-btn.png';

export default function AddProductImg() {
  return (
    <AddProductImgWrapp>
      <p>이미지 등록</p>
      <img src={testImg} alt="" />
      <button type="button">
        <img src={imgUploadBtn} alt="" />
      </button>
    </AddProductImgWrapp>
  );
}

const AddProductImgWrapp = styled.div`
  position: relative;

  img {
    width: 100%;
    border-radius: 10px;
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

import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Input from '../../components/common/Input/Input';
import { HeaderUploadNav } from '../../components/common/Header/Header';
// import { HeaderUploadNav } from '../common/Header/Header';
import buttonImg from '../../assets/images/upload-file.svg';

export default function ProductPage() {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');

  // const [content, setContent] = useState('');
  const [itemImage, setItemImage] = useState('');

  // user 데이터 저장
  // const [userImage, setUserImage] = useState('');
  // const [userContent, setUserContent] = useState('');

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
      setItemImage(`https://api.mandarin.weniv.co.kr/${result.data.filename}`);
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';
    // 게시글 작성 api 호출
    try {
      axios({
        method: 'POST',
        url: `https://api.mandarin.weniv.co.kr/product`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },

        data: {
          product: {
            itemName: itemName,
            price: Number(price), //1원 이상
            link: link,
            itemImage: `${itemImage}`,
          },
        },
      }).then(response => {
        console.log(response);
        console.log('POST 요청 완료');
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ProductPageWrapp>
      <form onSubmit={handleSubmit}>
        <HeaderUploadNav />
        <AddProductImgWrapp>
          <p>이미지 등록</p>
          <div className="img-wrapper">
            {itemImage.length > 0 && <img src={itemImage} alt="" />}
          </div>

          <UploadButtonStyle>
            <label htmlFor="input" />
            <input id="input" type="file" onChange={handleImageUpload} />
          </UploadButtonStyle>
        </AddProductImgWrapp>
        <div className="input-wrapper">
          <Input
            label="상품명"
            placeholder="2~10자 이내여야 합니다."
            onChange={e => {
              setItemName(e.target.value);
            }}
          />
        </div>
        <div className="input-wrapper">
          <Input
            label="가격"
            placeholder="숫자만 입력 가능합니다."
            onChange={e => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="input-wrapper">
          <Input
            label="판매링크"
            placeholder="URL을 입력해 주세요."
            onChange={e => {
              setLink(e.target.value);
            }}
          />
        </div>
      </form>
    </ProductPageWrapp>
  );
}

const ProductPageWrapp = styled.div`
  .input-wrapper {
    margin: 20px 0;
  }
`;
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

import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Input from '../../components/common/Input/Input';
import { HeaderUploadNav } from '../../components/common/Header/Header';
import { ReactComponent as BtnImgUpload } from '../../assets/image/BtnImgUpload.svg';

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
    <GlobalWrapper>
      <form onSubmit={handleSubmit}>
        <HeaderUploadNav content="업로드" />
        <ul>
          <li>
            <p className="title">이미지 등록</p>
            <ImgUploadWrapp>
              <label htmlFor="input">
                <BtnImgUpload
                  width="34px"
                  height="34px"
                  fill="#c4c4c4"
                  stroke="#fff"
                />
              </label>
              <input id="input" type="file" onChange={handleImageUpload} />
              {itemImage.length > 0 && <img src={itemImage} alt="" />}
            </ImgUploadWrapp>
          </li>
          <li>
            <label className="title">상품명</label>
            <Input
              placeholder="2~10자 이내여야 합니다."
              onChange={e => {
                setItemName(e.target.value);
              }}
            />
          </li>
          <li>
            <label className="title">가격</label>
            <Input
              placeholder="숫자만 입력 가능합니다."
              onChange={e => {
                setPrice(e.target.value);
              }}
            />
          </li>
          <li>
            <label className="title">판매링크</label>
            <Input
              placeholder="URL을 입력해 주세요."
              onChange={e => {
                setLink(e.target.value);
              }}
            />
          </li>
        </ul>
      </form>
    </GlobalWrapper>
  );
}

const GlobalWrapper = styled.div`
  form {
    .title {
      font-size: 12px;
      margin-bottom: 12px;
      color: var(--basic-grey);
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`;
const ImgUploadWrapp = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;

  background: var(--light-grey);
  position: relative;
  label {
    position: absolute;
    right: 7px;
    bottom: 7px;
  }
  input {
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

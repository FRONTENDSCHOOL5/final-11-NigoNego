import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Input from '../../components/common/Input/Input';
import { HeaderUploadNav } from '../../components/common/Header/Header';
import AddProductImg from './AddProductImg';
// import { HeaderUploadNav } from '../common/Header/Header';

export default function ProductInput() {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(4444);
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';
    // 게시글 작성 api 호출
    try {
      console.glo(typeof price);
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
            itemImage: '123544565',
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
    <ProductInputWrapp>
      <form onSubmit={handleSubmit}>
        <HeaderUploadNav />
        <AddProductImg />
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
    </ProductInputWrapp>
  );
}

const ProductInputWrapp = styled.div`
  .input-wrapper {
    margin: 20px 0;
  }
`;

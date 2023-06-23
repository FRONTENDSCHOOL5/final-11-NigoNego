import React from 'react';
import styled from 'styled-components';
import { HeaderUploadNav } from '../Header/Header';
import Input from '../Input/Input';
import AddProductImg from '../../Profile/AddProductImg';

export default function AddProduct() {
  return (
    <AddProductWrapp>
      <HeaderUploadNav />
      <AddProductImg />
      <div className="input-wrapper">
        <Input label="상품명" placeholder="2~10자 이내여야 합니다." />
      </div>
      <div className="input-wrapper">
        <Input
          label="가격"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
      </div>
      <div className="input-wrapper">
        <Input
          label="판매링크"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        />
      </div>
    </AddProductWrapp>
  );
}

const AddProductWrapp = styled.div`
  .input-wrapper {
    margin: 20px 0;
  }
`;

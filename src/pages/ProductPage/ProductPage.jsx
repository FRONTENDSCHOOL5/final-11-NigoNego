import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../components/common/Input/Input';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import authAtom from '../../atom/authToken';

import FileUploadInput from '../../components/common/Input/FileUploadInput';
import { HeaderBasicNav } from '../../components/common/Header/Header';
import Layout from '../../styles/Layout';

import useFetchToken from "../../Hooks/UseFetchToken";
export default function ProductPage() {
  const navigate = useNavigate();

  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [itemImage, setItemImage] = useState('');

  const { postJoinImage, postProductUpload } = useFetchToken();

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (itemName && price && link && itemImage) {
      setIsFormValid(true);
    }
  }, [itemName, price, link, itemImage]);

  const handleImageUpload = e => {
    e.preventDefault();

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    postJoinImage(formData).then(response => {
      setItemImage(`https://api.mandarin.weniv.co.kr/${response.data.filename}`);
    })
  };
  function handleSubmit(e) {
    e.preventDefault();

    postProductUpload(itemName, price, link, itemImage).then(response => {
      navigate('/myprofile');
    });

  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <HeaderBasicNav disabled={!isFormValid}>업로드</HeaderBasicNav>

        <ul>
          <li>
            <p className="title">이미지 등록</p>
            <ImgUploadWrapp>
              <FileUploadInput
                id="input"
                type="file"
                onChange={handleImageUpload}
              />
              <Input id="input" type="file" onChange={handleImageUpload} />
              {itemImage.length > 0 && (
                <img src={itemImage} alt="" style={{ borderRadius: '10px' }} />
              )}
            </ImgUploadWrapp>
          </li>
          <li>
            <Input
              label="상품명"
              value={itemName}
              placeholder="2~10자 이내여야 합니다."
              onChange={e => {
                setItemName(e.target.value);
              }}
            />
          </li>
          <li>
            <Input
              label="가격"
              placeholder="숫자만 입력 가능합니다."
              value={price}
              onChange={e => {
                setPrice(e.target.value);
              }}
            />
          </li>
          <li>
            <Input
              label="판매링크"
              placeholder="URL을 입력해 주세요."
              value={link}
              onChange={e => {
                setLink(e.target.value);
              }}
            />
          </li>
        </ul>
      </form>
    </Layout>
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

      li {
        width: 322px;
        margin: auto;
      }
    }
  }
`;
const ImgUploadWrapp = styled.div`
  width: 100%;
  height: 204px;
  border-radius: 10px;
  margin: auto;

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

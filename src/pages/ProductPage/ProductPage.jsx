import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Input from '../../components/common/Input/Input';
import { HeaderUploadNav } from '../../components/common/Header/Header';

import { ReactComponent as BtnImgUpload } from '../../assets/image/BtnImgUpload.svg';
import { useNavigate } from 'react-router-dom';

// import { HeaderUploadNav } from '../common/Header/Header';
import { authAtom } from '../../atom/atoms';
import { useRecoilValue } from 'recoil';
import BodyGlobal from '../../styles/BodyGlobal';

export default function ProductPage() {
  const user = 'nigonego';
  const navigate = useNavigate();

  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [itemImage, setItemImage] = useState('');

  const auth = useRecoilValue(authAtom);
  const [isFormValid, setIsFormValid] = useState(false);
  // const [isBtnActive, setIsBtnActive] = useState(Boolean(false));
  console.log(isFormValid);

  useEffect(() => {
    if (itemName && price && link && itemImage) {
      setIsFormValid(true);
      // setIsBtnActive(Boolean(true))
    }
  }, [itemName, price, link, itemImage]);

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
    // 게시글 작성 api 호출
    try {
      axios({
        method: 'POST',
        url: `https://api.mandarin.weniv.co.kr/product`,
        headers: {
          Authorization: `Bearer ${auth}`,
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
        navigate('/myprofile', {
          state: { user },
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <GlobalWrapper>
      <form onSubmit={handleSubmit}>
        <HeaderUploadNav content="업로드" isFormValid={isFormValid} />

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
              {itemImage.length > 0 && (
                <img src={itemImage} alt="" style={{ borderRadius: '10px' }} />
              )}
            </ImgUploadWrapp>
          </li>
          <li>
            <label className="title">상품명</label>
            <Input
              value={itemName}
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
              value={price}
              onChange={e => {
                setPrice(e.target.value);
              }}
            />
          </li>
          <li>
            <label className="title">판매링크</label>
            <Input
              placeholder="URL을 입력해 주세요."
              value={link}
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

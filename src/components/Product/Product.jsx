import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../atom/atoms';
const ProductWrapper = styled.div`
  margin-left: 10px;
  .product-list-items {
    display: flex;
    gap: 10px;
  }
`;

// 작업

export default function Product() {
  const [userData, setUserData] = useState('');
  const auth = useRecoilValue(authAtom);

  useEffect(() => {
    try {
      axios({
        method: 'GET',
        url: `https://api.mandarin.weniv.co.kr/product/nigonego`,

        headers: {
          Authorization: `Bearer ${auth}`,
          'Content-type': 'application/json',
        },
      }).then(response => {
        setUserData(response.data.product);
      });
    } catch (err) {
      console.log('에러');
    }
  }, [auth]);
  return (
    <ProductWrapper>
      <h2>판매 중인 상품</h2>
      <div className="product-list-items">
        {userData.length > 0 && <ProductItem userData={userData} />}
      </div>
    </ProductWrapper>
  );
}

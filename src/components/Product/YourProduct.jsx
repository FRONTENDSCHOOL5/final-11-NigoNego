import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import YourProductItem from './YourProductItem';

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
  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';
    try {
      axios({
        method: 'GET',
        url: `https://api.mandarin.weniv.co.kr/product/nigonego`,

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }).then(response => {
        setUserData(response.data.product);
      });
    } catch (err) {
      console.log('에러');
    }
  }, []);
  return (
    <ProductWrapper>
      <h2>판매 중인 상품</h2>
      <div className="product-list-items">
        {userData.length > 0 && <YourProductItem userData={userData} />}
      </div>
    </ProductWrapper>
  );
}

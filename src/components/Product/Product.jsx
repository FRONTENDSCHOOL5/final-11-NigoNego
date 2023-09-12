// Product.js

import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import UseFetchToken from '../../Hooks/UseFetchToken';

const ProductWrapper = styled.div`
  text-align: center;
  .product-list-items {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    width: 350px;
    margin: auto;

    button {
      flex: 0 0 auto;
      width: 140px;
      border: none;
    }
    h2 {
    }
  }
`;

export default function Product({ accountName }) {
  const { getProductListLimit } = UseFetchToken();
  const [userData, setUserData] = useState([]);
  const productListRef = useRef(null);
  useEffect(() => {
    fetchData(0); // 초기 데이터 로드
  }, []);

  const fetchData = skip => {
    getProductListLimit(skip, accountName)
      .then(response => {
        setUserData(prevData => [...prevData, ...response.data.product]);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = productListRef.current;
      if (container) {
        const { scrollLeft, clientWidth, scrollWidth } = container;
        if (scrollLeft + clientWidth >= scrollWidth) {
          const skip = userData.length;
          fetchData(skip);
        }
      }
    };

    const productList = productListRef.current;
    if (productList) {
      productList.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (productList) {
        productList.removeEventListener('scroll', handleScroll);
      }
    };
  }, [userData]);
  return (
    <ProductWrapper>
      <h2>판매 중인 상품</h2>
      <div className="product-list-items" ref={productListRef}>
        {userData.length > 0 && <ProductItem userData={userData} />}
      </div>
    </ProductWrapper>
  );
}

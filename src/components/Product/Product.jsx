import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const ProductWrapper = styled.div`
  margin-left: 10px;
  .product-list-items {
    display: flex;
    gap: 10px;
  }
`;

export default function Product() {
  return (
    <ProductWrapper>
      <h2>판매 중인 상품</h2>
      <div className="product-list-items">
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </ProductWrapper>
  );
}

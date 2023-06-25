import styled from 'styled-components';
import Product from './Product';

const ProductWrapper = styled.div`
  .product-list-items {
    display: flex;
    /* flex-wrap: nowrap; */
    gap: 10px;
    overflow-x: auto;

    button {
      flex: 0 0 auto;
      width: 140px;
      border: none;
    }
  }
`;

export default function YourProduct({ accountname }) {
  return <Product accountname={accountname} />;
}

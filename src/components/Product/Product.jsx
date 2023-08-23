import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import UseFetchToken from '../../Hooks/UseFetchToken';
import accountNameAtom from '../../atom/accountName';
import { useRecoilValue } from 'recoil';
import atomMyData from '../../atom/atomMyData';

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

export default function Product({ profileMyAccount }) {
  const atomYourAccount = useRecoilValue(accountNameAtom);
  const myData = useRecoilValue(atomMyData);
  const myAccount = myData.data.user.accountname;
  const yourAccount = atomYourAccount.author.accountname;
  const [account, setAccount] = useState();
  const { getProductListLimit } = UseFetchToken();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    if (profileMyAccount === myAccount) {
      setAccount(myAccount);
    } else {
      setAccount(yourAccount);
    }
  }, [account]);

  useEffect(() => {
    fetchData();
  }, [account]);

  const fetchData = () => {
    getProductListLimit(account)
      .then(response => {
        console.log(account);
        setUserData(response.data.product);
      })
      .catch(error => console.error(error));
  };

  return (
    <ProductWrapper>
      <h2>판매 중인 상품</h2>
      {userData.length > 0 && <ProductItem userData={userData} />}
    </ProductWrapper>
  );
}

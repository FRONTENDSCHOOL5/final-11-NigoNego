import MyHomePost from '../../../components/HomePost/MyHomePost';
import Product from '../../../components/Product/Product';
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader';
import Navbar from '../../../components/common/Navbar/Navbar';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import BodyGlobal from '../../../styles/BodyGlobal';
import { ReactComponent as BtnVertical } from '../../../assets/image/BtnVertical.svg';
import { ReactComponent as BtnGrid } from '../../../assets/image/BtnGrid.svg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import HomePostGrid from '../../../components/HomePost/HomePostGrid';
import Layout from '../../../styles/Layout';
import { useLocation } from 'react-router-dom';

export default function MyProfilePage() {
  const [isClickedList, setIsClickedList] = useState(true);
  const [isClickedGrid, setIsClickedGrid] = useState(false);

  // Navbar.jsx 에 navigate state
  const location = useLocation();
  const accountName = location.state.userData.user.accountname;

  const userData = location.state.userData.user;
  const handleClickList = e => {
    e.preventDefault();
    if (!isClickedList) {
      setIsClickedList(true);
      setIsClickedGrid(false);
    }
  };

  const handleClickGrid = e => {
    e.preventDefault();
    if (!isClickedGrid) {
      setIsClickedGrid(true);
      setIsClickedList(false);
    }
  };

  return (
    <Layout>
      <HeaderBasicNav />
      <BodyGlobal>
        <ProfileHeader myData={userData} />
        <Product accountName={accountName} />

        {/* <PostAlignChangeBut /> */}
        <ImgAlignNav>
          <button onClick={e => handleClickList(e)}>
            <BtnGrid
              width="26px"
              height="26px"
              fill={isClickedList ? '#767676' : '#dbdbdb'}
              stroke={isClickedList ? '#767676' : '#dbdbdb'}
            />
          </button>
          <button onClick={e => handleClickGrid(e)}>
            <BtnVertical
              width="26px"
              height="26px"
              fill={isClickedGrid ? '#767676' : '#dbdbdb'}
              stroke={isClickedGrid ? '#767676' : '#dbdbdb'}
            />
          </button>
        </ImgAlignNav>

        {isClickedList && <MyHomePost accountName={accountName} />}
        {isClickedGrid && <HomePostGrid />}
      </BodyGlobal>
      <Navbar homeV={true} chatV={true} postV={true} profileV={false} />
    </Layout>
  );
}

const ImgAlignNav = styled.div`
  height: 4.8rem;
  margin: 6px 0 16px 0;
  border-top: 1px solid var(--basic-border-color);
  border-bottom: 1px solid var(--basic-border-color);
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 10px;
  background-color: #fff;
  button {
    border: 0;
  }
`;

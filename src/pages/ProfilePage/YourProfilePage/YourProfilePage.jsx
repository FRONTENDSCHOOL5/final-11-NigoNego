import React from 'react';
import YourProduct from '../../../components/Product/YourProduct';
import YourHomePost from '../../../components/HomePost/YourHomePost';
import YourProfileHeader from '../../../components/YourProfileHeader/YourProfileHeader';
import { useLocation } from 'react-router-dom';
import Navbar from '../../../components/common/Navbar/Navbar';
import BodyGlobal from '../../../styles/BodyGlobal';
import { HeaderBasicNav } from '../../../components/common/Header/Header';
import { Testt } from './../../../api/getData/getData';

export default function YourProfilePage() {
  const location = useLocation();
  const accountname = location.state.accountname;
  return (
    <div>
      <BodyGlobal>
        <HeaderBasicNav />
        <YourProfileHeader accountname={accountname} />
        {/* BodyGlobal 컴포넌트를 사용합니다. */}
        <YourProduct accountname={accountname} />
        {console.log(accountname)}
        <YourHomePost accountname={accountname} />
      </BodyGlobal>
      <Navbar />
    </div>
  );
}

import React from 'react';
import YourProduct from '../../../components/Product/YourProduct';
import YourHomePost from '../../../components/HomePost/YourHomePost';
import YourProfileHeader from '../../../components/YourProfileHeader/YourProfileHeader';
import { useLocation } from 'react-router-dom';
import Navbar from '../../../components/common/Navbar/Navbar';

export default function YourProfilePage() {
  const location = useLocation();
  const accountname = location.state.accountname;
  const follower = location.state.follower;

  return (
    <div>
      <YourProfileHeader accountname={accountname} />
      <YourProduct accountname={accountname} />
      <YourHomePost accountname={accountname} />
      <Navbar />
    </div>
  );
}

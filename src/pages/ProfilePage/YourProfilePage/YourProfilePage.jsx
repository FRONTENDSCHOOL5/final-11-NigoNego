import React from 'react';
import YourProduct from '../../../components/Product/YourProduct';
import YourHomePost from '../../../components/HomePost/YourHomePost';
import YourProfileHeader from '../../../components/YourProfileHeader/YourProfileHeader';
import { useLocation } from 'react-router-dom';

export default function YourProfilePage() {
  const location = useLocation();
  const accountname = location.state.accountname;

  return (
    <div>
      <YourProfileHeader accountname={accountname} />
      <YourProduct />
      <YourHomePost />
    </div>
  );
}

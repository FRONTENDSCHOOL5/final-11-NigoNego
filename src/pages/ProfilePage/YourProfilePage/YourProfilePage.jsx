import React from 'react';
import YourProduct from '../../../components/Product/YourProduct';
import YourHomePost from '../../../components/HomePost/YourHomePost';
import YourProfileHeader from '../../../components/YourProfileHeader/YourProfileHeader';
export default function MyProfilePage() {
  return (
    <div>
      <YourProfileHeader />
      <YourProduct />
      <YourHomePost />
    </div>
  );
}

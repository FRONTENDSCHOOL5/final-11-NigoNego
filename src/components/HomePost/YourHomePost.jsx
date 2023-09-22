import { useRecoilState, useRecoilValue } from 'recoil';
import MyHomePost from './MyHomePost';
import atomYourAccount from '../../atom/atomYourAccount';
import { useEffect } from 'react';

export default function YourHomePost({ accountName }) {
  console.log(accountName);
  return <MyHomePost accountName={accountName} />;
}

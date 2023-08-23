import { useRecoilState, useRecoilValue } from 'recoil';
import MyHomePost from './MyHomePost';
// import atomYourAccount from '../../atom/atomYourAccount';
import { useEffect } from 'react';

export default function YourHomePost({ postYourAccount }) {
  console.log(postYourAccount);
  return <MyHomePost postYourAccount={postYourAccount} />;
}

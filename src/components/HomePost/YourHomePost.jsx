import { useRecoilState, useRecoilValue } from 'recoil';
import MyHomePost from './MyHomePost';
import atomYourAccount from '../../atom/atomYourAccount';
import { useEffect } from 'react';

export default function YourHomePost({ accountname }) {
  const [yourAccount, setYourAccount] = useRecoilState(atomYourAccount);

  useEffect(() => {
    setYourAccount(accountname);
  }, []);
  return <MyHomePost accountname={accountname} />;
}

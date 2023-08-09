import React, { useState, useEffect } from 'react';
import SplashPage from './SplashPage';
import LoginMain from '../LoginMain/LoginMain';
import authAtom from '../../atom/authToken';
import { useRecoilValue } from 'recoil';
import HomeFeed from '../HomeFeed/HomeFeed';
import accountNameAtom from '../../atom/accountName';

function StartSplash() {
  const [loading, setloading] = useState(false);
  const auth = useRecoilValue(authAtom);
  const accountname = useRecoilValue(accountNameAtom);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setloading(true);
      setTimeout(() => {
        setloading(false);
      }, 4000);
    }
  }, []);

  return loading ? (
    <SplashPage />
  ) : auth && accountname ? (
    <HomeFeed />
  ) : (
    <LoginMain />
  );
}

export default StartSplash;

import React,{useState,useEffect} from 'react';
import SplashPage from '../SplashPage/SplashPage';
import LoginPage from '../LoginPage/LoginPage';

function StartSplash() {
  const [loading, setloading] = useState(false);

  useEffect(()=>{
    if (window.location.pathname ==='/'){
      setloading(true);
      setTimeout(()=>{
        setloading(false);
      },2500);
    }
  }, []);

  return (
    loading ? <SplashPage /> : <LoginPage/>
  )
}

export default StartSplash;
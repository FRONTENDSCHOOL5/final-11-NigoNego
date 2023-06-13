import React, { useState, useEffect } from "react";
import SplashPage from "../SplashPage/SplashPage";
import LoginMain from "../LoginMain/LoginMain";

function StartSplash() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setloading(true);
      setTimeout(() => {
        setloading(false);
      }, 4000);
    }
  }, []);

  return loading ? <SplashPage /> : <LoginMain />;
}

export default StartSplash;

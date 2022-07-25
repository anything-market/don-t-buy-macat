import React from 'react';
import Splash from '../../components/splash/Splash';
import { useState, useEffect } from 'react';
import SocialLogin from '../../components/login/SocialLogin';

function SplashMain() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2400);
    }
  }, []);

  return loading ? <Splash /> : <SocialLogin />;
}

export default SplashMain;

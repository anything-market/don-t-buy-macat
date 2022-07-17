import React, { useState } from 'react';
import * as S from './login.style';
import LoginButton from './../../assets/Login-Disabled-button.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');

  async function login() {
    try {
      const res = await axios.post('http://146.56.183.55:5050/user/login', {
        headers: {
          'Content-type': 'application/json',
        },
        user: {
          email: email,
          password: password,
        },
      });
      console.log(res);

      if (res.data.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
        console.log(res.data.message);
        setMessage('이메일 또는 비밀번호가 일치하지 않습니다.');
      } else {
        setMessage('');
        console.log(res.data.user.token);
        localStorage.setItem('Access Token', res.data.user.token);
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Wrapper>
      <h1>로그인</h1>
      <form action="#">
        <S.FormBox>
          <label htmlFor="name">이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="passWord"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="message">{message}</p>
          <img src={LoginButton} alt="login button" onClick={login} />
        </S.FormBox>
      </form>
      <p>이메일로 회원가입</p>
    </S.Wrapper>
  );
}

export default Login;

import React, { useState } from 'react';
import * as S from './login.style';
import LoginButton from './../../assets/Login-Disabled-button.svg';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    try {
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/user/login',
        {
          headers: {
            'Content-type': 'application/json',
          },
          user: {
            email: email,
            password: password,
          },
        },
      );
      console.log(res);
      console.log(res.data);
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
            type="text"
            id="passWord"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <img src={LoginButton} alt="login button" onClick={login} />
        </S.FormBox>
      </form>
      <p>이메일로 회원가입</p>
    </S.Wrapper>
  );
}

export default Login;

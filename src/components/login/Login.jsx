import React from 'react';
import * as S from './login.style';
import LoginButton from './../../assets/Login-button.svg';

function Login() {
  return (
    <S.Wrapper>
      <h1>로그인</h1>
      <form action="#">
        <S.FormBox>
          <label htmlFor="name">이메일</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="password">비밀번호</label>
          <input type="text" id="passWord" />
          <img src={LoginButton} alt="login button" />
        </S.FormBox>
      </form>
      <p>이메일로 회원가입</p>
    </S.Wrapper>
  );
}

export default Login;

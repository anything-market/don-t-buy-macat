import React, { useState, useEffect } from 'react';
import * as S from './login.style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [ableToClick, setAbleToClick] = useState(false);

  const [message, setMessage] = useState('');

  // email과 password가 둘 다 빈값이 아닐 때 setAbleToClick true로 변경
  useEffect(() => {
    if (email && password) {
      setAbleToClick(true);
    } else {
      setAbleToClick(false);
    }
  }, [email, password]);

  async function login() {
    console.log(ableToClick);
    // email, password가 둘 다 빈 값이 아닐때(true일 때)만 실행
    if (ableToClick === true) {
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
          <S.Button onClick={login} type="button" ableToClick={ableToClick}>
            로그인
          </S.Button>
        </S.FormBox>
      </form>
      <S.StyledLink to={'/signin'}>이메일로 회원가입</S.StyledLink>
    </S.Wrapper>
  );
}

export default Login;

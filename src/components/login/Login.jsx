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

  useEffect(() => {
    if (email && password) {
      setAbleToClick(true);
    } else {
      setAbleToClick(false);
    }
  }, [email, password]);

  async function login() {
    if (ableToClick === true) {
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

        if (res.data.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
          setMessage('이메일 또는 비밀번호가 일치하지 않습니다.');
        } else {
          try {
            await axios
              .get('https://mandarin.api.weniv.co.kr/user/checktoken', {
                headers: {
                  Authorization: `Bearer ${res.data.user.token}`,
                  'Content-type': 'application/json',
                },
              })
              .then((data) => {
                if (data.data.isValid) {
                  setMessage('');
                  localStorage.setItem('Access Token', res.data.user.token);
                  localStorage.setItem(
                    'Account Name',
                    res.data.user.accountname,
                  );
                  navigate('/home');
                } else {
                  alert('유효하지 않은 접근입니다');
                }
              })
              .catch((error) => {
                console.log(error);
              });
          } catch (error) {
            console.log(error);
          }
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
      <S.StyledLink to={'/join/signin'}>이메일로 회원가입</S.StyledLink>
    </S.Wrapper>
  );
}

export default Login;

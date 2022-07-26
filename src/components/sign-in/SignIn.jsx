import React from 'react';
import { useState } from 'react';
import * as S from './signin.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);

  const passed = isValidatedEmail && isValidatedPassword;

  // email 인풋값이 변할때마다 email유효성검사 진행
  useEffect(() => {
    const regexEmail =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!regexEmail.test(email) && email !== '') {
      setIsValidatedEmail(false);
      setEmailMessage('*올바른 이메일 형식이 아닙니다.');
    } else if (email === '') {
      setIsValidatedEmail(false);
      setEmailMessage('');
    } else {
      setIsValidatedEmail(true);
      setEmailMessage('');
    }
    console.log('email :', isValidatedEmail);
  }, [email]);

  // password 인풋값이 변할때마다 email유효성검사 진행
  useEffect(() => {
    if (password.length < 6 && password !== '') {
      setPasswordMessage('*비밀번호는 6자 이상이어야 합니다.');
      setIsValidatedPassword(false);
    } else if (password === '') {
      setIsValidatedPassword(false);
    } else {
      setPasswordMessage('');
      setIsValidatedPassword(true);
    }
    console.log('password :', isValidatedPassword);
  }, [password]);

  // 다음버튼 누를시 서버에 post
  const sendDataToSetProfile = async function () {
    const res = await axios.post(
      'https://mandarin.api.weniv.co.kr/user/emailvalid',
      {
        user: {
          email: email,
        },
      },
    );

    if (res.data.message === '사용 가능한 이메일 입니다.') {
      setIsValidatedEmail(true);
      navigate('/join/setprofile', {
        state: {
          email: email,
          password: password,
        },
      });
    } else if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
      setIsValidatedEmail(false);
      setEmailMessage('*이미 가입된 이메일 주소 입니다.');
    } else {
      setIsValidatedEmail(false);
      alert('올바른 이메일과 비밀번호를 입력해 주세요.');
    }
  };

  return (
    <S.Wrapper>
      <h1>이메일로 회원가입</h1>
      <form action="#">
        <S.FormBox>
          <label htmlFor="name">이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="이메일 주소를 입력해 주세요."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="message">{emailMessage}</p>

          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="passWord"
            name="password"
            placeholder="비밀번호를 설정해 주세요."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="message">{passwordMessage}</p>
          <S.Button
            disabled={passed ? null : 'disabled'}
            onClick={sendDataToSetProfile}
          >
            다음
          </S.Button>
        </S.FormBox>
      </form>
    </S.Wrapper>
  );
}

export default SignIn;

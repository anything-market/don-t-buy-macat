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

  //집에가서 validate 하나로 합치기

  const sendDataToSetProfile = async function () {
    const res = await axios.post('http://146.56.183.55:5050/user/emailvalid', {
      user: {
        email: email,
      },
    });

    console.log(res.data.message);

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
      alert('잘못된 접근');
    }
  };

  // 이메일 유효성 검사
  const validateEmail = () => {
    const regexEmail =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!regexEmail.test(email) && email !== '') {
      setIsValidatedEmail(false);
      setEmailMessage('*올바른 이메일 형식이 아닙니다.');
    } else {
      setIsValidatedEmail(true);
      setEmailMessage('');
    }
  };

  useEffect(() => {
    if (email && password) {
      setIsValidatedEmail(true);
    } else {
      setIsValidatedEmail(false);
      setIsValidatedPassword(false);
    }
  }, [email, password]);

  // 패스워드 유효성 검사
  const validatePassword = () => {
    if (password.length < 6 && password !== '') {
      setPasswordMessage('*비밀번호는 6자 이상이어야 합니다.');
      setIsValidatedPassword(false);
    } else {
      setPasswordMessage('');
      setIsValidatedPassword(true);
    }
  };

  const passed = isValidatedEmail && isValidatedPassword;
  console.log(passed, 'email:', isValidatedEmail, 'pw:', isValidatedPassword);

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
            onBlur={validateEmail}
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
            onBlur={validatePassword}
          />
          <p className="message">{passwordMessage}</p>
          <S.Button
            disabled={
              // 유효성 검사한거 이메일/비밀번호 둘중에 하나라도 false면 disabled되게하기
              passed ? null : 'disabled'
            }
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

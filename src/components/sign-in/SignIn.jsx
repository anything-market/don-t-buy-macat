import React from 'react';
import { useState } from 'react';
import * as S from './signin.style';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailMessage, setEamilMessage] = useState('');
  const [passwordMessage, setpasswordMessage] = useState('');

  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);

  const sendDataToSetProfile = function () {
    // 서버통신 통과하면 이메일/패스워드 정보 넘겨주기
    if (isValidatedEmail && isValidatedPassword) {
      navigate('/join/setprofile', {
        state: {
          email: email,
          password: password,
        },
      });
    } else {
      console.log('아디비번 제대로치삼');
    }
    // 안되면 메세지 출력
  };

  // 이메일 정규식 통과 못할시 메세지 설정, false
  const validateEmail = () => {
    const regexEmail =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!regexEmail.test(email) && email !== '') {
      setIsValidatedEmail(false);
      setEamilMessage('*올바른 이메일 형식이 아닙니다.');
    } else {
      setIsValidatedEmail(true);
      setEamilMessage('');
    }
  };

  // 비밀번호 6자리 이상 아닐 시 메세지 설정, false
  const validatePassword = () => {
    if (password.length < 6 && password !== '') {
      setpasswordMessage('*비밀번호는 6자 이상이어야 합니다.');
      setIsValidatedPassword(false);
    } else {
      setpasswordMessage('');
      setIsValidatedPassword(true);
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
              isValidatedEmail && setIsValidatedEmail ? 'disabled' : null
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

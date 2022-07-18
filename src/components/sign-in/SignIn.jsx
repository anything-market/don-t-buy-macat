import React from 'react';
import { useState } from 'react';
import * as S from './signin.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function SignIn() {
  const navigate = useNavigate();

  // 이메일, 비밀번호 인풋값
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 유효성검사 통과못하면 출력할 메세지
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  // 유효성검사 통과에 따라서 다음버튼 활성화할지를 결정하기위해 isvalidated useState로 선언
  // 초기값은 마운트시 다음버튼 눌리면 안되니까 false로 설정해놓고, 유효성검사 통과되면 true로 변함
  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);
  // passed에 boolean값 넣어서 버튼에 passed값이 false이면 버튼 disabled, true이면 null
  const passed = isValidatedEmail && isValidatedPassword;

  // email 인풋값이 변할때마다 email유효성검사 진행
  useEffect(() => {
    // 정규표현식 변수에 선언
    const regexEmail =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    // 빈값이 아니면서 유효성 검사 통과 못했다면 메세지 출력하고 버튼 클릭 안되게 isValidated를 false로설정
    if (!regexEmail.test(email) && email !== '') {
      setIsValidatedEmail(false);
      setEmailMessage('*올바른 이메일 형식이 아닙니다.');
      // 아무것도 안써놨으면 버튼 클릭 안되게 isValidated를 false로설정
    } else if (email === '') {
      setIsValidatedEmail(false);
      // 그 외 (뭐라도 썼으면서 유효성 검사 통과)는 메세지 없애고 isValidated true로 설정
    } else {
      setIsValidatedEmail(true);
      setEmailMessage('');
    }
    console.log('email :', isValidatedEmail);
  }, [email]);

  // password 인풋값이 변할때마다 email유효성검사 진행
  useEffect(() => {
    // 빈값이 아니면서 패스워드가 5자리 미만이면 메세지 출력하고 버튼 클릭 안되게 isValidated를 false로설정
    if (password.length < 6 && password !== '') {
      setPasswordMessage('*비밀번호는 6자 이상이어야 합니다.');
      setIsValidatedPassword(false);
      // 아무것도 안써놨으면 버튼 클릭 안되게 isValidated를 false로설정
    } else if (password === '') {
      setIsValidatedPassword(false);
      // 그 외 (뭐라도 썼으면서 유효성 검사 통과)는 메세지 없애고 isValidated true로 설정
    } else {
      setPasswordMessage('');
      setIsValidatedPassword(true);
    }
    console.log('password :', isValidatedPassword);
  }, [password]);

  // 다음버튼 누를시 서버에 post
  const sendDataToSetProfile = async function () {
    const res = await axios.post('http://146.56.183.55:5050/user/emailvalid', {
      user: {
        email: email,
      },
    });

    // 서버 post결과 콘솔에 출력
    console.log(res.data.message);

    // post결과 반환받는 메세지에 따라서 처리
    if (res.data.message === '사용 가능한 이메일 입니다.') {
      setIsValidatedEmail(true);
      // setprofile.jsx 에 이메일과 password 전달
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

import React from 'react';
import * as S from './signin.style';

function SignIn() {
  return (
    <S.Wrapper>
      <h1>이메일로 회원가입</h1>
      <form action="#">
        <S.FormBox>
          <label htmlFor="name">이메일</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="passWord" name="password" />
          <S.Button>다음</S.Button>
        </S.FormBox>
      </form>
    </S.Wrapper>
  );
}

export default SignIn;

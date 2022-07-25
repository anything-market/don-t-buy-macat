import React from 'react';
import Logo from '../../assets/symbol-logo-login.svg';
import Kakao from '../../assets/message-circle.svg';
import Google from '../../assets/Google__G__Logo 1.svg';
import Facebook from '../../assets/facebook.svg';
import {
  Wrapper,
  Background,
  ImgBox,
  LoginBox,
  List,
  Others,
  StyledLink,
} from './socialLogin.style';

function SocialLogin() {
  return (
    <Wrapper>
      <h1 className="A11yHidden">
        로그인 혹은 회원가입페이지로 이동할 수 있는 페이지입니다.
      </h1>
      <Background>
        <ImgBox>
          <img src={Logo}></img>
        </ImgBox>
      </Background>
      <LoginBox>
        <ul>
          <List borderColor="#F2C94C">
            <img src={Kakao} />
            <p>카카오톡 계정으로 로그인</p>
          </List>
          <List borderColor="#767676">
            <img src={Google} />
            <p>구글 계정으로 로그인</p>
          </List>
          <List borderColor="#2D9CDB">
            <img src={Facebook} />
            <p>페이스북 계정으로 로그인</p>
          </List>
        </ul>
        <Others>
          <StyledLink to={'/login'} className="psudoElement">
            이메일로 로그인
          </StyledLink>
          <StyledLink to={'/join/signin'}>회원가입</StyledLink>
        </Others>
      </LoginBox>
    </Wrapper>
  );
}

export default SocialLogin;

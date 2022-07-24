import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/symbol-logo-login.svg';
import Kakao from '../../assets/message-circle.svg';
import Google from '../../assets/Google__G__Logo 1.svg';
import Facebook from '../../assets/facebook.svg';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette['primary']};
`;

const ImgBox = styled.div`
  text-align: center;
  margin-top: 40%;
  & > img {
    width: 10rem;
  }
`;

const LoginBox = styled.div`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  border-radius: 30px 30px 0 0;
  padding: 5rem 3.4rem 2rem 3.4rem;

  & > ul {
    margin-bottom: 2rem;
  }
`;

const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 50px;
  color: ${(props) => props.theme.palette['mediumGray']};
  font-size: 1.4rem;
  padding: 1.4rem 0 1.4rem 0;
  margin-bottom: 1rem;
  cursor: pointer;

  & > img {
    width: 2.4rem;
    position: absolute;
    left: 1.4rem;
  }
`;

const Others = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.palette['mediumGray']};
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 15%;

  & > .psudoElement {
    position: relative;
    margin-right: 2rem;

    ::after {
      content: '';
      display: block;
      border: 1px solid ${(props) => props.theme.palette['mediumGray']};
      opacity: 0.5;
      height: 10px;
      position: absolute;
      top: 0;
      right: -1.5rem;
    }
  }
`;

function SocialLogin() {
  return (
    <Wrapper>
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
          <Link to={'/login'} className="psudoElement">
            이메일로 로그인
          </Link>
          <Link to={'/join/signin'}>회원가입</Link>
        </Others>
      </LoginBox>
    </Wrapper>
  );
}

export default SocialLogin;

import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/symbol-logo-login.svg';

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
  min-height: 40vh;
  border-radius: 30px 30px 0 0;
`;

function SocialLogin() {
  return (
    <Wrapper>
      <Background>
        <ImgBox>
          <img src={Logo}></img>
        </ImgBox>
      </Background>
      <LoginBox></LoginBox>
    </Wrapper>
  );
}

export default SocialLogin;

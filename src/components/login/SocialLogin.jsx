import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/symbol-logo-login.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette['primary']};
`;

const ImgBox = styled.div`
  text-align: center;
  margin-top: 25%;
  & > img {
    width: 10rem;
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
      <div></div>
    </Wrapper>
  );
}

export default SocialLogin;

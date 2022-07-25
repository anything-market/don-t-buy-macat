import styled from 'styled-components';
import { keyframes } from 'styled-components';
import catLogo from '../../assets/catLogo.svg';
import catLogoStar from '../../assets/catLogoStar.svg';
import catLogoTxt from '../../assets/catLogoTxt.svg';

const ImageFadeOut = keyframes`
from{
  opacity:0
}
to{
  opacity:1
}
`;

const changeBackground = keyframes`
0% {
        background: #FFFFFF;
    }
    100% {
        background: #FADF53;
    }
`;

export const SplashImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation-name: ${ImageFadeOut};
  animation-duration: 1.4s;
  animation: ${changeBackground} 3s ease;
`;

const logoPlay = keyframes`
  100% {
    background-position: -1316px 0;
  }
`;

export const Logo = styled.div`
  position: absolute;
  width: 9.4rem;
  height: 8.6rem;
  margin-left: 0.8rem;
  background: url(${catLogo}) no-repeat 0 0 / 131.6rem 8.6rem;
  animation: ${logoPlay} 1.8s steps(14) infinite;
`;

const logoFlash = keyframes`
  0% {
          transform: rotate(3deg);
          opacity: 0;
        }
        100% {
          transform: rotate(-3deg);
        }
`;

export const LogoFlash = styled.div`
  width: 110px;
  height: 84px;
  background: url(${catLogoStar}) no-repeat 0 0;
  animation: ${logoFlash} ease-in-out 0.7s infinite alternate;
`;

export const LogoTxtImg = styled.div`
  position: absolute;
  margin: 130px 0 0 10px;
  width: 134px;
  height: 40px;
  background: url(${catLogoTxt}) no-repeat 0 0;
`;

import styled from 'styled-components';
// import saveButton from '../../../assets/Ms-button.svg';
import iconArrowLeft from '../../../assets/icon-arrow-left.svg';
// import saveDisabledButton from '../../../assets/Ms--Disabled-button.svg';

export const ArrowLeftIcon = styled.img.attrs({
  src: iconArrowLeft,
  alt: '뒤로가기',
})``;

export const SaveBtn = styled.button`
  font-size: 1.4rem;
  padding: 0.8rem 3.2rem;
  border-radius: 2.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.palette['black']};
  background: ${(props) => props.theme.palette['primary']};
  :disabled {
    background: ${(props) => {
      return props.theme.palette['disabled'];
    }};
  }
`;

import styled from 'styled-components';
// import saveButton from '../../../assets/Ms-button.svg';
import iconArrowLeft from '../../../assets/icon-arrow-left.svg';
import saveDisabledButton from '../../../assets/Ms--Disabled-button.svg';

export const ArrowLeftIcon = styled.img.attrs({
  src: iconArrowLeft,
  alt: '뒤로가기',
})``;

export const SaveBtn = styled.img.attrs({
  src: saveDisabledButton,
  alt: '저장하기',
})`
  cursor: default;
`;

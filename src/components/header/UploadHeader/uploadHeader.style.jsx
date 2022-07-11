import styled from 'styled-components';
// import saveButton from '../../../assets/Ms-button.svg';
import iconArrowLeft from '../../../assets/icon-arrow-left.svg';
import saveDisabledButton from '../../../assets/Ms--Disabled-button.svg';

export const BasicHeaderLayout = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 4.8rem;
  padding: 0 1.2rem 0 1.6rem;
  & > * {
    flex-shrink: 0;
  }
`;

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

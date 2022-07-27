import styled from 'styled-components';
import iconArrowLeft from '../../../assets/icon-arrow-left.svg';
import iconMoreVertical from '../../../assets/icon-more-vertical.svg';

export const ArrowLeftIcon = styled.img.attrs({
  src: iconArrowLeft,
  alt: '뒤로가기',
})``;

export const MoreIcon = styled.img.attrs({
  src: iconMoreVertical,
  alt: '더보기',
})``;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

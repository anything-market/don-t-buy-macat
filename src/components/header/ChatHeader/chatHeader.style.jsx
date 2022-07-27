import styled from 'styled-components';
import iconArrowLeft from '../../../assets/icon-arrow-left.svg';
import iconMoreVertical from '../../../assets/icon-more-vertical.svg';

export const ArrowLeftIcon = styled.img.attrs({
  src: iconArrowLeft,
  alt: '뒤로가기',
})``;

export const UserName = styled.h2`
  font-size: 1.4rem;
  margin: 0 auto 0 1rem;
`;

export const MoreIcon = styled.img.attrs({
  src: iconMoreVertical,
  alt: '더보기',
})``;

import styled from 'styled-components';
import iconArrowLeft from '../../../assets/icon-arrow-left.svg';
import iconMoreVertical from '../../../assets/icon-more-vertical.svg';

export const BasicHeaderLayout = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 4.8rem;
  padding: 0 1.2rem 0 1.6rem;
`;

export const ArrowLeftIcon = styled.img.attrs({
  src: iconArrowLeft,
  alt: '뒤로가기',
})``;

export const MoreIcon = styled.img.attrs({
  src: iconMoreVertical,
  alt: '더보기',
})``;

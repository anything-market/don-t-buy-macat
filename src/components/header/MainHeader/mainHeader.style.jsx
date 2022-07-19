import styled from 'styled-components';
import iconSearch from '../../../assets/icon-search.svg';

export const HeaderTitle = styled.h2`
  font-size: 1.8rem;
  margin-right: auto;
`;

export const SearchBtn = styled.button`
  margin-right: 0.4rem;
`;

export const SearchIcon = styled.img.attrs({
  src: iconSearch,
  alt: '검색하기',
})``;

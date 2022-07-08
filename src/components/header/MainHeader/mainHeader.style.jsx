import styled from 'styled-components';
import iconSearch from '../../../assets/icon-search.svg';
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

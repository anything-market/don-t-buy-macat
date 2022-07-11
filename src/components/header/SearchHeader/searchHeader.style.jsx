import styled from 'styled-components';
import iconArrowLeft from '../../../assets/icon-arrow-left.svg';

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

export const SearchInput = styled.input.attrs({
  type: 'text',
  placeholder: '계정검색',
})`
  flex-shrink: 1;
  width: 100%;
  height: 3.2rem;
  padding: 0 1.6rem 0;
  margin-left: 2rem;
  border: none;
  border-radius: 3.2rem;
  background-color: ${(props) => props.theme.palette['background']};
  font-size: 1.4rem;
  ::placeholder {
    color: ${(props) => props.theme.palette['lightGray']};
  }
`;

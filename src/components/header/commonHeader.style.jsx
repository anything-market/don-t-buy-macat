import styled from 'styled-components';

export const BasicHeaderLayout = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  height: 4.8rem;
  padding: 0 1.2rem 0 1.6rem;
  background-color: ${(props) => props.theme.palette['white']};
  z-index: 9999;
  & > * {
    flex-shrink: 0;
  }
  & + * {
    padding-top: 4.8rem;
  }
`;

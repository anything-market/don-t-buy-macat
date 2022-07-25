import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Background = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${(props) => props.theme.palette['primary']};
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
  & > img {
    width: 10rem;
  }
`;

export const LoginBox = styled.div`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  border-radius: 30px 30px 0 0;
  padding: 5rem 3.4rem 2rem 3.4rem;

  & > ul {
    margin-bottom: 2rem;
  }
`;

export const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 50px;
  color: ${(props) => props.theme.palette['mediumGray']};
  font-size: 1.4rem;
  padding: 1.4rem 0 1.4rem 0;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.palette['darkGray']};
    font-weight: 500;
  }

  & > img {
    width: 2.4rem;
    position: absolute;
    left: 1.4rem;
  }
`;

export const Others = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.palette['mediumGray']};
  margin-bottom: 15%;

  & > .psudoElement {
    position: relative;
    margin-right: 2rem;

    ::after {
      content: '';
      display: block;
      border: 1px solid ${(props) => props.theme.palette['mediumGray']};
      opacity: 0.5;
      height: 10px;
      position: absolute;
      top: 0;
      right: -1.5rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  &:hover {
    color: ${(props) => props.theme.palette['darkGray']};
    font-weight: 500;
  }
`;

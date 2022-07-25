import styled from 'styled-components';
import icon404 from '../../assets/icon-404.svg';

export const ErrorWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorIcon = styled.img.attrs({
  src: icon404,
  alt: '페이지를 찾을 수 없습니다',
})`
  width: 15.2rem;
  margin-bottom: 1.4rem;
`;

export const ErrorText = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: ${(props) => props.theme.palette['mediumGray']};
  text-align: center;
  margin-bottom: 2rem;
`;

export const PreButton = styled.button`
  width: 12rem;
  height: 4.4rem;
  border-radius: 4.4rem;
  background-color: ${(props) => props.theme.palette['primary']};
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: ${(props) => props.theme.palette['black']};
`;

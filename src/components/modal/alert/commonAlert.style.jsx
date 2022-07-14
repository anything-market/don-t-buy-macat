import styled from 'styled-components';

export const AlertContainer = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25.2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.palette['white']}; ;
`;

export const AlertMessage = styled.strong`
  display: block;
  font-size: 1.6rem;
  text-align: center;
  margin: 2.3rem 0 2.3rem;
`;

export const AlertBtnContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.palette['border']};
`;

export const AlertBtn = styled.button`
  display: inline-block;
  width: 50%;
  text-align: center;
  padding: 1.5rem 0 1.5rem;
  &:last-child {
    border-left: 1px solid ${(props) => props.theme.palette['border']};
    color: ${(props) => props.theme.palette['point']};
  }
`;

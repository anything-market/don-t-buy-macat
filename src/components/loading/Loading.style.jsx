import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/symbol-logo-login.svg';

export const LoadingWrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoadingText = styled.h1`
  font-size: 1.9rem;
  margin-top: 1rem;
  font-weight: 600;
`;

export const StyledLoadingIco = styled(Logo)`
  width: 7rem;
  height: 7rem;
`;

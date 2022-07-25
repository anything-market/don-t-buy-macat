import styled from 'styled-components';

export const UserProfileWrap = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette['background']};
  padding-bottom: 4.8rem;
`;

export const UserPostWrap = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${(props) => props.theme.palette['white']};
`;

export const UserPostHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 0.5px solid ${(props) => props.theme.palette['border']};
  border-bottom: 0.5px solid ${(props) => props.theme.palette['border']};
  background-color: ${(props) => props.theme.palette['white']};
  margin-top: 0.6rem;
`;

export const UserPostBtnsWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 390px;
  width: 100%;
  height: 44px;
  padding-right: 16px;
`;

export const ProfilePostCardWrap = styled.div`
  padding: 1.6rem 1.6rem 0 1.6rem;
`;

import styled from 'styled-components';

export const UserComponent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1rem;
  justify-content: space-between;
  margin-bottom: ${({ marginbottom }) => (marginbottom ? '1.2rem' : '0')};
  & > * {
    flex-shrink: 0;
  }
`;

export const NonRead = styled.div`
  position: absolute;
  top: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette['point']};
`;

export const UserInfoWrap = styled.div`
  display: flex;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: ${({ small }) => (small ? '4.2em' : '5em')};
  height: ${({ small }) => (small ? '4.2em' : '5em')};
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  margin: 0.6em auto 0.7em 1.2em;
  min-width: 15rem;
`;

export const UserName = styled.strong`
  display: block;
  font-size: 1.4em;
  margin-bottom: 0.6em;
  font-weight: 500;
`;

export const UserIntro = styled.strong`
  display: block;
  font-size: 1.2em;
  color: ${(props) => props.theme.palette['mediumGray']};
`;

export const TimeInfo = styled.p`
  font-weight: 900;
  color: ${(props) => props.theme.palette['border']};
  align-self: end;
  margin-bottom: 0.3rem;
`;

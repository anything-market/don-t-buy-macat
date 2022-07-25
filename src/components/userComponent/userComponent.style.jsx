import styled from 'styled-components';
import { css } from 'styled-components';

export const UserComponent = styled(div)`
  display: flex;
  align-items: center;
  //UserComponent 사이즈 조절을 위한 속성
  font-size: 1rem;
  margin-bottom: ${({ marginbottom }) => (marginbottom ? '1.2rem' : '0')};
  & > * {
    flex-shrink: 0;
  }
`;

export const ProfileImg = styled.img`
  width: ${({ small }) => (small ? '4.2em' : '5em')};
  height: ${({ small }) => (small ? '4.2em' : '5em')};
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  margin: 0.6em auto 0.7em 1.2em;
  min-width: 15rem;
  /* flex-shrink: 0; */
`;

export const UserName = styled.strong`
  display: block;
  font-size: 1.4em;
  margin-bottom: 0.6em;
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

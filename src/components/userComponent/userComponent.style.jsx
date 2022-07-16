import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { css } from 'styled-components';

export const UserComponent = styled(Link).attrs({
  to: '#',
})`
  display: flex;
  align-items: center;
  //UserComponent 사이즈 조절을 위한 속성
  font-size: 1rem;
  & > * {
    flex-shrink: 0;
  }
`;

export const ProfileImg = styled.img`
  width: 5em;
  height: 5em;
  border-radius: 50%;
`;

export const FollowBtn = styled.button`
  &::after {
    ${(props) =>
      props.isFollow
        ? css`
            content: '취소';
            color: ${props.theme.palette['mediumGray']};
          `
        : css`
            content: '팔로우';
            color: ${props.theme.palette['white']};
          `};
  }
  ${(props) =>
    props.isFollow
      ? css`
          background-color: ${props.theme.palette['white']};
          border: 1px solid ${props.theme.palette['border']};
        `
      : css`
          background-color: ${props.theme.palette['point']};
          border: none;
        `}
  padding: 0.7em 1.2em;
  border-radius: 2.6rem;
`;

export const UserInfo = styled.div`
  margin: 0.6em auto 0.7em 1.2em;
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

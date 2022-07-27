import styled from 'styled-components';
import { css } from 'styled-components';
export const FollowBtn = styled.button`
  ${(props) =>
    props.size === 'small'
      ? css`
          &::after {
            font-size: 1.2rem;
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
          padding: 0.7rem 1.2rem;
        `
      : css`
          &::after {
            font-size: 1.4rem;
            ${(props) =>
              props.isFollow
                ? css`
                    content: '언팔로우';
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
                  border: 1px solid ${props.theme.palette['darkGray']};
                `
              : css`
                  background-color: ${props.theme.palette['point']};
                  border: none;
                `}
          padding: 0.8rem 4.2rem;
        `}
  border-radius: 2.6rem;
`;

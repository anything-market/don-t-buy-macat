import styled from 'styled-components';
import basicProfile from '../../../assets/basic-profile.svg';

export const CommentReplyWrapper = styled.section`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  min-width: 3.9rem;
  border-top: 0.5px solid ${(props) => props.theme.palette['border']};
  padding: 1.2rem 1.6rem;
`;

export const CommentReplyContainer = styled.form`
  display: flex;
  width: 100%;
`;

export const ProfileImg = styled.img.attrs({
  src: basicProfile,
  alt: '프로필 이미지',
})`
  width: 3.6rem;
  margin-right: 1.8rem;
`;

export const CommentInput = styled.input`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 400;
  border: none;
`;

export const CommentSubmitButton = styled.button`
  width: 7rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${(props) => props.theme.palette['point']};
  &:disabled {
    color: ${(props) => props.theme.palette['border']};
  }
`;

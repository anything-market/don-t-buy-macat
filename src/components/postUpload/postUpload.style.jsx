import styled from 'styled-components';
import uploadIcon from '../../assets/upload-file.svg';
import basicProfile from '../../assets/basic-profile.svg';

export const PostUploadWrapper = styled.form`
  width: 100%;
`;

export const PostUploadFieldSet = styled.fieldset`
  margin: 2rem 1.6rem;
  display: flex;
  flex-direction: row;
`;

export const ProfileImage = styled.img.attrs({
  src: basicProfile,
  alt: '프로필 이미지',
})`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  margin-right: 1.2rem;
`;

export const PostForm = styled.article`
  width: 100%;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  textarea {
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

export const PostFormContainer = styled.div`
  width: 100%;
  padding-top: 1.2rem;
`;

export const PreviewImageList = styled.ul`
  display: flex;
  width: 100%;
  gap: 1.2rem;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const PreviewImageItem = styled.li`
  position: relative;
  border-radius: 10px;
  min-width: 30.4rem;
  width: 30.4rem;
  height: 22.8rem;
  overflow: hidden;
  border: 0.5px solid ${(props) => props.theme.palette['border']};
  margin-right: 0.5rem;
`;

export const UploadImgIcon = styled.label`
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;
  width: 5rem;
  height: 5rem;
  background-image: url(${uploadIcon});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  z-index: 100;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

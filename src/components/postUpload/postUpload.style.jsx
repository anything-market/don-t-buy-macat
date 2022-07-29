import styled from 'styled-components';
import uploadIcon from '../../assets/upload-file.svg';
import basicProfile from '../../assets/basic-profile.svg';
import ImageDelete from '../../assets/x.svg';

export const PostUploadWrapper = styled.form`
  width: 100%;
`;

export const PostUploadFieldSet = styled.fieldset`
  margin: 2rem 1.6rem;
  display: flex;
  flex-direction: row;
`;

export const PostUploadLegend = styled.legend``;

export const PostUploadTextarea = styled.textarea`
  margin-top: 1.2rem;
`;

export const PostUploadLegendTxt = styled.h4``;

export const ProfileImageBox = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  margin-right: 1.2rem;
`;

export const ProfileImage = styled.img.attrs((props) => ({
  src: props.authorImg || basicProfile,
  alt: '프로필 이미지',
}))`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  margin-right: 1.2rem;
  object-fit: cover;
`;

export const PostForm = styled.article`
  width: 100%;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  textarea {
    width: 100%;
  }
`;

export const PostFormContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 1.2rem;
`;

export const UploadImg = styled.h4``;

export const UploadInput = styled.input``;

export const ImgUploadBtn = styled.img.attrs({
  src: uploadIcon,
  alt: '이미지 업로드',
})`
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 1.2rem;
  cursor: pointer;
`;

export const Item = styled.div`
  position: relative;
  display: inline-block;
`;

export const PreviewImage = styled.img`
  position: relative;
  margin: 10px 0 0 15px;
  width: 200px;
  height: auto;
  border-radius: 10px;
`;

export const ImageDeleteBtn = styled.button`
  position: absolute;
  top: 1.8rem;
  right: 0.6rem;
  width: 2.2rem;
  height: 2.2rem;
  background: url(${ImageDelete}) no-repeat center / contain;
`;

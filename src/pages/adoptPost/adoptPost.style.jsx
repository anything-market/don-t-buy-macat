import styled from 'styled-components';
import ImgButtonIcon from '../../assets/img-button.svg';

export const Form = styled.div`
  width: 34.4rem;
  margin: 3rem auto 0;
`;

export const ImgPreviewContainer = styled.div`
  width: 34.4rem;
  height: 20.4rem;
  position: relative;
  background-color: ${(props) => props.theme.palette['background']};
  border-radius: 1rem;
`;

export const PreviewImg = styled.img`
  width: 34.4rem;
  height: 20.4rem;
  border-radius: 1rem;
  object-fit: cover;
`;

export const ImgErrorMessage = styled.div`
  height: 2.4rem;
  & > em {
    font-size: 1.2rem;
    line-height: 2.4rem;
    color: #ff5a5a;
  }
`;

export const InputErrorMessage = styled.div`
  height: 1.6rem;
  & > em {
    font-size: 1rem;
    line-height: 1.6rem;
    color: #ff5a5a;
  }
`;

export const ImgButton = styled.img.attrs({
  src: ImgButtonIcon,
  alt: '이미지 업로드',
})`
  width: 3.4rem;
  height: 3.4rem;
  position: absolute;
  display: block;
  bottom: 1.2rem;
  right: 1.2rem;
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  color: ${(props) => props.theme.palette['mediumGray']};
`;

export const ImgLabel = styled(Label)`
  margin-bottom: 1.8rem;
`;

export const TxtLabel = styled(Label)`
  margin-bottom: 1rem;
`;

export const TxtInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.error ? 'red' : props.theme.palette['border'])};
  /* margin-bottom: 1.6rem; */
  padding-bottom: 0.9rem;
  &::placeholder {
    color: ${(props) => props.theme.palette['border']};
    font-size: 1.4rem;
  }
`;

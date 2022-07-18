import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 390px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 2.4rem;
    font-weight: 500;
    margin-top: 3.1rem;
    margin-bottom: 1.2rem;
  }

  & > p {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 3rem;
    font-weight: 400;
    color: ${(props) => props.theme.palette['darkGray']};
  }
`;

export const ImageBox = styled.div`
  position: relative;
  margin-bottom: 3rem;

  .defaultProfilePhoto {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 50%;
  }

  .fileUploadButton {
    position: absolute;
    width: 36px;
    height: 36px;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: 1.2rem;
    margin-bottom: 0.7rem;
    color: ${(props) => props.theme.palette['darkGray']};
  }

  & > input {
    width: 32.2rem;
    line-height: 2.5rem;
    border: none;
    outline: none;
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
    border-bottom: 0.1rem solid ${(props) => props.theme.palette['border']};

    :focus {
      border-bottom: 0.1rem solid ${(props) => props.theme.palette['point']};
    }

    ::placeholder {
      font-weight: 400;
      color: ${(props) => props.theme.palette['border']};
    }
  }
`;

export const Button = styled.div`
  margin-top: 1.6rem;
  background-color: ${(props) => props.theme.palette['disabled']};
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.3rem 0 1.4rem 0;
  text-align: center;
  border-radius: 44px;
  margin-bottom: 2.1rem;
  cursor: pointer;
`;

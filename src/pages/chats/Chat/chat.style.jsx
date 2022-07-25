import styled from 'styled-components';
import uploadIcon from '../../../assets/img-button.svg';
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
`;

export const MessageBox = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  margin-right: 1.2rem;
`;

export const UserMessage = styled.p`
  font-size: 1.4rem;
  padding: 1.2rem 2.3rem 1.2rem 1.2rem;
  background-color: ${(props) => props.theme.palette['primary']};
  border-radius: 0 1rem 1rem 1rem;
`;

export const UserMessageTime = styled.span`
  margin-left: 0.6rem;
  align-self: end;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1.2rem 1.6rem;
  border-top: 1px solid ${(props) => props.theme.palette['border']};
`;

export const MessageInput = styled.input`
  width: 80%;
  border: none;
  font-size: 1.4rem;
  padding: 0 1rem;
`;

export const FileInput = styled.img.attrs({
  src: uploadIcon,
})`
  width: 3.6rem;
  cursor: pointer;
`;

export const SendBtn = styled.button`
  width: 3.6rem;
  color: ${(props) =>
    props.disabled
      ? props.theme.palette['border']
      : props.theme.palette['point']};
  &:disabled {
    cursor: default;
  }
`;

export const ChatMain = styled.div`
  padding: 0 1.6rem;
`;

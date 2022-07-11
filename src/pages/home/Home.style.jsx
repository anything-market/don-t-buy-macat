import styled from 'styled-components';

export const PostWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px 0;
  height: calc(100% - 108px);
  overflow-y: scroll;
`;

export const FeedEmptyWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 10px);
  flex-direction: column;
  text-align: center;
  background-color: ${(props) => props.theme.palette['primary']};
`;

export const FeedEmptyTxt = styled.p`
  margin-top: 25px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.palette['black']};
  font-size: 1.4rem;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.palette['white']};
  background-color: ${(props) => props.theme.palette['point']};
  font-size: 1.4rem;
  border-radius: 44px;
  width: 120px;
  height: 44px;
`;

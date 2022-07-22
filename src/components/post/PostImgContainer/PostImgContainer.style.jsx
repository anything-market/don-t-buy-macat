import styled from 'styled-components';

export const ImgList = styled.ul`
  display: flex;
  transition: all 0.4s;
`;

export const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  max-height: 228px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ImgItem = styled.li`
  min-width: 304px;
  width: 100%;
  max-height: 228px;
  min-height: 228px;
  border: 0.5px solid ${(props) => props.theme.palette['border']};
  border-radius: 10px;
  overflow: hidden;
`;

export const PostImg = styled.img`
  border-radius: 10px;
  margin-bottom: 16px;
`;

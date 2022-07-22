import styled from 'styled-components';

export const ImgList = styled.ul`
  display: flex;
  /* box-sizing: border-box; */
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
  height: 100%;
  object-fit: cover;
`;

export const ImgSliderBtnWrap = styled.div`
  position: absolute;
  display: flex;
  gap: 6px;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
`;

export const ImgSliderBtn = styled.button`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
`;

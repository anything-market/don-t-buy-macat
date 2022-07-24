import styled from 'styled-components';

export const ImgList = styled.ul`
  display: flex;
  /* box-sizing: border-box; */
  transition: all 0.4s;
`;

export const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 1.6rem;
  max-height: 22.8rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export const ImgItem = styled.li`
  min-width: 30.4rem;
  width: 100%;
  max-height: 22.8rem;
  min-height: 22.8rem;
  border: 0.5px solid ${(props) => props.theme.palette['border']};
  border-radius: 10px;
  overflow: hidden;
`;

export const PostImg = styled.img`
  border-radius: 10px;
  margin-bottom: 1.6rem;
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
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: ${(props) => (props.index === 0 ? '#05704A' : '#fff')};
`;

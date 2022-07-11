import styled from 'styled-components';

export const PostContent = styled.section`
  padding-left: 54px;
`;

export const PostTxt = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
  word-break: break-all;
`;

export const ImgList = styled.ul`
  display: flex;
  transition: all 0.4s;
`;

export const PostImg = styled.img`
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const PostIconsWrap = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 16px;
  align-items: center;
`;

export const PostIconBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const PostCreateDate = styled.small`
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 400;
  color: ${(props) => props.theme.palette['mediumGray']};
`;

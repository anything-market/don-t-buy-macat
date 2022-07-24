import styled from 'styled-components';

export const PostContent = styled.section`
  padding-left: 5.4rem;
`;

export const PostTxt = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  margin-bottom: 16px;
  word-break: break-all;
`;

export const PostIconsWrap = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin-bottom: 1.6rem;
  align-items: center;
`;

export const PostIconBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: 1.6rem;
`;

export const PostCreateDate = styled.small`
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 400;
  color: ${(props) => props.theme.palette['mediumGray']};
`;

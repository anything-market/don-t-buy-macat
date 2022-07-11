import styled from 'styled-components';

export const AuthorWrap = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileImgWrap = styled.img`
  width: 42px;
  height: 42px;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  margin-right: 12px;
`;

export const AuthorName = styled.article`
  font-weight: 500;
  font-size: 14px;
  line-height: 16.71px;
  margin-bottom: 2px;
`;

export const AuthorId = styled.article`
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.palette['mediumGray']};
`;

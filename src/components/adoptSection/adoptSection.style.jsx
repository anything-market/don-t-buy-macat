import styled from 'styled-components';

//지울거
export const Background = styled.body`
  background-color: #f2f2f2;
  height: 100vh;
  padding: 3rem;
`;

export const AdoptSection = styled.section`
  padding: 2rem 1.6rem;
  background-color: ${(props) => props.theme.palette['white']};
  border-radius: 2rem 2rem 0 0;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
`;

export const AdoptSectionWrap = styled.div`
  max-width: 39rem;
  margin: 0 auto;
`;

export const SectionHeading = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1.6rem;
`;

export const AdoptList = styled.ul`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
`;

export const AdoptListItem = styled.li`
  width: 14rem;
  cursor: pointer;
`;

export const CatImage = styled.img`
  width: 14rem;
  height: 9rem;
  border-radius: 0.8rem;
  object-fit: cover;
  margin-bottom: 0.7rem;
`;

export const Ellipsis = styled.strong`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CatName = styled(Ellipsis)`
  display: block;
  width: 100%;
  font-size: 1.4rem;
  padding: 0 2px;
  margin-bottom: 0.4rem;
`;

export const AdoptionFee = styled(Ellipsis)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.palette['point']};
  font-weight: bold;
  padding: 0 2px;
`;

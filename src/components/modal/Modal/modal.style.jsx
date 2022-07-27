import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  max-width: 39rem;
  border-radius: 1rem 1rem 0 0;
  background-color: ${(props) => props.theme.palette['white']};
`;

export const PanningBox = styled.div`
  padding: 1.6rem 0 1.6rem;
`;

export const PanningBar = styled.div`
  width: 5rem;
  height: 0.4rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.palette['border']};
`;
export const ModalList = styled.ul`
  /* & > li {
    padding: 1em 0 1em 2em;
  } */
  & > li > button {
    display: block;
    text-align: left;
    width: 100%;
    padding: 1em 0 1em 2em;
    font-size: 1.4rem;
  }
`;

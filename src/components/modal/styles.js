import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: absolute;
  min-height: 100vh;
  z-index: 1;
  background-color: rgb(33 37 41 / 0.95);
  inset: 0;
  overflow: auto;
`;

export const ContentModal = styled.div`
  max-width: 100rem;
  width: 95%;
  margin: 5rem auto 5rem auto;
`;
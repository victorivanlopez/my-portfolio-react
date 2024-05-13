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
  position: relative;
  max-width: 100rem;
  width: 95%;
  margin: 1rem auto;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  @media (min-width: 768px) {
    padding: 4rem;
    margin: 5rem auto;
  }
`;

export const IconContainerModal = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  :hover {
    cursor: pointer;
  }
`;


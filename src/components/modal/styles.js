import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: absolute;
  min-height: 100vh;
  z-index: 1;
  background-color: rgb(33 37 41 / 0.95);
  inset: 0;
`;

export const ContentModal = styled.div`
  max-width: 100rem;
  width: 95%;
  margin: 10rem auto 5rem auto;
  @media (min-width: 768px) {
    margin: 15rem auto 0 auto;
  }
`;

export const ContentModalChildren = styled.div`
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
`;
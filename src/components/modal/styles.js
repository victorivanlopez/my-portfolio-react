import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: absolute;
  z-index: 1;
  background-color: rgb(33 37 41 / 0.95);
  inset: 0;
`;

export const ContentModal = styled.div`
  max-width: 100rem;
  width: 95%;
  margin: 10rem auto 0 auto;
  @media (min-width: 768px) {
    margin: 15rem auto 0 auto;
  }
`;

export const ContentModalChildren = styled.div`
  position: relative;
  z-index: 100;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
`;
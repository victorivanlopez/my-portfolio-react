import styled from 'styled-components';

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 4rem;
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const AboutInformation = styled.div`

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const AboutBiography = styled.div`

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    li {
      padding: 1rem 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
      &:last-of-type {
        border-bottom: 0;
      }
      span {
        font-weight: 700;
      }
    }
  }

`; 
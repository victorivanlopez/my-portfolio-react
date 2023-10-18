import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 4rem;
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    gap: 6rem;
  }
  h3 {
    margin-bottom: 3rem;
  }
`;

export const ContactMeans = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const ContactMean = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  .mean-icon {
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 1rem;
    transition: background-color .3s ease-out;
    svg {
      color: ${({ theme }) => theme.colors.grayDark};
      transition: color .3s ease-out;
    }
  }
  &:hover .mean-icon  {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  &:hover svg {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover a {
    background-size: 100% 0.2rem;
  }
`;

export const ContactMeanContent = styled.div`
  color: ${({ theme }) => theme.colors.grayDark};

  .mean-title {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  a {
    color: ${({ theme }) => theme.colors.grayDark};
    display: inline;
    background-image: linear-gradient(to right, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primary} 100%);
    background-size: 0px 0.2rem;
    background-position: 0px 95%;
    background-repeat: no-repeat;
    padding: 0.2rem 0;
    transition: background-size 0.4s;
  }
`;

export const MenuSocialContainer = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  svg {
    color: ${({ theme }) => theme.colors.grayDark};
    transition: color .3s;
    &:hover {
    color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
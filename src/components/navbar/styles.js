import styled from 'styled-components';

export const NavbarPrimary = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    text-align: center;
  a {
    color: ${({ theme }) => theme.colors.grayDark};
    text-transform: uppercase;
    font-size: 2rem;
    transition: color .3s;
    @media (min-width: 993px) {
      font-size: 1.8rem;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .active-link {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

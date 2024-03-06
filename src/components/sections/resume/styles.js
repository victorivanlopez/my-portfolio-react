import styled, { css } from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const TabsButtons = styled.button`
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 1rem;
  display: inline-block;
  padding: 1rem 1.5rem;
  margin: 0 0 1rem 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  transition: background-color .3s ease-out, color .3s ease-out;

  &.current {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ResumeContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    ${(props) => (props.$current === 'experience') && css`
      grid-template-columns: repeat(2, 1fr);
    `}
  }
`;

export const ResumeChild = styled.div`
  padding: 3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 2rem;
`;

export const ButtonContainer = styled.div`
  margin: 2rem 0 0 0;
  @media (min-width: 768px) {
    display: flex;
    justify-content: end;
  }
`;

export const ButtonPrimary = styled.a`
    width: 100%;
    padding: 1rem 2rem;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
    border-radius: 1rem;
    margin: 1rem 0;
    display: inline-block;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: linear-gradient(to left, ${({ theme }) => theme.colors.primary} 50%, transparent 50%) no-repeat left / 200%;
    transition: background-position .3s ease, color .3s ease;
    @media (min-width: 768px) {
      width: auto;
    }
    &:hover {
      background-position: right;
      color: ${({ theme }) => theme.colors.white};
    }
`;
import styled, { css } from 'styled-components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const HeaderMain = styled.header`
@media (min-width: 993px) {
  position: fixed;
  z-index: 1;
  background-color: var(--c-white);
  width: 20rem;
  inset: 0 auto 0 0;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
`;

export const Navegation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  position: relative;
  @media (min-width: 993px) {
    padding: 0;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100%;
  }
`;

export const InfoContainer = styled.div`
  .photo {
    display: none;
    @media (min-width: 993px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  img {
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
  }
  p {
    font-size: 2.2rem;
    font-weight: 700;
    text-align: center;
    color: #575655;
    text-transform: uppercase;
    @media (min-width: 993px) {
      margin-top: 1rem;
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
`;

export const HamburguerButton = styled.button`
  display: block;
  margin-left: auto;
  background-color: var(--c-white);
  border: none;
  @media (min-width: 993px) {
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  display: none;
  @media (min-width: 993px) {
    display: block;
  }
`;

export const MenuContainerMovil = styled(MenuContainer)`
  display: block;
  transition: opacity .4s ease-in-out, padding .4s ease-in-out, max-height .4s ease-in-out;
  background-color: var(--c-white);
  opacity: 0;
  max-height: 0;
  padding: 0;
  ${props => props.open && css`
    opacity: 1;
    max-height: 40rem;
    padding: 2rem 0;
  `}
  @media (min-width: 768px) {
    display: none;
  }
`

export const MenuPrimary = styled.ul`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      text-align: center;
  a {
    color: var(--gris-oscuro);
    text-transform: uppercase;
    font-size: 2rem;
    transition: color .3s;
    @media (min-width: 993px) {
      font-size: 1.8rem;
    }
    &:hover {
      color: var(--c-primary);
    }
  }
`;

export const MenuSocialContainer = styled.nav`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (min-width: 993px) {
    display: flex;  
  }
`;

export const MenuSocialContainerMovil = styled(MenuSocialContainer)`
  display: flex;
  padding-top: 2rem;
  margin-top: 1rem;
  border-top: 1px solid var(--c-gray-light);
`

export const LinkedinIcon = styled(AiFillLinkedin)`
  color: var(--c-gray-dark);
  transition: color .3s;
  &:hover {
    color: var(--c-primary);
  }
`;

export const GithubIcon = styled(AiFillGithub)`
  color: var(--c-gray-dark);
  transition: color .3s;
  &:hover {
    color: var(--c-primary);
  }
`;
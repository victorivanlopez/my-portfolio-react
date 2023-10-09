import styled from 'styled-components';

export const Hero = styled.section`
  min-height: 65rem;
  background-image: linear-gradient( rgb(0 0 0 / .75), rgb(0 0 0 / .75) ), url(/assets/hero.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    min-height: 100vh;
    justify-content: center;
  }
  svg {
    display: none;
    @media (min-width: 768px) {
      display: block;
      color: var(--c-primary);
      font-size: 2.5rem;
      position: absolute;
      inset: auto 50% 0 50%;
      padding-bottom: 1.5rem;
    }
  }
`;

export const HeroContent = styled.div`
  padding: 3rem;
  color: var(--c-white);
  @media (min-width: 768px) {
    max-width: 60rem;
    padding: 0;
  }
  h1 {
    margin: 1rem 0;
    font-size: 3rem;
    @media (min-width: 768px) {
      font-size: 6rem;
    }
    span {
      color: var(--c-primary);
    }
  }
  p {
    font-size: 1.8rem;
  }
`;

export const ButtonPrimary = styled.a`
  padding: 1rem 2rem;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 1rem;
  margin: 1rem 0;
  display: inline-block;
  border: 2px solid var(--c-primary);
  color: var(--c-primary);
  background: linear-gradient(to left, var(--c-primary) 50%, transparent 50%) no-repeat left / 200%;
  transition: background-position .3s ease, color .3s ease;
  &:hover {
    background-position: right;
    color: var(--c-primary);
  }
`;

export const ButtonPrimaryHero = styled(ButtonPrimary)`
  margin: 2rem 0;
  &:hover {
      color: var(--c-white);
    }
`;
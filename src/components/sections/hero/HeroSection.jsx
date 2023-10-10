import { ButtonPrimaryHero, Hero, HeroContent } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const HeroSection = () => {
  return (
    <Hero>
      <HeroContent>
        <p>Hola. Mi nombre es Víctor Iván López</p>
        <h1>Desarrollador Web <span>Front-end</span></h1>

        <ButtonPrimaryHero href="#">Ver Proyectos</ButtonPrimaryHero>
      </HeroContent>

      <a href='#'>
        <FontAwesomeIcon icon={faArrowDown} bounce />
      </a>
    </Hero>
  )
}
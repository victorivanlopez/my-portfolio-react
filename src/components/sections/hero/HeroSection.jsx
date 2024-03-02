import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { ButtonPrimary, Hero, HeroContent } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const HeroSection = () => {

  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ['Front-end', 'React', 'WordPress'],
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 3000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Hero id='home' className='observer'>
      <HeroContent>
        <p>Hola. Mi nombre es Víctor Iván López</p>
        <h1>Desarrollador Web | <span ref={element}></span></h1>

        <ButtonPrimary href="#projects">Ver Proyectos</ButtonPrimary>
      </HeroContent>

      <a href='#about'>
        <FontAwesomeIcon icon={faArrowDown} bounce />
      </a>
    </Hero>
  )
}
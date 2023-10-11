import { useEffect, useState } from 'react';
import {
  HeaderMain,
  Navegation,
  MenuContainer,
  MenuPrimary,
  MenuSocialContainer,
  HamburguerButton,
  InfoContainer,
  MenuContainerMovil,
  MenuSocialContainerMovil
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navLinks = ['Inicio', 'Sobre Mi', 'Experiencia y Habilidades', 'Proyectos', 'Contacto'];
const navLinksId = ['home', 'about', 'resume', 'projects', 'contact'];

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('.observer');

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
          console.log(entry.target.id)
        };
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px',
      threshold: 0.5
    });

    sections.forEach((section) => observer.observe(section));
  }, [])


  return (
    <>
      <HeaderMain>
        <Navegation>
          <InfoContainer>
            <div className='photo'>
              <img src="/assets/me.png" alt="Mi fotografia" />
            </div>
            <p>Víctor Iván López</p>
          </InfoContainer>

          <HamburguerButton
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faBars} size='2xl' />
          </HamburguerButton>

          <MenuContainer>
            <MenuPrimary>
              {
                navLinks.map((link, i) => (
                  <li key={link}>
                    <a 
                      className={navLinksId[i] === activeLink ? 'active-link' : ''} 
                      href={`#${navLinksId[i]}`}
                    >{link}</a>
                  </li>
                ))
              }
            </MenuPrimary>
          </MenuContainer>

          <MenuSocialContainer>
            <a href="https://mx.linkedin.com/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size='xl' />
            </a>
            <a href="https://github.com/victorivanlopez" target="_blank">
              <FontAwesomeIcon icon={faGithub} size='xl' />
            </a>
          </MenuSocialContainer>
        </Navegation>
      </HeaderMain>

      <MenuContainerMovil open={isOpen}>
        <MenuPrimary>
          {
            navLinks.map(link => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))
          }
        </MenuPrimary>

        <MenuSocialContainerMovil>
          <a href="https://mx.linkedin.com/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size='xl' />
          </a>
          <a href="https://github.com/victorivanlopez" target="_blank">
            <FontAwesomeIcon icon={faGithub} size='xl' />
          </a>
        </MenuSocialContainerMovil>
      </MenuContainerMovil>
    </>
  )
}
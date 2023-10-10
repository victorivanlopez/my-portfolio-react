import { useState } from 'react';
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

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

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
                navLinks.map(link => (
                  <li key={link}>
                    <a href="#">{link}</a>
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
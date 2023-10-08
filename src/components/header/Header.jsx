import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HeaderMain,
  Navegation,
  MenuContainer,
  MenuPrimary,
  MenuSocialContainer,
  LinkedinIcon,
  GithubIcon,
  HamburguerButton,
  InfoContainer,
  MenuContainerMovil,
  MenuSocialContainerMovil
} from './styles';
import { RxHamburgerMenu } from 'react-icons/rx';

const navLinks = ['Inicio', 'Sobre Mi', 'Experiencia y Habilidades', 'Portafolio', 'Contacto'];

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
            <RxHamburgerMenu size={35} cursor='pointer' />
          </HamburguerButton>

          <MenuContainer>
            <MenuPrimary>
              {
                navLinks.map(link => (
                  <li key={link}>
                    <NavLink
                      to="/"
                    >
                      {link}
                    </NavLink>
                  </li>
                ))
              }
            </MenuPrimary>
          </MenuContainer>

          <MenuSocialContainer>
            <a href="https://mx.linkedin.com/" target="_blank">
              <LinkedinIcon size={28} />
            </a>
            <a href="https://github.com/victorivanlopez" target="_blank">
              <GithubIcon size={28} />
            </a>
          </MenuSocialContainer>
        </Navegation>
      </HeaderMain>

      <MenuContainerMovil open={isOpen}>
        <MenuPrimary>
          {
            navLinks.map(link => (
              <li key={link}>
                <NavLink
                  to="/"
                >
                  {link}
                </NavLink>
              </li>
            ))
          }
        </MenuPrimary>

        <MenuSocialContainerMovil>
          <a href="https://mx.linkedin.com/" target="_blank">
            <LinkedinIcon size={28} />
          </a>
          <a href="https://github.com/victorivanlopez" target="_blank">
            <GithubIcon size={28} />
          </a>
        </MenuSocialContainerMovil>
      </MenuContainerMovil>
    </>
  )
}
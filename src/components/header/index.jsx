import { useEffect, useState } from 'react';
import {
  HeaderMain,
  Navegation,
  MenuContainer,
  MenuSocialContainer,
  HamburguerButton,
  InfoContainer,
  MenuContainerMovil,
  MenuSocialContainerMovil
} from './styles';
import { Navbar } from '../navbar';
import { SocialIcons } from '../../ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('.observer');

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        };
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px',
      threshold: 0.75
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    }
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
            <span>Desarrollador Web</span>
          </InfoContainer>

          <HamburguerButton
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faBars} size='2xl' />
          </HamburguerButton>

          <MenuContainer>
            <Navbar activeLink={activeLink} />
          </MenuContainer>

          <MenuSocialContainer>
            <SocialIcons />
          </MenuSocialContainer>
        </Navegation>
      </HeaderMain>

      <MenuContainerMovil open={isOpen}>
        <Navbar activeLink={activeLink} />

        <MenuSocialContainerMovil>
          <SocialIcons />
        </MenuSocialContainerMovil>
      </MenuContainerMovil>
    </>
  )
}
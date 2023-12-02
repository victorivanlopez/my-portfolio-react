import { NavbarPrimary } from './styles';

export const Navbar = ({ activeLink }) => {

  const navLinksId = ['home', 'about', 'resume', 'projects', 'contact'];
  const navLinks = ['Inicio', 'Sobre Mi', 'Experiencia y Habilidades', 'Proyectos', 'Contacto'];

  return (
    <NavbarPrimary>
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
    </NavbarPrimary>
  )
}
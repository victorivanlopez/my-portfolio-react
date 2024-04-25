import { AboutBiography, AboutContent, AboutInformation } from './styles';

export const AboutSection = () => {
  return (
    <section id='about' className="container section observer">
      <h2>Sobre mi</h2>
      <p className='section-description'>Visión detallada de quién soy y mi trayectoria profesional.</p>

      <AboutContent>
        <AboutInformation>
          <p>Ingeniero en Telemática graduado de la Universidad de Colima, con sólida experiencia en el desarrollo de aplicaciones web centrándome principalmente en el ámbito del <span>Front-end y WordPress.</span></p>
          <p>Mi experiencia abarca el dominio de tecnologías como <span>React y TypeScript</span>, así como una habilidad probada en la implementación de <span>soluciones utilizando WordPress para proyectos con clientes.</span></p>
          <p>Destaco por mi <span>capacidad para establecer una buena comunicación con mis clientes</span>, lo que me ha permitido comprender a fondo sus necesidades para sus proyectos.</p>
          <p>Motivado por el <span>aprendizaje continuo y mejora constante</span>, estoy ansioso por aportar mi experiencia y pasión por la tecnología para seguir creciendo profesionalmente.</p>
        </AboutInformation>

        <AboutBiography>
          <h3>Información Adicional</h3>
          <ul>
            <li>
              <p><span>Nombre:</span> Víctor Iván López González</p>
            </li>
            <li>
              <p><span>Puesto:</span> Desarrollador Web</p>
            </li>
            <li>
              <p><span>Edad:</span> 29 Años</p>
            </li>
            <li>
              <p><span>País:</span> México</p>
            </li>
          </ul>
        </AboutBiography>
      </AboutContent>
    </section>
  )
}
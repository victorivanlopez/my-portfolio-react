import { AboutBiography, AboutContent, AboutInformation } from './styles';

export const AboutSection = () => {
  return (
    <section id='about' className="container section observer">
      <h2>Sobre mi</h2>
      <p className='section-description'>Visión detallada de quién soy y mi trayectoria profesional.</p>

      <AboutContent>
        <AboutInformation>
          <p>Ingeniero en Telemática graduado de la Universidad de Colima, con sólida experiencia en el desarrollo de aplicaciones web centrándome en el ámbito del <span>Front-End.</span></p>
          <p>Mi experiencia abarca el dominio de tecnologías del ecosistema de JavaScript principalmente con la librería de <span>React</span>, así como una habilidad probada en la implementación de soluciones utilizando <span>WordPress para proyectos con clientes.</span></p>
          <p>Destaco por mi capacidad para establecer una <span>buena comunicación con mis clientes</span>, lo que me ha permitido comprender a fondo las necesidades para sus proyectos.</p>
          <p>Motivado por el <span>aprendizaje continuo y mejora constante</span>, estoy ansioso por aportar mi experiencia y pasión por la tecnología en futuros proyectos.</p>
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
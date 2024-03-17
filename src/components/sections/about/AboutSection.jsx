import { AboutBiography, AboutContent, AboutInformation } from './styles';

export const AboutSection = () => {
  return (
    <section id='about' className="container section observer">
      <h2>Sobre mi</h2>
      <p className='section-description'>Visión detallada de quién soy y mi trayectoria profesional.</p>

      <AboutContent>
        <AboutInformation>
          <h3>Hola. Soy <span>Víctor Iván López</span></h3>
          <p>Destaco en el trato con clientes, desarrollando sitios web a medida utilizando principalmente WordPress como CMS para facilitar la gestión del contenido, lo que me ha permitido comprender a fondo las necesidades del cliente y ofrecer soluciones efectivas y creativas para sus negocios.</p>
          <p>También cuento con sólida experiencia en el desarrollo de aplicaciones web utilizando tecnologías modernas del lado del Front-end como React y Typescript.</p>
          <p>Motivado por el aprendizaje continuo y la mejora constante, estoy ansioso por contribuir al desarrollo de proyectos desafiantes y significativos.</p>
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
import { AboutBiography, AboutContent, AboutInformation } from './styles';

export const AboutSection = () => {
  return (
    <section id='about' className="container section observer">
      <h2>Sobre mi</h2>
      <p className='section-description'>Visión detallada de quién soy y mi trayectoria profesional.</p>

      <AboutContent>
        <AboutInformation>
          <h3>Hola. Soy <span>Víctor Iván López</span></h3>
          <p>Me gradué de la carrera de Ingeniería en Telemática en la Universidad de Colima en el año 2017. Al inicio de mi carrera laboral, me dediqué a temas relacionados con la tecnología, las redes y la comunicación de datos. Siempre he sentido una gran pasión por la programación web, y he fortalecido mis conocimientos de manera autodidacta en programación y diseño web.</p>
          <p>Actualmente, disfruto trabajar en el desarrollo de páginas web para emprendedores que buscan mejorar su negocio y ofrecer sus servicios o productos de manera más profesional a sus clientes.</p>
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
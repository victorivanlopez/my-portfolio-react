import { 
  ProjectContent, 
  ProjectFooter, 
  ProjectImage, 
  ProjectItem, 
  ProjectLinks, 
  ProjectTechnologies, 
  ProjectsList 
} from './styles';

export const ProjectsSection = () => {
  return (
    <main id='projects' className="section container observer">
      <h2>Proyectos</h2>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <ProjectsList>
        <ProjectItem>
          <ProjectImage>
            <img className='img-project' src="/assets/projects/project2.png" alt="Imagen Proyecto" />
          </ProjectImage>

          <ProjectContent>
            <h3>GuitarLA</h3>
            <ProjectLinks>
              <a href="#">Ver demo</a>
              <a href="#">Ver Repositorio</a>
            </ProjectLinks>
          </ProjectContent>

          <ProjectFooter>
            <ProjectTechnologies>
              <li>
                <img src="/assets/projects/icon-nodejs.webp" alt="Icono Tecnología" />
              </li>
              <li>
                <img src="/assets/projects/icon-express.webp" alt="Icono Tecnología" />
              </li>
              <li>
                <img src="/assets/projects/icon-react.webp" alt="Icono Tecnología" />
              </li>
              <li>
                <img src="/assets/projects/icon-mongodb.webp" alt="Icono Tecnología" />
              </li>
            </ProjectTechnologies>
          </ProjectFooter>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage>
            <img className='img-project' src="/assets/projects/project3.png" alt="Imagen Proyecto" />
          </ProjectImage>

          <ProjectContent>
            <h3>Podcast App</h3>
            <ProjectLinks>
              <a href="#">Ver demo</a>
              <a href="#">Ver Repositorio</a>
            </ProjectLinks>
          </ProjectContent>

          <ProjectFooter>
            <ProjectTechnologies>
              <li>
                <img src="/assets/projects/icon-sass.webp" alt="Icono Tecnología" />
              </li>
              <li>
                <img src="/assets/projects/icon-js.webp" alt="Icono Tecnología" />
              </li>
              <li>
                <img src="/assets/projects/icon-gulp.webp" alt="Icono Tecnología" />
              </li>
              <li>
                <img src="/assets/projects/icon-nodejs.webp" alt="Icono Tecnología" />
              </li>
            </ProjectTechnologies>
          </ProjectFooter>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage>
            <img className='img-project' src="/assets/projects/project1.png" alt="Imagen Proyecto" />
          </ProjectImage>

          <ProjectContent>
            <h3>Air Viaje</h3>
            <ProjectLinks>
              <a href="#">Ver demo</a>
              <a href="#">Ver Repositorio</a>
            </ProjectLinks>
          </ProjectContent>

          <ProjectFooter>
            <ProjectTechnologies>
              <li>
                <img src="/assets/projects/icon-nodejs.webp" alt="Icono Tecnología" />
              </li>
              <li>
                <img src="/assets/projects/icon-express.webp" alt="Icono Tecnología" />
              </li>
              <li>
                <img src="/assets/projects/icon-react.webp" alt="Icono Tecnología" />
              </li>
              <li>
                <img src="/assets/projects/icon-mongodb.webp" alt="Icono Tecnología" />
              </li>
            </ProjectTechnologies>
          </ProjectFooter>
        </ProjectItem>
      </ProjectsList>
    </main>
  )
}
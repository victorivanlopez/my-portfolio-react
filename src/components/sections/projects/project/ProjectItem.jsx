import {
  ProjectCard,
  ProjectContent,
  ProjectFooter,
  ProjectImage,
  ProjectLinks,
  ProjectTechnologies
} from './styles';


export const ProjectItem = () => {
  return (
    <ProjectCard>
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
    </ProjectCard>
  )
}

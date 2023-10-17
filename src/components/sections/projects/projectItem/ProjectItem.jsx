import {
  ProjectCard,
  ProjectContent,
  ProjectFooter,
  ProjectImage,
  ProjectLinks,
  ProjectTechnologies
} from './styles';


export const ProjectItem = ({ project }) => {

  const { title, repoURL, demoURL, cover, icons } = project;

  const imageURL = cover.data.attributes.formats.small.url;

  return (
    <ProjectCard>
      <ProjectImage>
        <img className='img-project' src={imageURL} alt="Imagen Proyecto" />
      </ProjectImage>

      <ProjectContent>
        <h3>{title}</h3>
        <ProjectLinks>
          <a href={demoURL} target='_blank'>Ver demo</a>
          <a href={repoURL} target='_blank'>Ver Repositorio</a>
        </ProjectLinks>
      </ProjectContent>

      <ProjectFooter>
        <ProjectTechnologies>
          {
            icons.data.map(icon => (
              <li key={icon.id}>
                <img src={icon.attributes.url} alt={icon.attributes.name} />
              </li>
            ))
          }
        </ProjectTechnologies>
      </ProjectFooter>
    </ProjectCard>
  )
}

import { usePortfolioContext } from '../../../../hooks';
import {
  ProjectCard,
  ProjectContent,
  ProjectDescription,
  ProjectFooter,
  ProjectImage,
  ProjectLinks,
  ProjectTechnologies
} from './styles';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


export const ProjectItem = ({ project }) => {

  const { showModal } = usePortfolioContext();

  const { title, repoURL, demoURL, cover, icons, description } = project;

  const imageURL = cover.data.attributes.formats.small.url;

  return (
    <ProjectCard
      onClick={showModal}
    >
      <ProjectImage>
        <img className='img-project' src={imageURL} alt="Imagen Proyecto" />
      </ProjectImage>

      <ProjectContent>
        <h3>{title}</h3>
        {/* <ProjectDescription>
          <BlocksRenderer content={description} />
        </ProjectDescription> */}
        <ProjectLinks>
          {/* <a href={demoURL} target='_blank'>Ver sitio</a> */}
          <a href={demoURL} target='_blank'>Ver detalles</a>
          {/* {
            (repoURL) && <a href={repoURL} target='_blank'>Ver repositorio</a>
          } */}
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

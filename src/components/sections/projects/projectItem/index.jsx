import { usePortfolioContext } from '../../../../hooks';
import {
  ProjectButton,
  ProjectCard,
  ProjectContent,
  ProjectFooter,
  ProjectImage,
  ProjectTechnologies
} from './styles';


export const ProjectItem = ({ project }) => {

  const { showModal } = usePortfolioContext();

  const { title, cover, technologies } = project;

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
        <ProjectButton>
          <button
            type='button'
            onClick={showModal}
          >
            Más detalles
          </button>

        </ProjectButton>
      </ProjectContent>

      <ProjectFooter>
        <ProjectTechnologies>
          {
            technologies.data.map(technologie => (
              <li key={technologie.id}>
                <img src={technologie.attributes.url} alt={technologie.attributes.name} />
              </li>
            ))
          }
        </ProjectTechnologies>
      </ProjectFooter>
    </ProjectCard>
  )
}

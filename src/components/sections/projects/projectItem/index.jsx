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

  const { showModal, getProject } = usePortfolioContext();

  const { title, cover, technologies } = project.attributes;

  const imageURL = cover.data.attributes.formats.small.url;

  const onClickProject = async () => {
    showModal();
    await getProject(project.id);
  }

  return (
    <ProjectCard
      onClick={onClickProject}
    >
      <ProjectImage>
        <img className='img-project' src={imageURL} alt="Imagen Proyecto" />
      </ProjectImage>

      <ProjectContent>
        <h3>{title}</h3>
        <ProjectButton>
          <button
            type='button'
            onClick={onClickProject}
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

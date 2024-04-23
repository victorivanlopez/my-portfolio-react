import { TechnologiesContainer } from './styles';

export const ProjectTechnologies = ({ technologies }) => {
  return (
    <TechnologiesContainer>
      {
        technologies.data.map(technologie => (
          <li key={technologie.id}>
            <img src={technologie.attributes.url} alt={technologie.attributes.name} />
          </li>
        ))
      }
    </TechnologiesContainer>
  )
}
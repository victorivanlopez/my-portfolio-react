import { ResumeSkill } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faReact } from '@fortawesome/free-brands-svg-icons';

export const SkillsList = () => {
  return (
    <>
      <ResumeSkill>
        <FontAwesomeIcon icon={faFigma} size="2xl" />
        <h3>Maquetación y Diseño</h3>
      </ResumeSkill>
      <ResumeSkill>
        <FontAwesomeIcon icon={faReact} />
        <h3>Desarrollo con React</h3>
      </ResumeSkill>
    </>
  )
}

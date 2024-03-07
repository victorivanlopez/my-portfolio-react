import { ResumeSkill } from './styles';

export const SkillItem = ({ skill }) => {

  const iconURL = skill.icon.data.attributes.url;
  const iconName = skill.icon.data.attributes.url;

  return (
    <ResumeSkill className='scale-up-top'>
      <img src={iconURL} alt={iconName} />
      <h3>{skill.name}</h3>
    </ResumeSkill>
  )
}
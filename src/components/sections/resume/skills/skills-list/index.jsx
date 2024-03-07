import { SkillItem } from '../skill-item';

export const SkillsList = ({ skills }) => {
  return (
    <>
      {
        (skills.length < 1)
          ? <p>Aún no hay habilidades registradas.</p>
          : skills?.map(skill => (
            <SkillItem key={skill.id} skill={skill.attributes} />
          ))
      }
    </>
  )
}

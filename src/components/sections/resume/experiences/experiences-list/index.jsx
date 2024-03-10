import { ExperienceItem } from '../experience-item';

export const ExperiencesList = ({ experiences }) => {
  return (
    <>
      {
        (experiences.length < 1)
          ? <p>Aún no hay experiencias registradas.</p>
          : experiences?.map(experience => (
            <ExperienceItem key={experience.id} experience={experience.attributes} />
          ))
      }
    </>
  )
}
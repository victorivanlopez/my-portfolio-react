import { useFetch } from '../../../../hooks';
import { Alert, Spinner } from '../../../../ui/components';
import { SkillsList } from './skills-list';

export const Skills = () => {
  const {
    data: skills,
    isLoading,
    hasError
  } = useFetch(`${import.meta.env.VITE_API_URL}/skills?populate=*`);

  return (
    <>
      {(isLoading) && <Spinner />}

      {(skills) && <SkillsList skills={skills} />}
      {(hasError) && <Alert message={hasError} type='error' />}
    </>
  )
}
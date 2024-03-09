import { Alert, Spinner } from '../../../../ui/components';
import { SkillsList } from './skills-list';
import { usePortfolioContext } from '../../../../hooks';

export const Skills = () => {

  const { skills, isLoading, hasError } = usePortfolioContext();

  return (
    <>
      {(isLoading) && <Spinner />}

      {(skills) && <SkillsList skills={skills} />}
      {(hasError) && <Alert message={hasError} type='error' />}
    </>
  )
}
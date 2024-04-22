import { Alert } from '../../../../ui/components';
import { SkillsList } from './skills-list';
import { usePortfolioContext } from '../../../../hooks';
import { Spinner } from '../../../ui';

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
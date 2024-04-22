import { usePortfolioContext } from '../../../../hooks';
import { Alert } from '../../../../ui/components';
import { Spinner } from '../../../ui';
import { ExperiencesList } from './experiences-list';

export const Experiences = () => {

  const { experiences, isLoading, hasError } = usePortfolioContext();

  return (
    <>
      {(isLoading) && <Spinner />}

      {(experiences) && <ExperiencesList experiences={experiences} />}
      {(hasError) && <Alert message={hasError} type='error' />}
    </>
  )
}
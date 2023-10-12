import styled from 'styled-components';
import { ResumeChild } from '../styles';

export const ResumeExperience = styled(ResumeChild)`
  .dates {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 1.4rem;
  }

  .company {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
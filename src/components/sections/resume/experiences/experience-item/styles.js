import styled from 'styled-components';
import { ResumeChild } from '../../styles';

export const ResumeExperience = styled(ResumeChild)`
  .company {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
  h3 {
    margin-bottom: 1rem;
  }
`;

export const ResumeExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  p {
    font-size: 1.2rem;
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
`;
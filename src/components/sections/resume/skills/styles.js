import styled from 'styled-components';
import { ResumeChild } from '../styles';

export const ResumeSkill = styled(ResumeChild)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    margin: 0;
  }
`;
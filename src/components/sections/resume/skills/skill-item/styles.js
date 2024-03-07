import styled from 'styled-components';
import { ResumeChild } from '../../styles';

export const ResumeSkill = styled(ResumeChild)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  img {
    width: 3rem;
    @media (min-width: 768px) {
      width: 6rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 1.7rem;
    }
  }
`;
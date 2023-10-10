import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const TabsButtons = styled.button`
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 1rem;
  display: inline-block;
  padding: 1rem 1.5rem;
  margin: 0 0 1rem 0;
  background-color: transparent;
  color: var(--c-primary);
  border: 2px solid var(--c-primary);
  transition: background-color .3s ease-out, color .3s ease-out;

  &.current {
    background-color: var(--c-primary);
    color: var(--c-white);
  }
`;

export const ResumeContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ResumeChild = styled.div`
  padding: 3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 2rem;
`;

export const ResumeExperience = styled(ResumeChild)`
  .dates {
    margin-bottom: 1rem;
    color: var(--c-primary);
    font-weight: 700;
    font-size: 1.4rem;
  }

  .company {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

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
    color: var(--c-primary);
  }

  h3 {
    margin: 0;
  }
`;
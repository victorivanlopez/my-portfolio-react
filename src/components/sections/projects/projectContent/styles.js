import styled from 'styled-components';

export const GridProject = styled.div`
  margin: 2rem 0;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
`;

export const ContentProject = styled.div`
  margin-top: 2rem;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const DescriptionProject = styled.div`
  p {
    margin-bottom: 1.5rem;
  }
  ul {
    list-style: disc;
    padding: 0 0 1rem 2rem;
    li {
      margin-bottom: 1rem;
    }
  }
`;

export const DetailsProject = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 4rem 0;
  @media (min-width: 768px) {
    margin: 4rem 0 0 0;
  }
`;

export const DetailsProjectItem = styled.li`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;
  }
  p {
    margin: 0;
  }
  span {
    font-weight: 700;
  }
  a {
    padding: 0;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s;
  }
`;
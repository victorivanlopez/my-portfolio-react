import styled from 'styled-components';

export const ProjectCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: 2rem;
  border-top: 0;
  &:hover .img-project {
    transform: scale(1.1);
  }
  &:hover h3 {
    background-size: 100% 0.2rem;
  }
`;

export const ProjectImage = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    transition: transform 0.4s ease-in-out;
  }
`;

export const ProjectContent = styled.div`
  padding: 2rem 3rem;

  h3 {
    display: inline-block;
    background-image: linear-gradient(to right, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primary} 100%);
    background-size: 0px 0.2rem;
    background-position: 0px 95%;
    background-repeat: no-repeat;
    padding: 0.4rem 0;
    transition: background-size 0.3s;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;

  a {
    padding: 0;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grayDark};
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ProjectFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
  padding: 1.5rem;
`;

export const ProjectTechnologies = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
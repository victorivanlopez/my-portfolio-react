import styled from 'styled-components';

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ type }) => type === 'error' ? '#FFF0F0' : '#C4F9E2'};
  border-radius: 1rem;

  p, svg {
    color: ${({ type, theme }) => type === 'error' ? theme.colors.error : theme.colors.success};
  }
`;
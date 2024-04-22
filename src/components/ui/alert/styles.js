import styled from 'styled-components';

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ type }) => type === 'error' ? '#FFF0F0' : '#C4F9E2'};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px;
  border-radius: 1rem;

  p, svg {
    color: ${({ type, theme }) => type === 'error' ? theme.colors.error : theme.colors.success};
  }
`;
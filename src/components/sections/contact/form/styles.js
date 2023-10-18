import styled from 'styled-components';

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactFormField = styled.div`

  label {
    display: block;
    letter-spacing: .1rem;
    span {
      color: ${({ theme }) => theme.colors.error};
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    outline: none;
    &:focus-visible {
      border: 1px solid ${({ theme }) => theme.colors.grayDark};
    }
  }
  textarea {
    resize: vertical;
  }
`;

export const ContactFormButton = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 1rem;
  margin: 1rem 0;
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(to left, ${({ theme }) => theme.colors.primary} 50%, transparent 50%) no-repeat left / 200%;
  transition: background-position .3s ease, color .3s ease;
  @media (min-width: 993px) {
    width: 50%;
  }
  &:hover {
    cursor: pointer;
    background-position: right;
    color: ${({ theme }) => theme.colors.white};
  }
`;
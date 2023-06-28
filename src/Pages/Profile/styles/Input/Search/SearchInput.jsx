import styled from 'styled-components';

export const SearchInput = styled.input`
  height: 1.5rem;

  padding: 0.5rem 1rem;
  margin-right: 0.5rem;

  width: 100%;

  color: var(--default-text-color);
  background-color: rgba(152, 152, 152, 0.2);

  border: none;
  border-radius: 0.8rem;

  &::placeholder {
    color: var(--default-text-color);
  }
`;

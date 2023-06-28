import styled, { css } from 'styled-components';

export const CategoryButton = styled.button`
  padding: 0.325rem 1rem;
  height: fit-content;

  font-size: 0.75rem;
  color: var(--default-text-color);

  background-color: ${(props) =>
    props.transparent ? 'transparent' : 'var(--btnColor)'};

  border: none;
  border-radius: 0.4rem;
`;

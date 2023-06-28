import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem 1rem;
  width: ${(props) => (props.fullWidth ? '100%' : 'fit-content')};
  max-width: 100%;
  height: 2.5rem;

  color: var(--default-text-color);
  background-color: ${(props) =>
    props.fullWidth ? 'var(--btnColor)' : 'rgba(152, 152, 152, 0.2)'};

  border: none;

  border-radius: ${(props) =>
    props.roundedSide === 'left'
      ? '0.4rem 0 0 0.4rem'
      : props.roundedSide === 'right'
      ? '0 0.4rem 0.4rem 0'
      : '0.4rem'};
`;

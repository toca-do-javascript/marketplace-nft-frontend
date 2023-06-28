import styled from 'styled-components';

export const SectionTitle = styled.nav`
  font-weight: 600;

  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: #224abb;
  }

  .selected {
    color: #224abb;
  }
`;

import styled from 'styled-components';
import '../../../variable.css'

// eslint-disable-next-line react/prop-types
const Button = ({ backgroundColor, borderColor, children}) => {
  return(
    <ButtonWrapper backgroundColor={backgroundColor} borderColor={borderColor}>
      {children}
    </ButtonWrapper>
  ) 
}

const ButtonWrapper = styled.button`
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  color: white;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: var(--hoverColor);
    transform: scale(1.05);
  }
`;

export { Button };
import styled, {css} from "styled-components";
import "../../../variable.css";

// eslint-disable-next-line react/prop-types
const Button = ({transparent , selected, rounded, children }) => {
  return(
    <ButtonWrapper transparent={transparent} selected={selected} rounded={rounded}> { children }</ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.transparent ? "transparent" : "var(--btnFilled)"};
  border: 1px solid ${(props) => props.transparent ? "var(--btnFilled)" : "transparent"};
  border-radius: ${(props) => (props.rounded ? "60px" : "9px")};
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.transparent ? "var(--btnFilled)" : "white")};
  padding: 15px;
  font-size: 12px;
  margin: auto;
  text-align: center;
  font-weight: 700;
  font-family: "Poppins" sans-serif;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: 0.3s ease;

  ${(props) =>
    props.selected &&
    css`
      background-color: var(--btnFilled);
    `}

  &:hover {
    transform: scale(1.05);
  }
`;

export { Button };

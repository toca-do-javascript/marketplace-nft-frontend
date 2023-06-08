import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { useState } from 'react';
import styled from 'styled-components';

/* type,title,name */

const Input = ({ type, onChanged, name, display }) => {
  const [isPasswordDisplayed, setPasswordDisplay] = useState(false);
  const [inputType, setInputType] = useState(type);
  function handlePasswordDisplay() {
    setPasswordDisplay(!isPasswordDisplayed);
    setInputType(isPasswordDisplayed ? type : 'text');
  }
  return (
    <InputWrapper>
      <InputTitle>{display}</InputTitle>
      <InputFieldWrapper>
        <InputField type={inputType} name={name} onChange={onChanged} />
        {type === 'password' ? (
          <MostraSenha
            passwordDisplay={isPasswordDisplayed}
            onCheck={handlePasswordDisplay}
          />
        ) : (
          ''
        )}
      </InputFieldWrapper>
    </InputWrapper>
  );
};

const InputTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.065em;
`;
function MostraSenha({ passwordDisplay, onCheck }) {
  return passwordDisplay ? (
    <EyeOffIcon onClick={onCheck} />
  ) : (
    <EyeIcon onClick={onCheck} />
  );
}

const InputWrapper = styled.div`
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const InputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  width: 100%;
`;

const InputField = styled.input`
  type: ${(props) => props.type};
  background: #d9d9d9;
  padding: 15px;
  text-align: center;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 2rem;
  box-shadow: 0px 2px 5px rgba(18, 18, 18, 0.65);
  margin-right: 5px;

  &:focus {
    outline: none;
  }
`;
export { Input };

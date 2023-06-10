import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";

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
    display: flex;
    width: 50%;
    margin: auto;   
    padding: 15px;
    background: #181022;
    margin-bottom: 20px;
    color:  #ab1aad;
    border-radius: 50px; 
    border: solid 1px  #ab1aad;
    
    &:hover{
        border: solid 1px  #ab1aad ;
    }
    ::placeholder {
        color:   #ab1aad
    }
`

const TextArea = styled.input`
        display: inline-block;
        type:${(props)=>props.type};
        resize:none;
        flex: 100%;
        text-align: center;
        font-weight: 700;
        color:  #ab1aad;
        background: #181022;
        border: solid 0px  #ab1aad;

        &:focus{
            outline:none
        }

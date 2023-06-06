import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";

const Input = ({type,placeholder,name})=>{   
    const [isPasswordDisplayed,setPasswordDisplay] = useState(false);
    const [inputType, setInputType] = useState(type);
    function handlePasswordDisplay(){
        setPasswordDisplay(!isPasswordDisplayed)
        setInputType(isPasswordDisplayed ? type : "text");
    } 
        return(
            <InputWrapper type={type} placeholder={placeholder} name={name}>
                <TextArea placeholder={placeholder} type={inputType}/>
                {type==="password"?<MostraSenha passwordDisplay={isPasswordDisplayed} onCheck={handlePasswordDisplay}/>:''}
            </InputWrapper>
        )    
}

function MostraSenha({passwordDisplay,onCheck}){
    return passwordDisplay ?<EyeOffIcon onClick={onCheck}/>:<EyeIcon onClick={onCheck}/>
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

`
export  {Input};
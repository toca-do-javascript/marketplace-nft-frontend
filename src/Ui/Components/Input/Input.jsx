import styled from "styled-components";

const Input = ({type,placeholder,name})=>{
    return(
        <InputWrapper type={type} placeholder={placeholder} name={name}>

        </InputWrapper>
    )
}


const InputWrapper = styled.textarea`
        display: block;
        type: ${(props)=> props.type};
        resize:none;
        width: 50%;
        margin: auto;   
        padding: 15px;
        background: #181022;
        margin-bottom: 20px;
        text-align: center;
        font-weight: 700;
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

export {Input};
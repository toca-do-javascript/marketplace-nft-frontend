import {  useState } from "react";
import styled from "styled-components";

    const MenuPrincipal = styled.div`
        width: 100%;
        position: fixed;
        top: 0px;
        right: 0px;
        background: #F5F5F5;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        @media only screen and (max-width:1000px) {
            width: 100%;
            bottom: 0px;
            height: 70vh;
        };
    `


    const Login = styled.div`
        margin-top: 60px;
        width: 100%;
    `

    const TextField = styled.input`
        display: block;
        width: 40%;
        margin: auto;   
        background: #d9d9d9;
        padding: 15px;
        margin-bottom: 20px;
        text-align: center;
        font-weight: 700;
        border: none;
        border-radius: 10px;
    `
    
    const ButtonLogin = styled.div`
        background: #522087;
        width: 30%;
        color: white;
        font-size: 12px;
        padding: 15px;
        margin: auto;
        text-align: center;
        margin-top: 40px;
        font-weight: 800;
        font-family: sans-serif;
        border-radius: 10px; 
        letter-spacing: 0.2em;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `

    const Span = styled.div`
        font-weight: 600;
    `

    const ContaNova = styled.div`
        margin-top: 30px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.065em;
    `

    const CopyRigth = styled.div`
        font-size: 10px;
        position: absolute;
        bottom: 10px;
        width: 100%;
        text-align: center;
    `

    const TextInput = styled.div`
        width: 40%;
        margin: auto;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

letter-spacing: 0.065em;
    `

    const TitleLogo = styled.div`
        text-align: center;
        padding-top: 300px;
        width: 100%;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
        color: #531885;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `


const Register = () => {

    const [values, setValues] = useState("");

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    
    
    const handleClickButton = () =>{
        console.log(values)
    };

    

    

    return (<>
            <MenuPrincipal>
                <TitleLogo>
                    NFTART
                </TitleLogo>
                <Login>                                
                        <form>
                            <TextInput>Nome:</TextInput>
                            <TextField
                                type="text"
                                name="loginemail"
                                onChange={handleChangeValues}
                            />
                            <TextInput>E-mail:</TextInput>
                            <TextField
                                type="text"
                                name="loginemail"
                                onChange={handleChangeValues}
                            />
                            <TextInput>Senha</TextInput>
                            <TextField
                                type="text"
                                name="loginpassword"
                                onChange={handleChangeValues}
                            />
                            <TextInput>Confirme sua senha</TextInput>
                            <TextField
                                type="text"
                                name="loginpassword"
                                onChange={handleChangeValues}
                            />
                            <ButtonLogin onClick={handleClickButton}>EXPLORE</ButtonLogin>
                        </form>                                
                </Login>
                <ContaNova>
                    Já possuo uma conta
                    <br/>
                    <Span>CLIQUE AQUI para entrar</Span>    
                </ContaNova> 
                <CopyRigth>Copyrigth  2022 NFTART.All rigths reserved.</CopyRigth>                  
            </MenuPrincipal>
      </>)
  }
  
  export default Register
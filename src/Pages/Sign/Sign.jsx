import {  useState } from "react";
import styled from "styled-components";
import { Input } from "../../Ui/Components/Input/Input";
   

    const ButtonAba = styled.button`
        font-size: 20px;
        color: white;
        background: none;
        border: none;
        padding-bottom: 20px;
        border-bottom: solid 3px #360636;
        width: 50%;
        font-family: sans-serif;
            &:hover {
            border-bottom: solid 3px  #ab1aad;
            }
    `;
     
    const Section = styled.div`
        width: 50%;
        margin: auto;
        margin-top: 40px;
    `

    const Title = styled.div`
        padding-top: 150px;
        text-align: center;
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        font-weight: 500;
        @media only screen and (max-width:700px) {
            padding-top: 50px;
        };
        
    `

    const Coments = styled.div`
        font-size: 14px;
        color: white;   
        text-align: center;
        width: 50%;
        margin: auto;
        font-weight: 400;
        margin-top: 30px;
        font-family: sans-serif;
        @media only screen and (max-width:1000px) {
            display: none;
        };
    `    

    const MenuLateral = styled.div`
        width: 50%;
        position: fixed;
        right: 0px;
        background: #181022;
        height: 100vh;
        @media only screen and (max-width:1000px) {
            width: 100%;
            bottom: 0px;
            height: 70vh;
        };
    `;

    const FullScream = styled.div`
        background-image: url("https://th.bing.com/th/id/R.7371bd63196d1f1e7df252abe2eb4b60?rik=zWGiwU2WB4M5Ow&pid=ImgRaw&r=0");
        background-size: cover;
        height: 100vh;
        width: 50%;
        @media only screen and (max-width:1000px) {
            width: 100%;
            background-size: cover;
            height: 30vh;
        };
    `

    const Login = styled.div`
        margin-top: 60px;
    `
    const Button = styled.div`
        background:  #ab1aad;
        width: 50%;
        color: white;
        font-size: 14px;
        padding: 15px;
        margin: auto;
        text-align: center;
        font-family: sans-serif;
        border-radius: 50px; 
        letter-spacing: 0.2em;

    `

const Register = () => {

    const [area, setArea] = useState(true);
    const [values, setValues] = useState("");
    const [valuesLogin, setValuesLogin] = useState("");

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleChangeValuesLogin = (value) => {
        setValuesLogin((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };
    
    const handleClickButton = () =>{
        console.log(values)
    };

    const handleClickButtonLogin = () =>{
        console.log(valuesLogin)
    };

    

    return (<>
        
       <FullScream>
        <MenuLateral>
                <Title>SING IN</Title>
                <Coments>Connect with us and find the best Nft of the moment, over a thousand most sought after NFTs on the market</Coments>
                <Section>
                    <ButtonAba onClick={() => {setArea(!false)}  }>Login</ButtonAba>
                    <ButtonAba onClick={() => {setArea(!true)}}>Register</ButtonAba>
                </Section>
                {area? 
                    <Login>
                        
                        <form>
                            <Input
                                type="text"
                                placeholder="Enter you login"
                                name="loginemail"
                                onChange={handleChangeValues}
                            />
                            <Input
                                type="password"
                                placeholder="Enter you Password"
                                name="loginpassword"
                                onChange={handleChangeValues}
                            />
                            <Button onClick={handleClickButton}>Login Acount</Button>
                        </form>
                        
                    </Login>
                    :
                    <Login>
                        <form>
                            <Input
                                type="text"
                                placeholder="Enter your E-mail"
                                name="Remail"
                                onChange={handleChangeValuesLogin}
                            />
                            <Input
                                type="password"
                                placeholder="Enter your Password"
                                name="Rpassword"
                                onChange={handleChangeValuesLogin}
                            />
                            <Input
                                type="password"
                                placeholder="Repeat your Password"
                                name="Cpasswor"
                                onChange={handleChangeValuesLogin}
                            />
                            <Button onClick={handleClickButtonLogin}>Create Acount</Button>
                        </form>    
                    </Login>}
            </MenuLateral>
       </FullScream>
      
      </>)
  }
  
  export default Register
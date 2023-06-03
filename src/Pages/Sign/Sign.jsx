import { useState } from "react";
import styled from "styled-components";

    const ButtonAba = styled.button`
        font-size: 20px;
        color: white;
        background: none;
        border: none;
        padding-bottom: 20px;
        border-bottom: solid 3px #2f0031;
        width: 50%;
        font-family: sans-serif;
            &:hover {
            border-bottom: solid 3px #99008c;
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
    `    

    const MenuLateral = styled.div`
        width: 50%;
        position: fixed;
        right: 0px;
        background: rgb(20, 2, 34);
        height: 100vh;
    `

    const FullScream = styled.div`
        background-image: url("https://th.bing.com/th/id/R.7371bd63196d1f1e7df252abe2eb4b60?rik=zWGiwU2WB4M5Ow&pid=ImgRaw&r=0");
        background-size: cover;
        height: 100vh;
        width: 50%; 
    `

    const Login = styled.div`
        margin-top: 60px;
    `

    const TextField = styled.input`
        display: block;
        width: 50%;
        margin: auto;   
        padding: 15px;
        background: rgb(20, 2, 34);
        margin-bottom: 20px;
        text-align: center;
        font-weight: 700;
        color: #c900c9;
        border-radius: 50px; 
        border: solid 1px #c900c9 ;
        &:hover{
            border: solid 1px #c900c9 ;
        }
        ::placeholder {
        color:  #c900c9 ;
        }
    `
    
    const Button = styled.div`
        background: #c900c9;
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
                            <TextField
                                type="text"
                                placeholder="Enter you login"
                                name="loginemail"
                                onChange={handleChangeValues}
                            />
                            <TextField
                                type="text"
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
                            <TextField
                                type="text"
                                placeholder="Enter tou E-mail"
                                name="Remail"
                                onChange={handleChangeValuesLogin}
                            />
                            <TextField
                                type="text"
                                placeholder="Enter you Password"
                                name="Rpassword"
                                onChange={handleChangeValuesLogin}
                            />
                            <TextField
                                type="text"
                                placeholder="Repeat you Password"
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
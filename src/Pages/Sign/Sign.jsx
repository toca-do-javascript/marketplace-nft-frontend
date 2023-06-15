import {  useState } from "react";
import styled from "styled-components";

    const Title = styled.div`
        padding-top: 150px;
        text-align: center;
        font-size: 30px;
        font-family: 'Poppins', sans-serif;
        color: #0a0a0a;
        font-weight: 500;
        @media only screen and (max-width:700px) {
            padding-top: 50px;
        };
        
    `
    
    const MenuLateral = styled.div`
        width: 50%;
        position: fixed;
        top: 0px;
        right: 0px;
        background: #F5F5F5;
        height: 100vh;
        @media only screen and (max-width:1000px) {
            width: 100%;
            bottom: 0px;
            height: 70vh;
        };
    `

    const FullScream = styled.div`
        background-image: url("https://images.unsplash.com/photo-1645516484419-35a747c99474?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDMwfHxuZnR8ZW58MHx8fHwxNjg1OTg4Nzg5fDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background: rgb(42,42,42);
        background: radial-gradient(circle, rgba(42,42,42,1) 0%, rgba(0,0,0,1) 100%);
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

    const MenuTitle = styled.div`
        
    `

    const TitleLogo = styled.div`
        padding-top: 300px;
        width: 100%;
        padding-left: 15%;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
        color: #531885;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `

    const TitleComentario = styled.div`
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;   
        margin-top: 10px ;
        line-height: 53px;
        padding-left: 15%;
        color: #FFFFFF;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `

    const Titlefundo = styled.div`
        font-family: 'Pavanam', sans-serif;
        font-style: normal;
        font-weight: 400;
        margin-top: 20px;
        font-size: 17px;
        line-height: 26px;
        color: #FFFFFF;
        padding-left: 15%;
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
    };

    

    

    return (<>
        
       <FullScream>
            <MenuTitle>
                <TitleLogo>
                    NFTART
                </TitleLogo>
                <TitleComentario>
                    Create a new world
                    <br/>
                    with your creativity.
                </TitleComentario>
                <Titlefundo>
                    Access and check out all the advantages!
                </Titlefundo>

            </MenuTitle>
            <MenuLateral>
                <Title>SIGN IN</Title>
                <Login>                                
                        <form>
                                type="text"
                                name="loginemail"
                                onChange={handleChangeValues}
                            /{">"}

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
                    </Login>{"}"}
            </MenuLateral>
       </FullScream>
      
      </>)
  }
  
  export default Register
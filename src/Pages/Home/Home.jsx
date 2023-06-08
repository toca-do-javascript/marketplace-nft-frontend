import styled from "styled-components"
import { SiEthereum } from "react-icons/si";
import imgSelo from "../../Ui/Img/selo.png"

const TAGHEADER = styled.div`
  height: 10vh;
`;

const HeaderPagina = styled.div`
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 87%, rgba(198,42,234,1) 100%);  height: 90vh;
  display: flex;
`;

const Headerbox1 = styled.div`
  width: 60%;
`;

const TextTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 46px;
  letter-spacing: 0.015em;
  color: #FFFFFF;
  padding-top: 180px;
  padding-left: 100px;
`;

const TextDecoder = styled.div`
  padding-left: 100px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 200;
  font-size: 17px;
  line-height: 160%;
  color: #FFFFFF;       
`;

const ButtonColletion = styled.div`
  background: #531885;
  padding: 10px;
  width: 30%;
  border-radius: 10px;
  margin-left: 170px ;
  text-align: center;
  color: white;
  font-family: 'Poppins';
  margin-top: 30px;
  font-weight: 700;
`;

const Flex = styled.div`
  display: flex;
`;

const CardBoxDado = styled.div`
  width: 50%;
  margin-left: 100px;
  margin-top: 40px;
`;

const Box = styled.div` 
`;

const NunberValor = styled.div`
  font-family: 'Poppins';
  color: #531885;
  font-size: 40px;
  font-weight: 800;
`;

const NameArt = styled.div`
  color: white;
  font-size: 20px;
`;

const Headerbox2 = styled.div`
  width: 40%;
`;

const BoxImg1 = styled.div`
  height: 400px;
  margin-top: 150px;
  width: 400px;
  background-size: cover;
  border-radius: 20px;
  background-image: url("https://s3-nftrend-storage.s3.sa-east-1.amazonaws.com/wp-content/uploads/2023/02/03154647/CatVader.png");
`;

const CardNftName = styled.div`
  color: white;
  font-family: 'DM Sans';
  font-style: normal;
  letter-spacing: -0.05em;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 30px;
`;

const CardImgArtista = styled.div`
  background-image: url("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600");
  border-radius: 100%;
  background-size: cover;
  margin-left: 20px;
  height: 50px;
  width: 70px;
`;

const CardNomeArtista = styled.div`
  color: white;
  width: 100%;
  padding-top: 15px;
  padding-left: 10px;
  font-size:20px ;
  font-weight:800 ;  
`;

const CardBoxDados = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px;
  height: 70px;
  margin-top: 180px;
`;

const CardText = styled.div`
  color: white;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;       
`;

const CardPrice = styled.div`
  color: white;
  padding-top: 15px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

const CardDate = styled.div`
  color: white;
  padding-top: 15px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

const Boximg2 = styled.div`
  background-image: url("https://s3-nftrend-storage.s3.sa-east-1.amazonaws.com/wp-content/uploads/2021/05/21101412/piramide-scaled.jpg");
  background-size: cover;
  height: 360px;
  margin-top: 170px;
  border-radius: 0px 20px 20px 0px;
  width: 35px;
`;

const Boximg3 = styled.div`
  background-image: url("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600");
  background-size: cover;
  height: 320px;
  margin-top: 190px;
  border-radius: 0px 20px 20px 0px;
  width: 35px;
`;

const SeloEtheriun = styled.div`
  background-image: url(${imgSelo});
  height: 100px;
  width: 100px;
  
`;

const Main = () => {
  
  return (<>
      <TAGHEADER>CONPONENTE DO HEARDER</TAGHEADER>
      <HeaderPagina>
        <Headerbox1>
          <TextTitle>DISCOVER, AND COLLECT<br/> DIGITAL ART NFT</TextTitle>
          <TextDecoder>Digital marketplace for crypto collectibles and non-fungible
            <br/> tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</TextDecoder>
          <ButtonColletion>Explore Collection</ButtonColletion>
          <CardBoxDado>
          <Flex style={{justifyContent:"space-between"}}>
            <Box>
                <NunberValor>98K+</NunberValor>
                <NameArt>Artwork</NameArt>
            </Box>
            <Box>
                <NunberValor>12K+</NunberValor>
                <NameArt>Auction
                </NameArt>
            </Box>
            <Box>
                <NunberValor>15K+</NunberValor>
                <NameArt> Artist</NameArt>
            </Box>
          </Flex>
          </CardBoxDado>
        </Headerbox1>
        <Headerbox2>
            <Flex>
              <BoxImg1>
                <CardNftName>Art A.nft</CardNftName>
                <Flex>
                  <CardImgArtista></CardImgArtista>
                  <CardNomeArtista>ArtLian</CardNomeArtista>
                </Flex>
                <CardBoxDados>
                  <Flex>
                    <CardText>Current Bid</CardText>
                    <CardText style={{paddingLeft:"100px"}}>Ends in</CardText>
                  </Flex>
                  <Flex>
                    <SiEthereum style={{color:"white", padding:"15px"}}/>
                    <CardPrice>0.25 ETH</CardPrice>
                    <CardDate style={{paddingLeft:"70px"}}>12h  43m  42s</CardDate>
                  </Flex>
                  <SeloEtheriun>
                  </SeloEtheriun>
                </CardBoxDados>
              </BoxImg1>
              <Boximg2>
              </Boximg2>
              <Boximg3>
              </Boximg3>
            </Flex>
        </Headerbox2>
      </HeaderPagina>
  </>)
}

export default Main;

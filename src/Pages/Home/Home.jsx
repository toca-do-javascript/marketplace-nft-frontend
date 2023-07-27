import styled from 'styled-components';
import { SiEthereum } from 'react-icons/si';
import imgSelo from '../../Ui/Img/Selo.png';
import iconFast from '../../Ui/Img/icons/card-tick.png';
import iconSafe from '../../Ui/Img/icons/chart-square.png';
import cardHoverUm from '../../Ui/Img/img-card-hover/CardHoverUm.png';
import cardHoverDois from '../../Ui/Img/img-card-hover/CardHoverDois.png';
import cardHoverTres from '../../Ui/Img/img-card-hover/CardHoverTreis.png';
import cardHoverQuatro from '../../Ui/Img/img-card-hover/CardHoverQuatro.png';
import cardHoverCinco from '../../Ui/Img/img-card-hover/CardHoverCinco.png';
import { useState } from 'react';
import Footer from '../../Ui/Components/Footer/Footer';

const TAGHEADER = styled.div`
  height: 10vh;
`;

const HeaderPagina = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 87%,
    rgba(198, 42, 234, 1) 100%
  );
  height: 90vh;
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
  color: #ffffff;
  padding-top: 180px;
  padding-left: 100px;
`;

const TextDecoder = styled.div`
  padding-left: 100px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 200;
  font-size: 17px;
  line-height: 160%;
  color: #ffffff;
`;

const ButtonColletion = styled.div`
  background: #531885;
  padding: 10px;
  width: 30%;
  border-radius: 10px;
  margin-left: 170px;
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

const Box = styled.div``;

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
  background-image: url('/src/Ui/Img/img-card-hover/ImgAdventureTime.png');
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
  background-image: url('/src/Ui/Img/img-card-hover/ImgPerfilUsuarioArt.png');
  border-radius: 100%;
  background-size: cover;
  margin-left: 20px;
  height: 50px;
  width: 66px;
`;

const CardNomeArtista = styled.div`
  color: white;
  width: 100%;
  padding-top: 15px;
  padding-left: 10px;
  font-size: 20px;
  font-weight: 800;
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
  background-image: url('/src/Ui/Img/img-card-hover/ImgCardHomeArt.png');
  background-size: cover;
  height: 360px;
  margin-top: 170px;
  border-radius: 0px 20px 20px 0px;
  width: 35px;
`;

const Boximg3 = styled.div`
  background-image: url('/src/Ui/Img/img-card-hover/ImgHomeUm.png');
  background-size: cover;
  height: 320px;
  margin-top: 190px;
  border-radius: 0px 20px 20px 0px;
  width: 35px;
`;

const SeloEtheriun = styled.div`
  background-image: url(${imgSelo});
  background-size: cover;
  height: 120px;
  width: 120px;
  position: absolute;
  top: -120px;
  left: -70px;
`;

const ContainerTransaction = styled.div`
  height: 25vh;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(198, 42, 234, 1) 95%,
    rgba(198, 42, 234, 1) 100%
  );
`;

const ItemStart = styled.div`
  width: 40%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  text-align: start;
  padding-left: 10%;
  color: #fff;
  margin-top: -13px;
`;

const ItemMid = styled.div`
  width: 30%;
  font-family: 'Poppins';
  font-style: normal;
  font-size: 18px;
  text-align: start;
  color: #fff;
  margin-top: -28px;
`;

const IconFast = styled.div`
  background-image: url(${iconFast});
  background-size: cover;
  height: 35px;
  width: 35px;
  margin-top: 25px;
  margin-right: 17px;
`;

const IconSafe = styled.div`
  background-size: cover;
  height: 35px;
  width: 35px;
  margin-top: 25px;
  margin-right: 17px;
  background-image: url(${iconSafe});
`;

const ItemEnd = styled.div`
  width: 30%;
  font-family: 'Poppins';
  font-style: normal;
  font-size: 18px;
  text-align: start;
  color: #fff;
  margin-top: -27px;
`;

const ComponenteCardHover = styled.div`
  background-color: #000000;
  height: auto;
`;

const TitleCard = styled.div`
  color: #fff;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  padding-top: 90px;
`;

const ParagrafoCard = styled.div`
  color: #fff;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  margin-top: -30px;
  margin-bottom: 90px;
`;

const CardHoverUm = styled.div`
  background-image: url(${cardHoverUm});
  background-size: cover;
  width: 230px;
  height: 320px;
  margin-top: 55px;
  margin-right: -60px;
  border-radius: 20px;
  &:hover {
    transition: 0.4s;
    transform: scale(1.1, 1.1);
    z-index: 3;
  }
`;

const CardHoverDois = styled.div`
  background-image: url(${cardHoverDois});
  background-size: cover;
  width: 270px;
  height: 380px;
  margin-top: 25px;
  margin-right: -30px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  &:hover {
    transition: 0.4s;
    transform: scale(1.1, 1.1);
    z-index: 3;
  }
`;

const CardHoverTres = styled.div`
  background-image: url(${cardHoverTres});
  background-size: cover;
  width: 320px;
  height: 430px;
  z-index: 2;
  border-radius: 30px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  &:hover {
    transition: 0.4s;
    transform: scale(1.1, 1.1);
    z-index: 3;
  }
`;

const CardHoverQuatro = styled.div`
  background-image: url(${cardHoverQuatro});
  background-size: cover;
  width: 270px;
  height: 380px;
  margin-top: 25px;
  margin-left: -30px;
  border-radius: 20px;
  z-index: 1;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  &:hover {
    transition: 0.4s;
    transform: scale(1.1, 1.1);
    z-index: 3;
  }
`;

const CardHoverCinco = styled.div`
  background-image: url(${cardHoverCinco});
  background-size: cover;
  width: 230px;
  height: 320px;
  margin-top: 55px;
  margin-left: -60px;
  border-radius: 20px;
  &:hover {
    transition: 0.4s;
    transform: scale(1.1, 1.1);
    z-index: 3;
  }
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerButton = styled.div`
  background: black;
  padding-top: 90px;
`;

const ButtonExplore = styled.div`
  border-radius: 14px;
  color: white;
  text-align: center;
  background: #531885;
  padding: 20px;
  width: 200px;
  margin: auto;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 2px;
`;

const ContainerFilterSection = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(79, 21, 91, 0.2) 96.73%
    ),
    linear-gradient(180deg, #000000 0%, #3c0c46 92.36%), #000000;
  height: 100vh;
  padding: 100px;
`;

const Discovery = styled.div`
  color: white;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 51px;
`;

const ButtonsFilter = styled.div`
  margin-top: 20px;
`;

const BoxCategory = styled.div``;

const MenuFilter = styled.div`
  color: white;
  margin-right: 100px;
  background: rgba(220, 220, 220, 0.2);
  border-radius: 100px;
  padding: 10px 20px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

function ButtonCategory({ init, children }) {
  const [cor, setCor] = useState('');
  return (
    <ButtonWrapper onClick={() => setCor(init)} backgroundColor={cor}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  color: white;
  margin-right: 10px;
  background: rgba(220, 220, 220, 0.2);
  border-radius: 100px;
  padding: 10px 20px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  background-color: ${(props) => props.backgroundColor};
`;

const ContainerSectionExplorer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
`;

const TitleSectionExplorer = styled.div`
  color: #fff;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
`;

const DescriptionSectionExplorer = styled.div`
  color: #fff;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: 5px;
`;

const ButtonExplorer = styled.button`
  border-radius: 14px;
  color: white;
  background: #531885;
  font-weight: 400;
  font-size: 20px;
  margin-top: 30px;
  padding: 1.5rem 4rem;
`;

const Main = () => {
  const [category, setCategory] = useState('blue');

  return (
    <>
      <TAGHEADER>CONPONENTE DO HEARDER</TAGHEADER>
      {/* Componente da página principal */}
      <HeaderPagina>
        <Headerbox1>
          <TextTitle>
            DISCOVER, AND COLLECT
            <br /> DIGITAL ART NFT
          </TextTitle>
          <TextDecoder>
            Digital marketplace for crypto collectibles and non-fungible
            <br /> tokens (NFTs). Buy, Sell, and discover exclusive digital
            assets.
          </TextDecoder>
          <ButtonColletion>Explore Collection</ButtonColletion>
          <CardBoxDado>
            <Flex style={{ justifyContent: 'space-between' }}>
              <Box>
                <NunberValor>98K+</NunberValor>
                <NameArt>Artwork</NameArt>
              </Box>
              <Box>
                <NunberValor>12K+</NunberValor>
                <NameArt>Auction</NameArt>
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
                  <CardText style={{ paddingLeft: '100px' }}>Ends in</CardText>
                </Flex>
                <Flex>
                  <SiEthereum style={{ color: 'white', padding: '15px' }} />
                  <CardPrice>0.25 ETH</CardPrice>
                  <CardDate style={{ paddingLeft: '70px' }}>
                    12h 43m 42s
                  </CardDate>
                </Flex>
                <SeloEtheriun></SeloEtheriun>
              </CardBoxDados>
            </BoxImg1>
            <Boximg2></Boximg2>
            <Boximg3></Boximg3>
          </Flex>
        </Headerbox2>
      </HeaderPagina>
      {/* Componente do card */}
      <ContainerTransaction>
        <Flex>
          <ItemStart>
            The amazing NFT art <br /> of the world here
          </ItemStart>
          <ItemMid>
            <Flex>
              <IconFast></IconFast>
              <div>
                <h3>Fast Transaction</h3>
                <p style={{ fontSize: '18px', fontFamily: 'DM Sans' }}>
                  Create collections and sell <br /> your works of art quickly.
                </p>
              </div>
            </Flex>
          </ItemMid>
          <ItemEnd>
            <Flex>
              <IconSafe></IconSafe>
              <div>
                <h3>Safe Transaction </h3>
                <p style={{ fontSize: '18px', fontFamily: 'DM Sans' }}>
                  Make secure transactions <br /> through our system.
                </p>
              </div>
            </Flex>
          </ItemEnd>
        </Flex>
      </ContainerTransaction>
      {/* Card hover */}
      <ComponenteCardHover>
        <TitleCard>
          <h3>Discover a world of collections</h3>
        </TitleCard>
        <ParagrafoCard>
          <p>and trade in just one place!</p>
        </ParagrafoCard>
        <ContainerCenter>
          <Flex style={{ width: 'auto', margin: 'auto' }}>
            <CardHoverUm></CardHoverUm>
            <CardHoverDois></CardHoverDois>
            <CardHoverTres></CardHoverTres>
            <CardHoverQuatro></CardHoverQuatro>
            <CardHoverCinco></CardHoverCinco>
          </Flex>
        </ContainerCenter>
      </ComponenteCardHover>
      {/* Button Explore */}
      <ContainerButton>
        <ButtonExplore>Explore Now</ButtonExplore>
      </ContainerButton>
      {/* Section Filter */}
      <ContainerFilterSection>
        <Discovery>Discover more NFTs</Discovery>
        <ButtonsFilter>
          <Flex style={{ justifyContent: 'space-between' }}>
            <BoxCategory>
              <Flex>
                <ButtonCategory init={'red'}>All Categories</ButtonCategory>
                <ButtonCategory init={'red'}>Art</ButtonCategory>
                <ButtonCategory init={'red'}>Celebrities</ButtonCategory>
                <ButtonCategory init={'red'}>Gaming</ButtonCategory>
                <ButtonCategory init={'red'}>Sport</ButtonCategory>
              </Flex>
            </BoxCategory>
            <MenuFilter>Filter</MenuFilter>
          </Flex>
        </ButtonsFilter>
      </ContainerFilterSection>

      <ContainerSectionExplorer>
        <TitleSectionExplorer>Check it out right now!</TitleSectionExplorer>
        <DescriptionSectionExplorer>
          Enter our world and get the best benefits for free.
        </DescriptionSectionExplorer>
        <ButtonExplorer>Explore Now</ButtonExplorer>
      </ContainerSectionExplorer>
      <Footer></Footer>
    </>
  );
};

export default Main;

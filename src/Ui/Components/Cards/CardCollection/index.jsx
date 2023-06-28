import collectionImage from '../assets/collection.svg'
import { CardButton, CardContainer, CardEthereumText, CardFooter, CardInformation } from './styles'

export function CardCollection() {
  return (
    <CardContainer>
      <img src={collectionImage} />
      <div>
        <strong>ManBand</strong>
        <CardInformation>
          <span>Auction time</span>
          <span>Current Bid</span>
        </CardInformation>
        <CardEthereumText>0.05 ETH</CardEthereumText>
        <CardFooter>
          <span>3h 1m 50s</span>
          <span>0.15 ETH</span>
        </CardFooter>
      </div>
      <CardButton>Place a Bid</CardButton>
    </CardContainer>
  )
}
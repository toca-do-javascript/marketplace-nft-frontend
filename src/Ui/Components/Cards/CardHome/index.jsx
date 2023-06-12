import ethereumImage from '../assets/ethereum.svg'
import previewImage from '../assets/image.svg' 
import avatarImage from '../assets/avatar.svg'
import { CardAvatar, CardContainer, CardDivider, CardFooter, CardInformation } from './styles'

export function CardHome() {
  return (
    <CardContainer>
      <img src={previewImage} alt='Prisma Art' />
      <div>
        <strong>PrismaArt</strong>
        <CardInformation>
          <div>
            <img src={ethereumImage} alt='Ethereum' />
            <span>0.25 ETH</span>
          </div>
          <span>1 of 321</span>
        </CardInformation>
        <CardDivider />
        <CardFooter>
          <button>
            3h 50min 2s left
          </button>
          <a>Place a bid</a>
        </CardFooter>
      </div>
    </CardContainer>
  )
}
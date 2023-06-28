import ethereumImage from '../assets/ethereum.svg'
import previewImage from '../assets/image.svg' 
import avatar1 from '../assets/avatar1.svg'
import avatar2 from '../assets/avatar2.svg'
import avatar3 from '../assets/avatar3.svg'
import avatar4 from '../assets/avatar4.svg'
import avatarImage from '../assets/avatar.svg'
import { CardAvatares, CardContainer, CardDivider, CardFooter, CardInformation } from './styles'

export function CardHome() {
  return (
    <CardContainer>
      <div className='card-header'>
        <img src={previewImage} alt='Prisma Art' />
        <CardAvatares>
          <div className="avatares-img">
            <img src={avatar1} alt="" />
            <img src={avatar2} alt="" />
            <img src={avatar3} alt="" />
            <img src={avatar4} alt="" />
          </div>        
        </CardAvatares>
      </div>      
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
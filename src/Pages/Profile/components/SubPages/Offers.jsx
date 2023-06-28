import { Button } from '../../styles/Button/Button';
import { CategoryButton } from '../../styles/Button/CategoryButton';
import { CardWrapper } from '../../styles/Card/CardWrapper';
import { CardSection } from '../../styles/Sections/CardSection';
import Filters from '../Filters';

export default function Offers() {
  return (
    <>
      <Filters />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          padding: '2.5rem 0',
        }}
      >
        <div style={{ display: 'flex', width: '68rem', margin: '0 auto' }}>
          <CategoryButton>All</CategoryButton>
          <CategoryButton transparent>Artwork</CategoryButton>
          <CategoryButton transparent>Book</CategoryButton>
        </div>

        <CardSection style={{ padding: '0 11.25rem' }}>
          <CardWrapper>
            <div>
              <img />
            </div>

            <div className="cardInfo">
              <h3>Nome</h3>
              <div className="headers">
                <span>Auction Time</span>
                <span>Current Bid</span>
              </div>
              <span className="originalPrice">0.05 ETH</span>
              <div className="auditionRow">
                <span>3h 1m 50s</span>
                <span>0.15ETH</span>
              </div>
              <Button fullWidth>Place a Bid</Button>
            </div>
          </CardWrapper>

          <CardWrapper>
            <div>
              <img />
            </div>

            <div className="cardInfo">
              <h3>Nome</h3>
              <div className="headers">
                <span>Auction Time</span>
                <span>Current Bid</span>
              </div>
              <span className="originalPrice">0.05 ETH</span>
              <div className="auditionRow">
                <span>3h 1m 50s</span>
                <span>0.15ETH</span>
              </div>
              <Button fullWidth>Place a Bid</Button>
            </div>
          </CardWrapper>

          <CardWrapper>
            <div>
              <img />
            </div>

            <div className="cardInfo">
              <h3>Nome</h3>
              <div className="headers">
                <span>Auction Time</span>
                <span>Current Bid</span>
              </div>
              <span className="originalPrice">0.05 ETH</span>
              <div className="auditionRow">
                <span>3h 1m 50s</span>
                <span>0.15ETH</span>
              </div>
              <Button fullWidth>Place a Bid</Button>
            </div>
          </CardWrapper>

          <CardWrapper>
            <div>
              <img />
            </div>

            <div className="cardInfo">
              <h3>Nome</h3>
              <div className="headers">
                <span>Auction Time</span>
                <span>Current Bid</span>
              </div>
              <span className="originalPrice">0.05 ETH</span>
              <div className="auditionRow">
                <span>3h 1m 50s</span>
                <span>0.15ETH</span>
              </div>
              <Button fullWidth>Place a Bid</Button>
            </div>
          </CardWrapper>

          <CardWrapper>
            <div>
              <img />
            </div>

            <div className="cardInfo">
              <h3>Nome</h3>
              <div className="headers">
                <span>Auction Time</span>
                <span>Current Bid</span>
              </div>
              <span className="originalPrice">0.05 ETH</span>
              <div className="auditionRow">
                <span>3h 1m 50s</span>
                <span>0.15ETH</span>
              </div>
              <Button fullWidth>Place a Bid</Button>
            </div>
          </CardWrapper>
        </CardSection>
      </div>
    </>
  );
}

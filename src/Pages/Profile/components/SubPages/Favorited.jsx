import { Button } from '../../styles/Button/Button';
import { CategoryButton } from '../../styles/Button/CategoryButton';
import { CardWrapper } from '../../styles/Card/CardWrapper';
import { CardSection } from '../../styles/Sections/CardSection';
import Filters from '../Filters';

export default function Favorited() {
  return (
    <>
      <Filters />

      <CardSection>
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

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '68rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '-3rem',
              gap: '0.5rem',
            }}
          >
            <h2 style={{ margin: '0' }}>Discover other categories:</h2>
            <div style={{ display: 'flex' }}>
              <CategoryButton>All</CategoryButton>
              <CategoryButton transparent>Artwork</CategoryButton>
              <CategoryButton transparent>Book</CategoryButton>
            </div>
          </div>

          <CardSection>
            <CardWrapper>
              <img />
              <h3>Nome</h3>
              <Button fullWidth>Open Collection</Button>
            </CardWrapper>

            <CardWrapper>
              <img />
              <h3>Nome</h3>
              <Button fullWidth>Open Collection</Button>
            </CardWrapper>

            <CardWrapper>
              <img />
              <h3>Nome</h3>
              <Button fullWidth>Open Collection</Button>
            </CardWrapper>

            <CardWrapper>
              <img />
              <h3>Nome</h3>
              <Button fullWidth>Open Collection</Button>
            </CardWrapper>
          </CardSection>
        </div>
      </div>
    </>
  );
}

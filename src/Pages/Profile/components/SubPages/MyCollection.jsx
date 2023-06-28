import { Button } from '../../styles/Button/Button';
import { CardSection } from '../../styles/Sections/CardSection';
import { CardWrapper } from '../../styles/Card/CardWrapper';
import { CategoryButton } from '../../styles/Button/CategoryButton';
import Filters from '../Filters';

export default function MyCollection() {
  return (
    <>
      <Filters />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          padding: '2.5rem 0',
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
            <h2 style={{ margin: '0' }}>Collections:</h2>
            <h4 style={{ margin: '0' }}>Welcome Collections Page</h4>
            <div style={{ display: 'flex' }}>
              <CategoryButton>All</CategoryButton>
              <CategoryButton transparent>Artwork</CategoryButton>
              <CategoryButton transparent>Book</CategoryButton>
            </div>
          </div>

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
        </div>
      </div>
    </>
  );
}

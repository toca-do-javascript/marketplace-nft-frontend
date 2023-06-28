import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.825rem;

  width: fit-content;
  padding: 1.15rem;

  background-color: rgba(152, 152, 152, 0.2);
  border-radius: 1.125rem;

  img {
    width: 13rem;
    height: 11.25rem;

    background-color: grey;

    border-radius: 1rem;
    border: none;
  }

  .cardInfo {
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 0.15rem;
  }

  .cardInfo h3 {
    font-weight: 500;
    margin: 0;
  }
  .headers,
  .originalPrice,
  .auditionRow {
    font-weight: 400;
    font-size: 0.825rem;
  }

  .headers,
  .auditionRow {
    display: flex;
    justify-content: space-between;
  }

  .cardInfo .originalPrice {
    text-align: right;
    color: #6f4ff2;
  }

  .cardInfo .auditionRow {
    font-size: 1rem;
    color: #6c7aa0;
  }

  button {
    margin-top: 1rem;
  }
`;

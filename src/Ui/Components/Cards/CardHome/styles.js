import styled from "styled-components";

export const CardContainer = styled.div`

  .card-header {
    position: relative;
  }

  width: 284px;
  height: 374px;

  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(242, 242, 242, 0.5);
  border-radius: 14px;

  img {
    margin: 10px 12px;
  }

  > div strong {
    font-size: 20px;
    line-height: 20px;

    margin-left: 25px;
  }
`
export const CardAvatares = styled.div`
  display: flex;
  padding-left: 24px !important;
  position: absolute;
  bottom: -12px;
  align-items: center;
  margin-bottom: 11px !important;

  .avatares-img {
    img {
    width: 32.25px;
    height: 30.73px;
    margin: 0;   
  } 

    img:nth-child(n+2) {
      margin-left: -10px;
    }
  }
`;

export const CardInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    img {
      margin-left: 25px;
    }

    span {
      font-size: 14px;
      line-height: 15px;
      font-weight: 700;

      color: #00AC4F;
    }
  }

  span {
    margin-right: 28px;

    font-size: 14px;
    line-height: 20px;
    font-weight: 500;

    color: #838383;
  }
`

export const CardDivider = styled.div`
  margin: 10px 24px !important;
  
  border: 1px solid #F4F4F4;
  border-radius: 2px;
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 97px;
    height: 29px;
    border: none;
    margin-left: 26px;

    background: #f5f5f5;
    border-radius: 110px;

    font-size: 10px;
    line-height: 20px;
    font-weight: 700;
    color: #2D64FA;

    cursor: pointer;
  }

  a {
    font-size: 15px;
    left: 20px;
    font-weight: 500;

    text-decoration: none;

    color: #2D64FA;
    margin-right: 28px;

    cursor: pointer;
  }
`
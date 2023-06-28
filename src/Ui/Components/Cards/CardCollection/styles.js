import styled from "styled-components";

export const CardContainer = styled.div`
  width: 282px;
  height: 433px;

  background: rgba(255, 255, 255, 0.14);
  border-radius: 18px;

  img {
    width: 243px;
    height: 187px;

    margin: 20px;
  }

  > div strong {
    margin-top: 10px;
    margin-left: 22px;

    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
  }
`

export const CardInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    font-family: 'Poppins', sans-serif;
  }
`

export const CardEthereumText = styled.p`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;

  margin-top: 11px;
  margin-right: 20px;

  color: #6F4FF2;
  text-align: right;
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 5px 20px;

  span {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color: #6C7AA0;
  }
`

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 242px;
  height: 40px;

  border: 0;
  border-radius: 9px;
  background: #531885;

  margin: 20px 22px;

  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  font-family: 'Poppins', sans-serif;

  color: #fff;
  cursor: pointer;
`
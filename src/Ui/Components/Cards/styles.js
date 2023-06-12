import styled from "styled-components";

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  width: 100%;
  height: 100vh;
  //background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(79, 21, 91, 0.2) 96.73%), linear-gradient(180deg, #000000 0%, #3C0C46 92.36%), #000000;
  background: #000;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;

  padding: 50px;;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 42px;
`
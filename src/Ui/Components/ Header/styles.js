import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  padding-top: 2.63rem;
  padding-left: 7.06rem;
  padding-right: 8.13rem;
  
  background-color: black;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`

export const Nav = styled.nav`
  display: flex;
  gap: 1.24rem;

  a {
    color: white;
    text-decoration: none;

    &:hover {
    text-decoration: underline;
    }
  }

  margin-right: 2.2rem;
`

export const Button = styled.button`
  display: inline-flex;
  padding: 1.125rem 1.375rem;
  justify-content: center;
  align-items: center;

  color: #531885;

  background-color: transparent;
  border: 2px solid #531885;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 3.75rem;

  &:hover {
    color: white;
    background-color: #531885;
    transition: 0.5s;
  }
`
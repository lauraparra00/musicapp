import styled from "styled-components";

export const Header = styled.div`
  box-sizing: border-box;
  background: #b38dac;
  border: 1px solid #bba2b4;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen {
    max-width: 1370px;
  }
`;

export const Logo = styled.div`
  width: 20%;
  margin-left: 3%;
  align-items: center;

  
  @media screen {
    max-width: 1370px;
  }
  

`;

export const Logoh2 = styled.h2`
  margin: 5;
  display: flex;
  color: #111218;
  
`;

export const Nav = styled.div`
  width: 33%;
  display: flex;
  justify-content: space-evenly;
  margin-right: 5rem;
`;

export const NavButton = styled.button`
  font-size: 15px;
  margin-right: 13px;
  padding: 2%;
  background: none;
  border: none;
  &:hover {
  cursor: pointer;
  background-color: rgb(137, 28, 239);
  color: white;}
  &:active {
  background-color: darkorange;

  
  }
`;

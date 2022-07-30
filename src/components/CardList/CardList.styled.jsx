import styled from "styled-components";

export const ContainerList = styled.div`

padding: 2em 0 2em 0;
 
  background-color: #ebd1e7;
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  grid-row-gap: 2em;
  justify-content: space-evenly;

 

  @media screen and (max-width: 1085px) {
    grid-template-columns: 30% 30% 30%;
    justify-items: center;
    /* height: 100vh; */
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: 45% 45%;
    justify-items: center;
    height: auto;
  }
  @media screen and (max-width: 490px) {
    grid-template-columns: 90%;
    justify-items: center;
    height: auto;
  }
 
`;
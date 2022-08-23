import styled from "styled-components";



export const Container1 = styled.div`
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 1085px) {
    grid-template-columns: 30% 30% 30%;
    justify-items: center;
  }
  `;

export const Img =styled.img`
  width: 250px;
  height: 150px;
  border: #9a90a7 5px none;
  box-shadow: 2px 2px 5px #925dbc;
  padding: 4%;
  background-color: #ebd1e7;
  justify-content: space-evenly;

  @media screen and (max-width: 490px) {
    grid-template-columns: 90%;
    justify-items: center;
    height: auto;
  }
`;


export const SearchImg = styled.div`
  

`;




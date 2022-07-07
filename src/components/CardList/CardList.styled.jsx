import styled from "styled-components";

export const ContainerList = styled.div`

padding: 2em 0 2em 0;
 
  background-color: #ebd1e7;
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  grid-row-gap: 2em;
  justify-content: space-evenly;

 @media only screen and (max-width: 500px){
  grid-template-columns: 90%;
  justify-content: center;
} 
`;
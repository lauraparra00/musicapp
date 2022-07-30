import styled from "styled-components";


export const CardContainer = styled.div`
  color: rgb(7, 7, 24);
  background-color: rgb(243, 234, 228);
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
  border: #9a90a7 5px none;
  box-shadow: 2px 2px 5px #925dbc;


 
  @media screen and (max-width: 420px) {
    width: 250px;
    height: 390px;
    font-size: 1.4rem;
  }
 `;

export const ImageCard = styled.div`
  height: 250px;
  width: 250px;
  background-color: #caa9e6;
  
`;

export const CardText = styled.div`
  margin-bottom: 2%;
  color: #da48a9;
  font-size: 16px;
 
  @media screen and (max-width: 300px) {
    font-size: 1.25rem;
  }

`;

export const Title = styled.h2`
  font-family: "Cinzel", serif;
  font-weight: 900px;
  width: 100%;
  margin-top: 5%;
  color: #924fd1;
  display: flex;
  align-items: center;
  justify-content: center;

  
`;

export const Description = styled.p`
  font-family: "Cinzel", serif;
  display: flex;
  align-items: center;
  justify-content: center;

 
`;
export const ImageCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardIcons = styled.div`
  color: blue;

`;

export const EditButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  justify-content: space-around;
  margin-right: 2rem;
  width:  23%;
 
`;

export const DeleteButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  justify-content: space-around;
  margin-right: 2rem;
  width: 20%;

 
`;

export const EyeButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  justify-content: space-around;
  margin-right: 2rem;
  width: 18%;



`;

import styled from "styled-components";

export const CardContainer = styled.div`
  color: rgb(7, 7, 24);
  background-color: rgb(243, 234, 228);
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
  border: #9a90a7 5px none;
  box-shadow: 2px 2px 5px #790cb8;
  
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
`;

export const Title = styled.h2`
  font-family: "Cinzel", serif;
  font-weight: 900;
  width: 100%;
  margin-top: 5%;
  color: #924fd1;
`;

export const Description = styled.p`
  font-family: "Cinzel", serif;
`;
export const ImageCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardIcons = styled.div``;

export const EditButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
`;

export const EyeButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
`;

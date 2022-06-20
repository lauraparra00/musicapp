import styled from "styled-components";


export const CardContainer = styled.div`
   color:rgb(91, 91, 100);
   background-color: rgb(243, 234, 228);
   width: 250px;   
`;

export const ImageCard = styled.div`
    height: 250px;
    width: 250px;
    background-color: green;
    
`;



export const CardText = styled.div`
   width: 80%;  

`;

export const Title = styled.h2`
  font-family: 'Cinzel', serif;  

`;

export const Description = styled.p`
     font-family: 'Cinzel', serif;  

`;
export const ImageCardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`;

export const CardIcons = styled.div`
    width:  20%;
    display: flex;

`;

export const EditButton = styled.button`
    background-color: #a600ff;
    width: 25px;
    height: 25px;

`;

export const DeleteButton = styled.button`
    background-color: #23db76;
    width: 25px;
    height: 25px;
    
`;

export const EyeButton = styled.button`
    background-color: #802388;
    width: 25px;
    height: 25px;
`;
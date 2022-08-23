import styled from "styled-components";

export const Anchor = styled.a`
  text-decoration: none;
  color: #4c5a71;
`;

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

export const CommentButton = styled.button`
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

export const NumComment = styled.text`
  font-family: "Segoe UI";
font-size: 1.25em;
font-weight: 400;
color: #bfcce1;
@media screen and (max-width: 415px) {
    font-size: 1.25rem;
  }

`;

export const Avatar = styled.div`
width: 2.5em;
height: 2.5em;
border-radius: 50%;
border: none;
position: absolute;
bottom: 2.1em;
left: 1.1em;
z-index: 1;
overflow: hidden;
&:hover {
  width: 3.5em;
  height: 3.5em;
  transition: all 0.2s ease-in-out;
}
`;

export const AvatarImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
`;




export const CtUser = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-right: 2rem;
padding-bottom: none;
`;
export const TxtUser = styled.h5`
  display: flex;
  justify-content: center;
  text-shadow: 1px 1px 1px #bfcce1;
  `;
import React from "react";


import "./card.css";
import { CardContainer, CardIcons, CardText, DeleteButton, Description, EditButton, EyeButton, ImageCard, ImageCardImage, Title } from "./Card.styled";

export function Card  ({moment, deleteMoment})  {



 
  return (
  
    <CardContainer>
    <ImageCard>
    <ImageCardImage src = {moment.url}/>
    </ImageCard>
    <CardText>
        <Title> {moment.title}</Title>
        <Description> {moment.description}</Description>
    </CardText>
    <CardIcons>
        <EditButton> <i className="fa-solid fa-pen-to-square"></i></EditButton> 
        <DeleteButton onClick = { () =>deleteMoment(moment.id) }><i className="fa-solid fa-trash"></i></DeleteButton>
        <EyeButton><i className="fa-solid fa-eye"></i></EyeButton>
    </CardIcons>
 {/*      <div className="image-card">
        <img
          src="https://mail.google.com/mail/u/0?ui=2&ik=3ab806a510&attid=0.6&permmsgid=msg-a:r761211138147382019&th=1816703ebff7c718&view=att&disp=safe&realattid=18167000d0644b5ce1e5"
          alt="movie cover"
        />
      </div>
      <div className="card-inf">

        <div className="card-text">
          <h2 className="Title">Totxo Macana</h2>
          <p className= "Description">Primera Via 7c+/8a regraduada a 7c Sessió Continua-Montserrat</p>
          
        </div>

        <div className="card-icons">
          <button className="edit-button">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="delete-button">
            <i className="fa-solid fa-trash"></i>
          </button>
          <button className="eye-button">
            <i class="fa-solid fa-eye"></i> 
          </button>
        </div>
        
      </div> */}
   
    </CardContainer>
  );
}



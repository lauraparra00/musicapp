import React from "react";
import { Link } from "react-router-dom";

import {
  CardContainer,
  CardIcons,
  CardText,
  DeleteButton,
  Description,
  EditButton,
  EyeButton,
  ImageCard,
  ImageCardImage,
  NumComment,
  Title,
  Avatar,
  AvatarImg,
  CommentButton,
  CtUser,
  TxtUser,
  Anchor,
} from "./Card.styled";

export function Card({ deleteMoment, moment }) {
  return (
    <CardContainer>
      <ImageCard>
        <ImageCardImage src={moment.url} />
      </ImageCard>
      <CardText>
        <Title> {moment.title}</Title>
        <Description> {moment.description}</Description>
      </CardText>
      <CardIcons>
        <Link to={`/form/${moment.id}`}>
        <EditButton><i className="fa-solid fa-pen-to-square"></i></EditButton></Link>
        <DeleteButton onClick={() => deleteMoment(moment.id)}><i className="fa-solid fa-trash"></i></DeleteButton>
        <Link to={`/climbers/${moment.id}`}>
        <EyeButton><i className="fa-solid fa-eye"></i></EyeButton>
        </Link>

        <Anchor href={`/moment/${moment.id}`}>
          <CommentButton>
            <i className="fa-solid fa-comments"></i>
          </CommentButton>
        </Anchor>
        <Avatar>
          <AvatarImg
            src={moment.photographer.avatar}
            alt={moment.photographer.userName}
          />
        </Avatar>

        <CtUser>
          <TxtUser>{moment.photographer.userName}</TxtUser>
        </CtUser>

        <NumComment> {moment.commentsCount} </NumComment>
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
export default Card;

import { commentServices } from "../../services/commentServices";
import { Navbar } from "../navbar/Navbar";
import {Link, useParams} from "react-router-dom";
import React, { useEffect } from "react";
import {CardContainer,CardMoment, Img,CardText, TextTitle, TextDescription, Text, CtComments,TextComments, TxComments} from "./CardDesc.styled";
import { useState } from "react";
import { momentsServices } from "../../services/momentsServices";


export function CardDesc () {
   const [moment, setMoment] = useState ([]);
   const [comments, setComments] = useState ([]);
   const { id } = useParams ();

   useEffect(() => {
    getMomentById(id);
    }, [id]);

    useEffect(() => {
     if(!comments) return
    }, [comments])

    const getMomentById = (id) => {
        momentsServices.getMomentById(id).then((res) => {
            if (res) {
                setMoment (res);
                getCommentsByMomentId();
            }
        });
    };

    const getCommentsByMomentId = () => {
        commentServices.getCommentsByMomentId(id).then((res)=> {
        setComments(res);
    })
}

    return (

    
    <CardContainer>
        <CardMoment>
           <Img src= {`${moment.url}`} alt="Card-cover"/>
        </CardMoment>   
         <CardText>
             <TextTitle>{`${moment.title}`}</TextTitle>
             <TextDescription>{`${moment.description}`}</TextDescription>
             <Text>Lorem ipsum dolor sit amet</Text>
         </CardText> 
          <CtComments>
            <TextComments>Activitats a la montanya</TextComments>
            {comments.map((comment,key) => (
             <TxComments key= {key} comment={comment}>{comment.comment}</TxComments>
            ))}
            </CtComments>
             
    </CardContainer> 
);
}
export default CardDesc;
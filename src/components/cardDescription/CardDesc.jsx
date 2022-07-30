
import { momentsServices } from "../../services/momentsServices";
import { Navbar } from "../navbar/Navbar";
import {Link, useParams} from "react-router-dom";
import React from "react";
import {CardContainer,CardMoment, Img,CardText, TextTitle, TextDescription, Text} from "./CardDesc.styled";


export const CardDesc = ({moment}) => {
   


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
                      
                          
               
            
         
     </CardContainer> 
   
    
    );
}
export default CardDesc;
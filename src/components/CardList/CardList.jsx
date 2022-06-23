import { useEffect, useState } from "react"
import { momentsServices } from "../../services/momentsServices";
import {Card} from "../card/Card";
import {ContainerList} from "./CardList.styled";

export const CardList = ()=> {
    const [moments, setMoments]= useState ([]);

    useEffect(()=>{
        getAllMoments();
    },[]);
    const getAllMoments = ()=>{momentsServices.getAllMoments().then((res)=>{setMoments(res);})}
    return (
     <ContainerList>
       {moments.map((moment, key)=>(<Card moment= {moment}key ={key}/>))}
     
       </ContainerList>
       
    );
}

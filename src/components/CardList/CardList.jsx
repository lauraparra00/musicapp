import { useEffect, useState } from "react";
import { momentsServices } from "../../services/momentsServices";
import { Card } from "../card/Card";
import { ContainerList } from "./CardList.styled";
import React from "react";

export const CardList = () => {
  const [moments, setMoments] = useState([]);

  useEffect(() => {
    getAllMoments();
  }, []);

  const getAllMoments = () => {
    momentsServices.getAllMoments().then((res) => {
      setMoments(res);
    });
  };

  const deleteMoment = (id) => {
   
    momentsServices.deleteMoment(parseInt(id)).then((res) => {

        if (res){
            getAllMoments();
        }
    })
  };

  return (
    <ContainerList>
      {moments.map((moment, key) => (
        <Card moment={moment} key={key} deleteMoment={deleteMoment}/>
      ))}
    </ContainerList>
  );
};

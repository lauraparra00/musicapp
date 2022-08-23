import { useEffect, useState } from "react";
import { momentsServices } from "../../services/momentsServices";
import { Card } from "../card/Card";
import { ContainerList } from "./CardList.styled";
import React from "react";
import { Create } from "../create/Create";

export const CardList = () => {
  const [moments, setMoments] = useState([]);
  const [viewform, setViewform] = useState(false);
  const [editedMoment, setEditedMoment] = useState({title:"", description:"", url:"" });
  const [editMode, setEditMode] = useState(false);

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
      console.log (res)
      getAllMoments()
      // setMoments([...moments, res])
    })
  };


  const openForm = () => {
    if (viewform) setViewform(false);
    else setViewform(true);
    setEditMode(false);
  }


  const editMoment = (id) => {
    openForm(); 
    let editedMoment = moments.find((moment) =>moment.id === id);
    setEditedMoment (editedMoment) 
    setEditMode (true)
  }

  const updateMoment = (newMoment) => {
    momentsServices.updateMoment(newMoment.id, newMoment).then((res) =>{ 
      let editedMoment = moments.map((moments) => moments.id === newMoment.id ? newMoment:moments);
      setMoments(editedMoment);
  });
    openForm();
  }
  const createMoment =(data) => {
    momentsServices.createMoment(parseInt(data)).then((res) =>{
       
        if (res){
          createMoment();
        }

    })
  }

  



  
  return (
    <ContainerList>
      {viewform ? <Create createMoment={createMoment}editedMoment={editedMoment}updateMoment={updateMoment}editMode={editMode} /> : ""}
      {moments.map((moment, key) => (
        <Card moment={moment} key={key} deleteMoment={deleteMoment} editMoment={editMoment}/>
        
      ))}
    </ContainerList>
  );
};


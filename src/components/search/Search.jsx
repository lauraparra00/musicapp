import React, { useEffect } from "react";
import { useState } from "react";
import { momentsServices } from "../../services/momentsServices";
import { Container1, Img, SearchImg, } from "./Search.styled";


export const Search = () => {
  const [searchField, setSearchField] = useState("");
  const [filteredMoments, setFilteredMoments] = useState([]);
  const [moments, setMoments] = useState([]);

  
  useEffect(() => {
    getAllMoments();
  }, []);

  
  const getAllMoments = () => {
    momentsServices.getAllMoments().then((res) => {
      setMoments(res);
    });
  };

  const search = (data) => {
    momentsServices.getBySearch(data).then((res) =>{
        if(res) {setFilteredMoments(res);
        }
    })
  }

  const handleChange = (e) => {
    setSearchField(e.target.value);
        search(searchField);
  };

  return (
    <>
   
    <Container1>
    
   
     

    <input
      typeof="searchField"
      value={searchField}
      name="searchField"
      onChange={handleChange}
    />
       
 {filteredMoments.map((moment, key) =>(<SearchImg><Img src= {moment.url}></Img></SearchImg>))}


    

 </Container1>

   </>
  ) 
}

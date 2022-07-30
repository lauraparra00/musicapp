import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { momentsServices } from "../../services/momentsServices";
import { AppHeader, ButtonSubmit} from "./Create.styled";


export const Create = () => {
  const [moment, setMoment] = useState({
    title: "",
    imgUrl: "",
    description: "",
  }
);
  const [moments, setMoments] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    getAllMoments();
  }, [moments]);

  const getAllMoments = () => {
    momentsServices.getAllMoments().then((res) => {
      
      setMoments(res);
    });
  };

  const handleChange = (e) => {
    setMoment({
      ...moment,
      [e.target.name]: e.target.value,
    });
  };

  const resetImput = () => {
    setMoment(
     {
        title: "",
        url: "",
        description: "",
      },
    
)

  }

  const onclickHandle = (e) => {
    e.preventDefault();
    addMoment(moment);
    resetImput();
  };

  const addMoment = (data) => {
    momentsServices.createMoment(data).then((res) => {navigate ("/")} );
  }


  return (
    <div>
    
        <AppHeader>
       
      <h3> Create </h3>
      <label>Title:</label>
      <br />
      <input 
        name = "title"
        type="text"
        value={moment.title}
        required
        onChange= {handleChange}
        
      />
      <br />

      <label>Description:</label>
      <br />
      <input
        name = "description"
        type= "text"
        value={moment.description}
        required
        onChange= {handleChange}
      />
      <br />

      <label>Url:</label>
      <br />
      <input
        name= "url"
        type= "url"
        value={moment.url}
        required
        onChange= {handleChange}
      />
      <br />
      <ButtonSubmit  onClick={onclickHandle} type="button" value="Submit" >Create</ButtonSubmit> 
     
      </AppHeader>
      
    </div>
  );
};

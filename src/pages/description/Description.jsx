import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { CardDesc } from "../../components/cardDescription/CardDesc";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { momentsServices } from "../../services/momentsServices";

export const Description = () => {
  const [moment, setMoment] = useState();
  const id = useParams().id;

  useEffect(() => {
    getMomentById();
  }, [id]);

  const getMomentById = () => {
    momentsServices.getMomentById(id).then((res) => {
      setMoment(res);
    });
  };
  console.log(id);
  return (
    <div>
      <Navbar />
      {moment ? <CardDesc moment={moment} /> : null}
    </div>
  );
};

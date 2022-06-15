import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="card-container">
      <div className="image-card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Optical-dispersion.png/800px-Optical-dispersion.png"
          alt="movie cover"
        />
      </div>
      <div className="card-inf">

        <div className="card-text">
          <h2>The Dark Side of the Moon</h2>
          <h3>The Pink Floyd</h3>
          <p>1973</p>
        </div>

        <div className="card-icons">
          <button className="edit-button">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="delete-button">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Card;

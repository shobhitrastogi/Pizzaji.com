// MenuItems.js
import React from "react";
import { Link } from "react-router-dom";
const MenuItems = ({ image, name, price }) => {
  return (
    <>
     
      
      <div class="card " style={{ width: " 18rem" }}>
        <div className="row">
        <img src={image} class="card-img-top " alt="..." />

        </div>
        <div class="card-body ">
          <h5 class="card-title" >{name}</h5>
          <p class="card-text">{price}</p>
          <Link to="/" class="btn btn-primary btn-dark">
     Order Now 
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuItems;

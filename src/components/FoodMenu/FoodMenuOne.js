import React from 'react';
import { urlFor } from '../../lib/client';

const FoodMenuOne = ({ name, bezeichnung, price, image }) => {
  //console.log(image.asset.url);
  return (
    <div className="box" data-aos="zoom-in-down">
      <div className="image">
        <img src={image} alt="fsaf" />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>{bezeichnung}</p>

        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default FoodMenuOne;

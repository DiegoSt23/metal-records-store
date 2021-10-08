import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useShoppingCartContext from '../../context/shoppingCart/useShoppingCartContext';

function AddedProduct({image, album, artist, price, id, amount, index}) {
  const { dispatch } = useShoppingCartContext();
  const [payload, setPayload] = useState({});

  useEffect(() => {
    setPayload({price, id, amount, index})
  }, [price, id, amount, index]);

  return (
    <div className="added-product-container">
      <div className="container-1">
        <div className="added-image-container">
          <img src={image} alt={album} className="added-image"/>
        </div>
        <div className="added-details-container">
          <h3>{album}</h3>
          <h4>{artist}</h4>
          USD$ {price}
        </div>
      </div>
      <div className="container-2">
        x{amount}                       
      </div>
      <div className="container-2">
        USD$ {price * amount}
      </div> 
      <div className="container-2">
        <FontAwesomeIcon icon={faTrash} style={{color: "red", cursor: "pointer"}} onClick={() => dispatch({type: "REMOVE", payload})} />
      </div>     
    </div>
  );
}

export default AddedProduct;
import { useState, useEffect } from 'react';
import useShoppingCartContext from '../../context/shoppingCart/useShoppingCartContext';
import useProductIndex from '../../context/ProductIndex/useProductIndex';
import { AiOutlinePlus } from "react-icons/ai"
import { VscCircleSlash } from "react-icons/vsc"
import { motion } from "framer-motion"

function Product({id, artist, album, image, stock, price, index, modalOpen, close, open}) {
  const { state, dispatch } = useShoppingCartContext();
  const { changeIndex } = useProductIndex();
  const [payload, setPayload] = useState({});
  const [dispatchStatus, setDispatchStatus] = useState("ADD");

  useEffect(() => {
    setPayload({
      id,
      artist,
      album,
      image,
      price,       
      index,
      stock,
      amount: 1
    })
  }, [id, artist, album, image, price, index, stock]);

  const handleModalOpen = () => {
    changeIndex(index);
    modalOpen ? close() : open();
  };
 
  useEffect(() => {   
    if (state.items.some((item) => item.id === id)) {         
      setDispatchStatus("ADD_REPEATED_ITEM")  
    } else {         
      setDispatchStatus("ADD")     
    }    
  }, [state.items, id]);
  
  return (
    <div className="product-container">
      <section className="image-container">
        <motion.div onClick={handleModalOpen} style={{cursor: "pointer"}}>
          <img src={image} alt={album} className="image"/>
          <div className="overlay">
            <h5>MORE INFO</h5>
          </div>
        </motion.div>       
      </section>
      <section className="info-container">
        <h3>{album}</h3>
        <h4>{artist}</h4>                
      </section>  
      <section className="actions-container"> 
        <div>
          <p>USD$ {price}</p>
          {stock > 0
            ? <p>Stock: {stock}</p>
            : <p>Out of stock</p>
          }          
        </div> 
        {stock > 0
          ? <AiOutlinePlus className="add-icon" onClick={() => dispatch({type: dispatchStatus, payload})}/>
          : <VscCircleSlash className="forbidden-icon"/>
          }             
      </section>    
    </div>
  );
}

export default Product;
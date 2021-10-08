import "../../styles/ProductDetails.css";
import { useState, useEffect } from "react";
import useShoppingCartContext from "../../context/shoppingCart/useShoppingCartContext";
import useProductIndex from "../../context/ProductIndex/useProductIndex";
import Backdrop from "./Backdrop";
import {motion} from "framer-motion";
import {AiOutlineClose} from "react-icons/ai"

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 35,
      stiffness: 300
    }
  },
  exit: {
    y: "100vh",
    opacity: 0
  }
};

function ProductDetails({handleClose}) {
  const { index } = useProductIndex();
  const { state } = useShoppingCartContext();
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [fullSizeImage, setFullSizeImage] = useState("");
  const [year, setYear] = useState("");
  const [label, setLabel] = useState("");
  const [songs, setSongs] = useState("");
  const [length, setLength] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {  
        setAlbum(state.products[index].album);
        setArtist(state.products[index].artist);
        setFullSizeImage(state.products[index].fullSizeImageUrl);
        setYear(state.products[index].year);
        setLabel(state.products[index].label);
        setSongs(state.products[index].songs);
        setLength(state.products[index].albumLength);
        setDescription(state.products[index].description);
      
  }, [index, state.products]);
  
  return (
    <Backdrop onClick={handleClose}>
      <motion.div 
        className="album-details-container"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <section className="art-container">
          <img src={fullSizeImage} alt={album} className="full-size-image"/>
        </section>
        <section className="main-info-container"> 
          <div className="info-sub-container">
            <h1>{album}</h1>
            <h2>{artist}</h2>          
            <div className="details-container">
              <h3>{year}</h3>
              <h3>{label}</h3> 
              <h3>{songs} songs</h3>
              <h3>{length}</h3>
            </div>  
            <div className="description-container">
              <p>{description}</p>
            </div>            
          </div>
          <div className="close-icon-container">
            <AiOutlineClose className="close-icon" onClick={handleClose}/>
          </div>          
        </section>            
      </motion.div>
    </Backdrop>
  );
}

export default ProductDetails;
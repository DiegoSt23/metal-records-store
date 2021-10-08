import "../../styles/Products.css";
import Product from "./Product";
import ProductDetails from "../productDetails/ProductDetails";
import useShoppingCartContext from "../../context/shoppingCart/useShoppingCartContext";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion"



function Products() {
  const { state } = useShoppingCartContext();
  const [displayStatus, setDisplayStatus] = useState(JSON.parse(localStorage.getItem("displayStatus")) || "flex");
  const [marginTop, setMarginTop] = useState(JSON.parse(localStorage.getItem("marginTop")) || "40px");
  const [modalOpen, setModalOpen] =useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const productsList = state.products.map((item, index) => 
    <Product 
      key={index} 
      id={item.id}
      artist={item.artist} 
      album={item.album} 
      image={item.imageUrl}
      stock={item.stock} 
      price={item.price}
      index={index}
      modalOpen={modalOpen}
      close={close}
      open={open}
    />
  );

  const handleCloseBanner = () => {
    setDisplayStatus("none");
    setMarginTop("150px")
  };

  useEffect(() => {
    localStorage.setItem("displayStatus", JSON.stringify(displayStatus));
    localStorage.setItem("marginTop", JSON.stringify(marginTop));
  }, [displayStatus, marginTop]);

  return (
    <>
      <div className="banner" style={{display: displayStatus}}>
        <div className="metal-records-logo-container">
          <img src="https://i.imgur.com/pMJw8K6.png" alt="metal-records" className="metal-records-logo"/>          
        </div>
        <p>FREE SHIPPING on orders over USD40!</p> 
        <div className="close-icon-container">
          <FontAwesomeIcon icon={faTimes} className="close-banner-icon" onClick={handleCloseBanner}/>
        </div>              
      </div>
      <div className="products-title" style={{marginTop: marginTop}}>
        <h2>All Products</h2>
      </div>       
      <div className="products-container">                    
        {productsList}     
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}      
      >
        {modalOpen && <ProductDetails modalOpen={modalOpen} handleClose={close}/>}
      </AnimatePresence>
    </>
  );
}

export default Products;
import "../../styles/ShoppingCart.css";
import AddedProduct from "./AddedProduct";
import useShoppingCartContext from "../../context/shoppingCart/useShoppingCartContext";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ShoppingCart() {
  const { state } = useShoppingCartContext();
 
  const addedProductsList = state.items?.map((item, index) => 
    <AddedProduct 
      key={index}
      image={item.image}
      album={item.album}
      artist={item.artist}
      price={item.price}
      id={item.id}
      amount={item.amount}
      index={item.index}
    />
  );

  return (
    <>
      {state.items.length > 0
        ? <div className="shopping-cart-container">
            <h2>Shopping Cart</h2>
            <p>Free shipping on orders over USD$40!</p>
            <section className="added-products-container">
              {addedProductsList}
              <div className="total-price-container">
                <div className="price-sub">
                  <h4>Products: ${state.totalPrice}</h4>
                  <h4>Shipping: ${state.totalPrice >= 40 ? 0 : 8}</h4>
                </div>
                <div>
                  <h3>Total: USD$ {state.totalPrice > 40 ? state.totalPrice : state.totalPrice + 8}</h3>                
                  <NavLink to="/shopping-cart/payment">
                    <button>Proceed to payment</button>
                  </NavLink>
                  </div>                            
              </div>          
            </section>        
          </div>
        : <div className="shopping-cart-message-container">
            <p>Your shopping cart is empty, you can go to <NavLink to="/" className="link">Products</NavLink> and use the <FontAwesomeIcon icon={faPlus} style={{color: "#ac9b51"}}/> icon to add products.</p>
          </div>
      }            
    </>
  );
}

export default ShoppingCart;
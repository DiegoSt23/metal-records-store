import "../styles/Header.css";
import {NavLink} from "react-router-dom";
import useShoppingCartContext from "../context/shoppingCart/useShoppingCartContext";
import { BsCart3 } from "react-icons/bs"

function Header() {
  const { state } = useShoppingCartContext();

  return (
    <header className="header">
      <div className="logo-container">
        <NavLink to="/">
          <img src="https://i.imgur.com/CwOPXYv.png" alt="logo" className="logo"/>
        </NavLink>        
      </div>
      <div className="options">
        <NavLink exact to="/" className="option" activeClassName="selected">
          <h4>Products</h4>
        </NavLink>        
        <NavLink to="/about" className="option" activeClassName="selected">
          <h4>About</h4>
        </NavLink> 
          <NavLink to="/shopping-cart" className="option" activeClassName="selected">
            <BsCart3 style={{fontSize: "1.2rem"}}/>
          </NavLink>         
          <h6 className="total-products">{state.totalProducts}</h6>
      </div>
    </header>
  );
}

export default Header;
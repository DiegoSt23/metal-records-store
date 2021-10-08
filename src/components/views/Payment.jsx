import "../../styles/Payment.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useUser from "../../context/user/useUser"
import useShoppingCartContext from "../../context/shoppingCart/useShoppingCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faApplePay,
  faPaypal,
  faAmazonPay,
  faGooglePay
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Payment() {
  const { state } = useShoppingCartContext();
  const { user } = useUser();
  console.log(state.totalPrice)
  const [messageDisplay, setMessageDisplay] = useState(false);

  const handleMessage = () => {
    setMessageDisplay(true)
  };

  return (
    <div className="payment-background">
      <div className="payment-container">
        <div className="back-icon-container">
          <NavLink to="/shopping-cart">
            <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ac9b51"}}/>
          </NavLink>          
        </div>
        <h2>Almost there {user}!</h2>
        <p>Actually no, this is only a demo, you can't buy nothing here, the fields below are useless. Sorry.</p>       
        <form>
          <h3>Total: USD$
            {state.totalPrice >= 40
              ? state.totalPrice
              : state.totalPrice + 8
            }
          </h3>
          <input placeholder="Card number"/>
          <input placeholder="Expiration date"/>
          <input placeholder="CVC"/>
        </form>
        <button onClick={handleMessage}>Puchase</button> 
        {messageDisplay
          ? <div className="error- message" style={{color: "red"}}> Not gonna happen.</div>
          : <></>
        }        
        <section className="payment-icons-container">
          <FontAwesomeIcon icon={faAmazonPay}/>
          <FontAwesomeIcon icon={faCcVisa}/>
          <FontAwesomeIcon icon={faGooglePay}/>         
          
          <FontAwesomeIcon icon={faApplePay}/>
          <FontAwesomeIcon icon={faPaypal}/>         
        </section>
      </div>     
    </div>
  );
}

export default Payment;
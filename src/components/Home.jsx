import Login from "./views/Login";
import Header from "./Header";
import Products from "./views/Products";
import ShoppingCart from "./views/ShoppingCart";
import Payment from "./views/Payment";
import About from "./views/About";
import Error from "./views/Error";
import useUser from "../context/user/useUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
  const { user } = useUser();

  return (
    <div>
      {user 
        ? <Router>
            <Header/>
            <Switch>         
              <Route exact path="/" component={Products}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/shopping-cart" component={ShoppingCart}/>
              <Route exact path="/shopping-cart/payment" component={Payment}/>
              <Route path="*" component={Error}/>                    
            </Switch>                            
          </Router>
        : <Login/>
      }          
    </div>
  );
}

export default Home;
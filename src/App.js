import "./styles/Global.css";
import Home from "./components/Home";
import UserProvider from "./context/user/UserProvider";
import ShoppingCartProvider from "./context/shoppingCart/ShoppingCartContext";
import ProductIndexProvider from "./context/ProductIndex/ProductIndexProvider";

function App() {
  return (
    <div className="main">
      <UserProvider>
        <ShoppingCartProvider>
          <ProductIndexProvider>
            <Home/>
          </ProductIndexProvider>
        </ShoppingCartProvider>  
      </UserProvider>      
    </div>
  );
}

export default App;


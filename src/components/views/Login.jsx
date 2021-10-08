import "../../styles/Login.css";
import { useState } from 'react';
import useUser from "../../context/user/useUser";

function Login() {
  const { addUserName } = useUser();
  const [value, setValue] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (value.length < 10) {
      addUserName(value)
    } else {
      alert("Enter less than 10 characters please")
    }   
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-logo-container">        
          <img src="https://i.imgur.com/aSwMjpc.png" alt="logo" className="logo"/>
        </div>
        <form>
          <input type="text" onChange={e => {setValue(e.target.value)}} placeholder="Please enter your first name"/>
          <button onClick={handleLogin}>GO</button> 
        </form> 
      </div>          
    </div>
  );
}

export default Login;
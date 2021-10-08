import {NavLink} from "react-router-dom"
function Error() {
  return (
    <div className="error-message">
      <p>This page can't be found. :c</p>
      <NavLink to="/">
        <button>Back Home</button> 
      </NavLink>          
    </div>
  );
}

export default Error;
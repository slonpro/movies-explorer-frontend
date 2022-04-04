import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginInContext } from "../contexts/AppContexts";
import Preloader from "./Preloader/Preloader";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const loginIn = React.useContext(LoginInContext);
  return (
    <Route>
      {() => {
        if (loginIn === null) {
          return <Preloader/>
        }
            if (loginIn === true) {
          return <Component {...props} />
        } else {
          return <Redirect to="/" />
        }
        
      
      }}
          </Route>
  );
};

      export default ProtectedRoute;


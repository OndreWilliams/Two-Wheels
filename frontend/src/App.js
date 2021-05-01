import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import ProductsGallery from "./components/ProductsGallery";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div >
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
            <Footer/>
          </Route>
          <Route path="/signup">
            <SignupFormPage />
            <Footer/>
          </Route>
          <Route path="/" exact>
            <ProductsGallery />
            <Footer/>
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
            <Footer/>
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;

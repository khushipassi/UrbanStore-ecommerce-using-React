import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./web/Home";
import Service from "./web/Service";
import About from "./web/About";
import Contact from "./web/Contact";
import Navbar from "./web/Navbar";
import Footer from "./web/Footer";
import "./web/index.css";
import Products from "./components/products/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/items/:product_id" component={Products} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

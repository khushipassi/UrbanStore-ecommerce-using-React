import React from "react";
import web from "../../src/images/1.jpg";
import Common from "./Common";

import tshirt from "../../src/images/tshirt.jpg";
import sweatshirt from "../../src/images/sweatshirt.jpeg";
import jeans from "../../src/images/jeans.jpg";

import "./index.css";

const Home = () => {
  return (
    <>
      <Common
        name="Shop with"
        imgsrc={web}
        visit="/service"
        discription="Get best quality at suitable price"
        btname="Get Started"
      />

      <div className="ourservices text-center bg-dark" id="services">
        <h1 className="text-warning">SERVICES</h1>
        <p className="text-white">What we provide?</p>

        <div className="row rowsetting">
          <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
            <div className="imgsetting d-block m-auto">
              <i className="fa fa-shopping-cart fa-3x bg-warning text-white"></i>
            </div>

            <h2 className="text-white"> E-commerce </h2>
            <div className="text-warning text-warning mb-3 mt-3">
              {" "}
              Urban Store is an e-commerce platform that allows you to buy and
              sell tangible goods, and products online. It is quick, easy and
              convenient. Place an order, do the payment and get items delivered
              in less than 5 days.
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
            <div className="imgsetting d-block m-auto">
              <i className="fa fa-desktop fa-3x bg-warning text-white"></i>
            </div>

            <h2 className="text-white"> Responsive Design</h2>
            <div className="text-warning mb-3 mt-3">
              Responsive Design is provided by Urban Store, this approach
              suggests that design and development responds to the user's
              behavior and environment based on screen size, platform and
              orientation.
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto">
            <div className="imgsetting d-block m-auto">
              <i className="fa fa-lock fa-3x bg-warning text-white"></i>
            </div>

            <h2 className="text-white"> Web Security </h2>
            <div className="text-warning mb-3 mt-3">
              Web security is provided by Urban Store, this approach suggests
              that the website is secure, we control access, protects users from
              threats, and secures their sensitive data.
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div className="port bg-white" id="port" mb-5>
        <div className="container text-center">
          <h1 className="text-warning">DISCOUNT</h1>
          <p className="text-black">Discount offer available on items</p>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={tshirt} className="card-img img-fluid" alt="p1" />
                <div className="card-body">
                  <h2 className="card-tiltle"> T-shirt </h2>
                  <p className="card-text font-weight-bold"> 20% off </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={sweatshirt} className="card-img img-fluid" alt="p2" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Sweatshirt </h2>
                  <p className="card-text font-weight-bold"> 10% off </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={jeans} className="card-img img-fluid" alt="p3" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Jeans </h2>
                  <p className="card-text font-weight-bold"> 10% off </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

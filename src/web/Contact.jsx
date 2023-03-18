import React, { useState } from "react";
import help from "../../src/images/help.jpg";
import Common from "./Common";

import p1 from "../../src/images/europe.png";
import p2 from "../../src/images/TajMahal.png";
import p3 from "../../src/images/america.png";

import "./index.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: ""
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}.`
    );
  };

  return (
    <>
      <Common
        name="Helping hand"
        imgsrc={help}
        visit="/#help"
        btname="Contact Now"
        discription="We are here for your help"
      />

      <div className="bg-dark" id="help">
        <div className="my-5 pt-5">
          <h1 className="text-center text-warning font-weight-bold">
            ASK YOUR QUERY
          </h1>
        </div>
        <div className="container contact_div mb-5">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label className="form-label text-white">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="mobile number"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-warning btn-lg fw-bold mt-4 mb-5"
                    type="submit"
                  >
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="port bg-white" id="port" mb-5>
        <div className="container text-center">
          <h1 className="text-warning">AREAS OF SERVICE</h1>
          <p className="text-black">Areas where we provide offline stores</p>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p1} className="card-img img-fluid" alt="p1" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Europe </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p2} className="card-img img-fluid" alt="p2" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Asia </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p3} className="card-img img-fluid" alt="p3" />
                <div className="card-body">
                  <h2 className="card-tiltle"> America </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

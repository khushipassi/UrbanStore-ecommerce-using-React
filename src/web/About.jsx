import React from "react";
import web from "../../src/images/2.jpg";
import Common from "./Common";
import p1 from "../../src/images/p1.PNG";
import p2 from "../../src/images/p2.PNG";
import p3 from "../../src/images/p3.PNG";
import p4 from "../../src/images/p4.PNG";
import p5 from "../../src/images/p5.PNG";
import p6 from "../../src/images/p6.PNG";

import hw from "../../src/images/t1.jpg";
import ho from "../../src/images/t2.jpg";
import ass from "../../src/images/t3.jpg";

import "./index.css";

const About = () => {
  return (
    <>
      <Common
        name="Get to know"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
        discription="Explore our work and our team"
      />

      <section className="portfolio bg-dark" id="portfolio" mb-5>
        <div className="container text-center">
          <h1 className="text-warning">PORTFOLIO</h1>
          <p className="text-white">Here is a preview of our work</p>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p1} className="card-img img-fluid" alt="p1" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Threads </h2>
                  <p className="card-text"> Illustration </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p2} className="card-img img-fluid" alt="p2" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Explore </h2>
                  <p className="card-text"> Graphic Design </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p3} className="card-img img-fluid" alt="p3" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Finish </h2>
                  <p className="card-text"> Identity </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p4} className="card-img img-fluid" alt="p4" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Lines </h2>
                  <p className="card-text"> Branding </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p5} className="card-img img-fluid" alt="p5" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Southwest </h2>
                  <p className="card-text"> Website Design </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img src={p6} className="card-img img-fluid" alt="p6" />
                <div className="card-body">
                  <h2 className="card-tiltle"> Window </h2>
                  <p className="card-text"> Photography </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ourteam bg-light" id="ourteam">
        <div className="container text-center">
          <h1 className="text-warning"> OUR AMAZING TEAM </h1>
          <p className="text-black">
            {" "}
            Meet our team having best combination of talent, skills and attitude
            that add up to great performance..{" "}
          </p>

          <div className="row teamsetting">
            <div className="col-lg-4 col-md-4 col-sm-10 col-12 d-block m-auto">
              <figure className="figure">
                <img
                  src={hw}
                  className="figure-img img-fluid rounded-circle"
                  height="250px"
                  width="250px"
                  alt="web"
                />
                <figcaption>
                  <h4 className="text-black"> Kaycee Rice </h4>
                  <p className="figure-caption">Lead Designer</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-10 col-12 d-block m-auto">
              <figure className="figure">
                <img
                  src={ho}
                  className="figure-img img-fluid rounded-circle"
                  height="250px"
                  width="250px"
                  alt="web"
                />
                <figcaption>
                  <h4 className="text-black"> Josh Price </h4>
                  <p className="figure-caption">Web Developer</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-10 col-12 d-block m-auto">
              <figure className="figure">
                <img
                  src={ass}
                  className="figure-img img-fluid rounded-circle"
                  height="250px"
                  width="250px"
                  alt="web"
                />
                <figcaption>
                  <h4 className="text-black"> Bailey Sok </h4>
                  <p className="figure-caption">Lead Designer</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

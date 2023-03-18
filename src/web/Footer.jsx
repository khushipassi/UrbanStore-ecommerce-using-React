import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer text-center bg-dark" id="contact">
        <h1 className="text-white">CONTACT</h1>
        <div className="jumbotron text-center bg-dark">
          <a href="https://www.instagram.com/">
            <i className="fa fa-instagram fa-3x text-warning m-5"></i>
          </a>
          <a href="https://www.youtube.com/">
            <i className="fa fa-youtube fa-3x text-warning m-4"></i>
          </a>
          <a href="https://in.linkedin.com/">
            <i className="fa fa-linkedin fa-3x text-warning m-5"></i>
          </a>
        </div>

        <h6 className="w-100 bg-dark text-center">
          <p className="text-white">
            Copyright Ⓒ 2021, Designed by Urban Store. All Rights Reserved |
            Terms and Conditions
          </p>
        </h6>
      </footer>
    </>
  );
};

export default Footer;

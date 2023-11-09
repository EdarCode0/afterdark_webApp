import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block text-white">
          <span>Get connected with us on social networks:</span>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 ml-5"></h6>
              <p className="decor text-white">
                "Thank you for visiting AfterDark. We appreciate your time and
                interest. If you have any questions or feedback, please don't
                hesitate to contact us. Have a wonderful day!"
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#home-page" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#about-page" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#services" className="text-reset">
                  Services
                </a>
              </p>
              <p>
                <a href="#contact" className="text-reset">
                  Contact
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p></p>
              <a href="tel:+35569993133"></a>
              <p></p>

              <p>
                <i className="bi bi-house-door-fill"></i> 3549 Cedar Run Road,
                Abilene TX, United States.
              </p>
              <a href="tel:+1(202)499-8310"></a>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright: <a className="afterdark">AFTERDARK</a>
      </div>
    </footer>
  );
};

export default Footer;

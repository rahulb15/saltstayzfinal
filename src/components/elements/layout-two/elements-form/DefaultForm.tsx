import React from "react";

const DefaultForm = () => {
  return (
    <>
      <section className="bd-element-button section-space">
        <div className="container">
          <div
            className="row align-items-center justify-content-center wow bdFadeInUp"
            data-wow-delay=".3s"
          >
            <div className="col-lg-12">
              <div className="section-title-wrapper section-title-space text-center">
                <div className="elements-section__wrapper elements-line">
                  <div className="separator__line line-left"></div>
                  <div className="elements-title__wrapper">
                    <h2 className="section__title elements__title">
                      Default Form
                    </h2>
                  </div>
                  <div className="separator__line line-right"></div>
                </div>
                <p className="muted-text"></p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="row g-5 align-items-center justify-content-center">
                <div className="col-lg-6 text-center">
                  <div className="form-input-box">
                    <div className="form-input">
                      <input
                        name="fname"
                        id="fname"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <div className="form-input-box">
                    <div className="form-input">
                      <input
                        name="lname"
                        id="lname"
                        type="text"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <div className="form-input-box">
                    <div className="form-input">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 text-center">
                  <div className="form-input-box">
                    <div className="form-input">
                      <input
                        name="name"
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <div className="form-input-box">
                    <div className="form-input">
                      <textarea
                        name="name"
                        placeholder="Your Message"
                      ></textarea>
                      <div className="">
                        <span>
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DefaultForm;

import CountUpContent from "@/elements/counter/CountUpContent";
import React from "react";

const CounterStyleFive = () => {
  return (
    <>
      <section className="bd-counter-area section-space fix">
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
                      Counter Style 5
                    </h2>
                  </div>
                  <div className="separator__line line-right"></div>
                </div>
                <p className="muted-text"></p>
              </div>
            </div>
          </div>
          <div className="row gy-24">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="counter-wrapper counter-style-four">
                <div className="counter-item">
                  <div className="counter-content">
                    <span className="counter-icon bg-two">
                      <i className="icon-location-crosshairs"></i>
                    </span>
                    <h2>
                      <span
                        data-purecounter-duration="1"
                        data-purecounter-end="369"
                        className="purecounter"
                      >
                        <CountUpContent number={369} text="+" />
                      </span>
                    </h2>
                    <p>Total Destination</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="counter-wrapper counter-style-four">
                <div className="counter-item">
                  <div className="counter-content">
                    <span className="counter-icon bg-two">
                      <i className="icon-campaigns"></i>
                    </span>
                    <h2>
                      <span
                        data-purecounter-duration="1"
                        data-purecounter-end="950"
                        className="purecounter"
                      >
                        <CountUpContent number={950} text="+" />
                      </span>
                    </h2>
                    <p>Campaigns Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="counter-wrapper counter-style-four">
                <div className="counter-item">
                  <div className="counter-content">
                    <span className="counter-icon bg-two">
                      <i className="icon-circle-user"></i>
                    </span>
                    <h2>
                      <span
                        data-purecounter-duration="1"
                        data-purecounter-end="720"
                        className="purecounter"
                      >
                        <CountUpContent number={720} text="+" />
                      </span>
                    </h2>
                    <p>Our Volunteer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
              <div className="counter-wrapper counter-style-four">
                <div className="counter-item">
                  <div className="counter-content">
                    <span className="counter-icon bg-two">
                      <i className="icon-balloons"></i>
                    </span>
                    <h2>
                      <span
                        data-purecounter-duration="1"
                        data-purecounter-end="600"
                        className="purecounter"
                      >
                        <CountUpContent number={600} text="+" />
                      </span>
                    </h2>
                    <p>Happy Traveler</p>
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

export default CounterStyleFive;

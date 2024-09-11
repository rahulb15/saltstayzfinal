import Link from "next/link";
import React from "react";

const DefaultButton = () => {
  return (
    <>
      <section className="element-button section-space fix">
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
                      Default Buttons
                    </h2>
                  </div>
                  <div className="separator__line line-right"></div>
                </div>
                <p className="muted-text">
                  If you want to add different color button variations, add the
                  class name to your HTML. Below the button is the name of the
                  class.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-start justify-content-start mb-30">
            <div className="col-lg-2">
              <Link href="#" className="bd-primary-btn btn-style radius-60">
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style btn-secondary radius-60"
              >
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style btn-tertiary radius-60"
              >
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style btn-quaternary radius-60"
              >
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style bd-success radius-60"
              >
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style bd-danger radius-60"
              >
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
              </Link>
            </div>
          </div>
          <div className="row align-items-center justify-content-center mb-30">
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style has-arrow radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style btn-secondary has-arrow radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style btn-tertiary has-arrow radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style btn-quaternary has-arrow radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style bd-success has-arrow radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style bd-danger has-arrow radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style has-arrow is-bg radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style has-arrow is-bg btn-secondary radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style has-arrow is-bg btn-tertiary radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style has-arrow is-bg btn-quaternary radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style has-arrow is-bg bd-success radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link
                href="#"
                className="bd-primary-btn btn-style has-arrow is-bg bd-danger radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Modern Button</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DefaultButton;

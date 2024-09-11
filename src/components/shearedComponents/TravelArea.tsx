"use client";
import React, { useState } from "react";
import travelShapeTwo from "../../../public/assets/images/shapes/plane-2.png";
import travelShapeThree from "../../../public/assets/images/shapes/camera.png";
import travelShapeFour from "../../../public/assets/images/shapes/line-circle.png";
import travelShapeFive from "../../../public/assets/images/shapes/circle-bg-3.png";
import travelShapeSix from "../../../public/assets/images/shapes/stone.png";
import { imageLoader } from "@/hooks/image-loader";
import Image from "next/image";
import Link from "next/link";
import { travelData } from "@/data/travel-data";
import ModalVideo from "react-modal-video";

const TravelArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="bd-travel-area theme-bg-secondary section-space p-relative">
        <div className="container">
        <div className="travel-shape">
            <div className="travel-shape-one">
              <svg
                className="line-dash"
                width="62"
                height="189"
                viewBox="0 0 62 189"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.8463 1.88108C24.1532 4.12571 3.23706 24.8596 3.65598 39.628C4.54894 71.1079 29.5088 91.5168 46.4287 114.553C86.0696 168.522 21.3918 196.8 1.31736 185.21"
                  stroke="#FFF8E6"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
            <div className="travel-shape-two">
              <Image
                src={travelShapeTwo}
                loader={imageLoader}
                style={{ width: "100%", height: "auto" }}
                alt="shape"
              />
            </div>
            <div className="travel-shape-three">
              <Image
                src={travelShapeThree}
                loader={imageLoader}
                style={{ width: "100%", height: "auto" }}
                alt="shape"
              />
            </div>
            <div className="travel-shape-four">
              <Image
                src={travelShapeFour}
                loader={imageLoader}
                style={{ width: "100%", height: "auto" }}
                alt="shape"
              />
            </div>
            <div className="travel-shape-five">
              <Image
                src={travelShapeFive}
                loader={imageLoader}
                style={{ width: "100%", height: "auto" }}
                alt="shape"
              />
            </div>
            <div className="travel-shape-six">
              <Image
                src={travelShapeSix}
                loader={imageLoader}
                style={{ width: "100%", height: "auto" }}
                alt="shape"
              />
            </div>
          </div>
          <div className="row gy-24 align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <div className="travel-section">
                <div className="popup-vido mb-40">
                  <button
                    onClick={() => {
                      openVideoModal();
                    }}
                    className="bd-play-btn btn-tertiary popup-video animation-two theme-bg"
                  >
                    <i className="icon-play"></i>
                  </button>
                </div>
                <div className="section-title-wrapper is-white mb-35">
                  <span className="section-subtitle text-warning mb-10">
                    Experience Saltstayz
                  </span>
                  <h2 className="section-title mb-15">
                    Contemporary Comfort in Urban Settings
                  </h2>
                  <p>
                    Discover our unique and immersive experience, perfect for both business and leisure travelers. Enjoy best-in-class event spaces and reliable accommodation without compromising on quality.
                  </p>
                </div>
                <div className="travel-btn">
                  <Link
                    href="#"
                    className="bd-primary-btn btn-style has-arrow is-bg radius-60"
                  >
                    <span className="bd-primary-btn-arrow arrow-right">
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                    <span className="bd-primary-btn-text">Book Now</span>
                    <span className="bd-primary-btn-circle"></span>
                    <span className="bd-primary-btn-arrow arrow-left">
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="row gy-24">
                {travelData &&
                  travelData.map((item) => (
                    <div key={item.id} className="col-lg-6 col-sm-6">
                      <div className="travel-wrapper">
                        <div className="travel-item">
                          <div className="travel-icon">
                            <span>
                              <i className={item.travelIcon}></i>
                            </span>
                          </div>
                          <h5 className="travel-title white-text underline-two">
                            <Link href="/room-details">
                              {item.travelTitle === "Adventure" ? "Comfortable Rooms" :
                               item.travelTitle === "Wildlife" ? "Event Spaces" :
                               item.travelTitle === "Trekking" ? "Business Facilities" :
                               "Dining Options"}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="f1CBrXtfNMA"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default TravelArea;
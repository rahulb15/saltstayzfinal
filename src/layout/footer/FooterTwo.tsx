"use client";
import Image from "next/image";
import React from "react";
import palmTree from "../../../public/assets/images/shapes/palm-tree-group.png";
import palmTreeTwo from "../../../public/assets/images/shapes/palm-tree-group-2.png";
import logoBlack from "../../../public/assets/images/logo/logo-black.svg";
import googleStore from "../../../public/assets/images/app/google-store-icon.png";
import appStore from "../../../public/assets/images/app/app-store-icon.png";
import visa from "../../../public/assets/images/icons/visa.png";
import master from "../../../public/assets/images/icons/master.png";
import applePay from "../../../public/assets/images/icons/apple-pay.png";
import paypal from "../../../public/assets/images/icons/paypal.png";
import amex from "../../../public/assets/images/icons/amex.png";
import { imageLoader } from "@/hooks/image-loader";
import Link from "next/link";

const FooterTwo = () => {
  return (
    <>
      <footer className="bd-footer-area footer-bg-two fix">
        <div className="footer-shape">
          <div className="footer-shape-three">
            <Image
              src={palmTree}
              loader={imageLoader}
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
          </div>
          <div className="footer-shape-four">
            <Image
              src={palmTreeTwo}
              loader={imageLoader}
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
          </div>
        </div>
        <div className="section-space">
          <div className="container">
            <div className="row gy-24">
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget footer-2-col-1">
                  <div className="footer-widget-logo mb-40">
                    <Link href="/">
                      <Image
                        src={logoBlack}
                        loader={imageLoader}
                        style={{ width: "auto", height: "auto" }}
                        alt="logo not found"
                      />
                    </Link>
                  </div>
                  <div className="footer-widget-content">
                    <p>
                      Welcome to Saltstayz, your gateway to unforgettable
                      adventures and immersive travel experiences. Explore with
                      us and let your journey begin!
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap--5">
                      <span className="b6">Follow Us:</span>
                      <div className="theme-social">
                        <Link href="https://www.facebook.com/">
                          <i className="icon-facebook"></i>
                        </Link>
                        <Link href="https://www.twitter.com/">
                          <i className="icon-twitter-x"></i>
                        </Link>
                        <Link href="https://www.linkedin.com/">
                          <i className="icon-linkedin"></i>
                        </Link>
                        <Link href="https://www.youtube.com/">
                          <i className="icon-youtube"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget footer-2-col-2">
                  <h5 className="footer-widget-title">Company</h5>
                  <div className="footer-widget-links">
                    <ul>
                      <li className="underline">
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className="underline">
                        <Link href="/contact">Careers</Link>
                      </li>
                      <li className="underline">
                        <Link href="/team">Travel Guides</Link>
                      </li>
                      <li className="underline">
                        <Link href="/tour-details">Traveler Review</Link>
                        <span className="bd-badge warning">New</span>
                      </li>
                      <li className="underline">
                        <Link href="/contact">Contact Now</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-sm-6">
                <div className="footer-widget footer-2-col-3">
                  <h5 className="footer-widget-title">Service</h5>
                  <div className="footer-widget-links">
                    <ul>
                      <li className="underline">
                        <Link href="/destinations-grid-right">
                          Destinations
                        </Link>
                      </li>
                      <li className="underline">
                        <Link href="/tour-listing">Tour Listing</Link>
                      </li>
                      <li className="underline">
                        <Link href="/booking">Tour Booking </Link>
                      </li>
                      <li className="underline">
                        <Link href="/team">Travel Agents</Link>
                      </li>
                      <li className="underline">
                        <Link href="/contact">Help</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget footer-2-col-4">
                  <h5 className="footer-widget-title  mb-15">Mobile Apps</h5>
                  <div className="footer-btn mb-35 pt-5">
                    <div className="googple-play-btn mb-15">
                      <Link
                        href="https://codecanyon.net/item/eduman-react-native-android-ios-education-template/48934019?s_rank=3"
                        target="_blank"
                        className="app-btn"
                      >
                        <div className="app-thumb">
                          <Image
                            src={googleStore}
                            loader={imageLoader}
                            style={{ width: "100%", height: "auto" }}
                            alt="app"
                          />
                        </div>
                        <div className="content">
                          <span>get it on</span>
                          <h6>Google Play</h6>
                        </div>
                      </Link>
                    </div>
                    <div className="apple-app-btn mb-15">
                      <Link
                        href="https://codecanyon.net/item/eduman-react-native-android-ios-education-template/48934019?s_rank=3"
                        target="_blank"
                        className="app-btn"
                      >
                        <div className="app-thumb">
                          <Image
                            src={appStore}
                            loader={imageLoader}
                            style={{ width: "100%", height: "auto" }}
                            alt="app"
                          />
                        </div>
                        <div className="content">
                          <span>Download on the</span>
                          <h6>App Store</h6>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="footer-call-wrap d-flex align-items-center gap-15">
                    <div className="footer-call-icon">
                      <i className="icon-support"></i>
                    </div>
                    <div className="footer-call-content position-relative z-index-5">
                      <h6 className="footer-call-title">
                        Speak our expert at:
                      </h6>
                      <Link
                        className="footer-call-number b3"
                        href="tel:+18004536744"
                      >
                        1-800-453-6744
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-area">
          <div className="container">
            <div className="row gy-24 align-items-center justify-content-between align-content-end">
              <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="footer-copyright underline">
                  <p>
                    Copyright @ 2024{" "}
                    <Link
                      href="https://themeforest.net/user/bdevs"
                      target="_blank"
                    >
                      Saltstayz
                    </Link>{" "}
                    . All Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-md-6 col-12">
                <div className="footer-card">
                  <ul>
                    <li>
                      <Image
                        src={visa}
                        loader={imageLoader}
                        style={{ width: "100%", height: "auto" }}
                        alt="card"
                      />
                    </li>
                    <li>
                      <Image
                        src={master}
                        loader={imageLoader}
                        style={{ width: "100%", height: "auto" }}
                        alt="card"
                      />
                    </li>
                    <li>
                      <Image
                        src={applePay}
                        loader={imageLoader}
                        style={{ width: "100%", height: "auto" }}
                        alt="card"
                      />
                    </li>
                    <li>
                      <Image
                        src={paypal}
                        loader={imageLoader}
                        style={{ width: "100%", height: "auto" }}
                        alt="card"
                      />
                    </li>
                    <li>
                      <Image
                        src={amex}
                        loader={imageLoader}
                        style={{ width: "100%", height: "auto" }}
                        alt="card"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;

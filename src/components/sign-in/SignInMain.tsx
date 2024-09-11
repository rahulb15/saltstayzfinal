import SignInForm from "@/forms/SignInForm";
import Link from "next/link";
import React from "react";
const SignInMain = () => {
  return (
    <>
      <section className="bd-sign-area section-space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5">
              <div className="sign-form-wrapper text-center">
                <h4 className="title mb-30">Welcome back</h4>
                <SignInForm />
                <div className="sign-meta-divider-wrapper">
                  <div className="sign-meta-divider-line left-line"></div>
                  <span className="sign-meta-divider-title">or</span>
                  <div className="sign-meta-divider-line right-line"></div>
                </div>
                <div className="sign-in-wrapper mt-30 mb-20">
                  <div className="social-menu d-flex justify-content-center text-center">
                    <ul>
                      <li>
                        <Link
                          className="facebook"
                          href="https://facebook.com/"
                          target="blank"
                        >
                          <i className="icon-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="twitter"
                          href="https://twitter.com/"
                          target="blank"
                        >
                          <i className="icon-twitter-x"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="instagram"
                          href="https://www.instagram.com"
                          target="blank"
                        >
                          <i className="icon-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="linkedin"
                          href="https://www.linkedin.com"
                          target="blank"
                        >
                          <i className="icon-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sign-up-label text-center">
                  {`Don't`} have an account?
                  <Link href="/sign-up" className="sign-link">
                    {" "}
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInMain;

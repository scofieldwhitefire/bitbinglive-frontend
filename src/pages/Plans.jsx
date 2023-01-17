import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import TopBanner from "../components/TopBanner";
import React from "react";
import HomeHelmet from "../components/Helmets/HomeHelmet";

const Plans = () => {
  return (
    <>
      <HomeHelmet title={"Our Plans"} />
      {/* <!-- start header area --> */}
      {/* <!-- start header area --> */}
      <header className="header--sticky header-one ">
        <TopBanner />
        <Menu />
      </header>
      {/* <!-- End header area --> */}
      <Sidebar />
      <div id="anywhere-home"></div>
      {/* <!-- ENd Header Area --> */}
      {/* <!-- start breadcrumb area --> */}
      <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1">
              <h1 className="title">Our Plans</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index-2.html">Home</a>
                <span> / </span>
                <a href="#" className="active">
                  Our Plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb area --> */}
      {/* <!-- start pricing area --> */}
      <div className="rts-pricing-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-title-area pricing-planes text-center">
                <p className="pre-title">What We Offer</p>
                <h2 className="title">Packages & Pricing</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--50">
            {/* <!-- single pricing plane --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="pricing-wrapper-one">
                <div className="plane-process">
                  <span>/month</span>
                  <h3 className="title">$260</h3>
                </div>
                {/* <!-- pricing header --> */}
                <div className="pricing-header-start">
                  <span className="pre-title">Starter Package</span>
                  <h4 className="title">Basic Plan</h4>
                </div>
                {/* <!-- pricing header End --> */}
                {/* <!-- pricing body start --> */}
                <div className="pricing-body">
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing available">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">Business Solution</span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing available">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">
                      24/7 Consultant Service
                    </span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing available">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">
                      Great Customer Support
                    </span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing ">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">
                      Market Growth Solution
                    </span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">
                      24/7 Consultant Service
                    </span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  <a className="rts-btn btn-primary" href="#">
                    Buy This
                  </a>
                </div>
                {/* <!-- pricing body end --> */}
              </div>
            </div>
            {/* <!-- single pricing plane --> */}
            {/* <!-- single pricing plane --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--80">
              <div className="pricing-wrapper-one">
                <div className="plane-process">
                  <span>/month</span>
                  <h3 className="title">$260</h3>
                </div>
                {/* <!-- pricing header --> */}
                <div className="pricing-header-start">
                  <span className="pre-title">Starter Package</span>
                  <h4 className="title">Basic Plan</h4>
                </div>
                {/* <!-- pricing header End --> */}
                {/* <!-- pricing body start --> */}
                <div className="pricing-body">
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing available">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">Business Solution</span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing available">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">
                      24/7 Consultant Service
                    </span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing available">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">
                      Great Customer Support
                    </span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing ">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">
                      Market Growth Solution
                    </span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">
                      24/7 Consultant Service
                    </span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  <a className="rts-btn btn-primary" href="#">
                    Buy This
                  </a>
                </div>
                {/* <!-- pricing body end --> */}
              </div>
            </div>
            {/* <!-- single pricing plane --> */}
            {/* <!-- single pricing plane --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt_md--80 mt_sm--80">
              <div className="pricing-wrapper-one">
                <div className="plane-process">
                  <span>/month</span>
                  <h3 className="title">$260</h3>
                </div>
                {/* <!-- pricing header --> */}
                <div className="pricing-header-start">
                  <span className="pre-title">Starter Package</span>
                  <h4 className="title">Basic Plan</h4>
                </div>
                {/* <!-- pricing header End --> */}
                {/* <!-- pricing body start --> */}
                <div className="pricing-body">
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing available">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">Business Solution</span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing available">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">
                      24/7 Consultant Service
                    </span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing available">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">
                      Great Customer Support
                    </span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing ">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">
                      Market Growth Solution
                    </span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  {/* <!-- single pricing --> */}
                  <div className="single-pricing">
                    <div className="icon">
                      <i className="far fa-check"></i>
                    </div>
                    <span className="price-details">
                      24/7 Consultant Service
                    </span>
                  </div>
                  {/* <!-- single pricing End --> */}
                  <a className="rts-btn btn-primary" href="#">
                    Buy This
                  </a>
                </div>
                {/* <!-- pricing body end --> */}
              </div>
            </div>
            {/* <!-- single pricing plane --> */}
          </div>
        </div>
      </div>
      {/* <!-- end pricing area --> */}
      {/* <!-- start header area --> */}
      <Footer />
      {/* <!-- ENd Header Area --> */}
      {/* <!-- start loader --> */}
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      {/* <!-- End loader --> */}
      {/* <!-- progress Back to top --> */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* <!-- progress Back to top End --></div></> */}
    </>
  );
};

export default Plans;

import { Images } from "../assets/images";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import TopBanner from "../components/TopBanner";
import HomeHelmet from "../components/Helmets/HomeHelmet";

const Services = () => {
  return (
    <>
      <HomeHelmet title={"Services"} />
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
              <h1 className="title">Our Services</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index-2.html">Home</a>
                <span> / </span>
                <a href="#" className="active">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb area --> */}
      {/* <!-- our service area start --> */}
      <div className="rts-service-area rts-section-gapTop pb--200 service-two-bg bg_image">
        <div className="container">
          <div className="row g-5 service padding-controler">
            {/* <!-- single service area --> */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
              <div className="service-two-inner">
                <a href="service-details.html" className="thumbnail">
                  <img src={Images.service02} alt="Business_image" />
                </a>
                <div className="body-content">
                  <div className="hidden-area">
                    <h5 className="title">Strategy Growth</h5>
                    <p className="dsic">
                      Porta sagittis diam imperdiet eu, tempus nisi aenean
                      vehicula torquent dis mattis nullam bibendum morbi laoreet
                      lobortis id
                    </p>
                    <a
                      className="rts-read-more-two color-primary"
                      href="service-details.html"
                    >
                      Read More<i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single service area end--> */}
            {/* <!-- single service area --> */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
              <div className="service-two-inner">
                <a href="service-details.html" className="thumbnail two">
                  <img src={Images.service03} alt="Business_image" />
                </a>
                <div className="body-content">
                  <div className="hidden-area">
                    <h5 className="title">Grow Business</h5>
                    <p className="dsic">
                      Porta sagittis diam imperdiet eu, tempus nisi aenean
                      vehicula torquent dis mattis nullam bibendum morbi laoreet
                      lobortis id
                    </p>
                    <a
                      className="rts-read-more-two color-primary"
                      href="service-details.html"
                    >
                      Read More<i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single service area end--> */}
            {/* <!-- single service area --> */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
              <div className="service-two-inner">
                <a href="service-details.html" className="thumbnail three">
                  <img src={Images.service04} alt="Business_image" />
                </a>
                <div className="body-content">
                  <div className="hidden-area">
                    <h5 className="title">Proudly Speech</h5>
                    <p className="dsic">
                      Porta sagittis diam imperdiet eu, tempus nisi aenean
                      vehicula torquent dis mattis nullam bibendum morbi laoreet
                      lobortis id
                    </p>
                    <a
                      className="rts-read-more-two color-primary"
                      href="service-details.html"
                    >
                      Read More<i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single service area end--> */}
            {/* <!-- single service area --> */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100">
              <div className="service-two-inner">
                <a href="service-details.html" className="thumbnail">
                  <img src={Images.service02} alt="Business_image" />
                </a>
                <div className="body-content">
                  <div className="hidden-area">
                    <h5 className="title">Model Building</h5>
                    <p className="dsic">
                      Porta sagittis diam imperdiet eu, tempus nisi aenean
                      vehicula torquent dis mattis nullam bibendum morbi laoreet
                      lobortis id
                    </p>
                    <a
                      className="rts-read-more-two color-primary"
                      href="service-details.html"
                    >
                      Read More<i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single service area end--> */}
            {/* <!-- single service area --> */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--60">
              <div className="service-two-inner">
                <a href="service-details.html" className="thumbnail two">
                  <img src={Images.service03} alt="Business_image" />
                </a>
                <div className="body-content">
                  <div className="hidden-area">
                    <h5 className="title">Solution Model</h5>
                    <p className="dsic">
                      Porta sagittis diam imperdiet eu, tempus nisi aenean
                      vehicula torquent dis mattis nullam bibendum morbi laoreet
                      lobortis id
                    </p>
                    <a
                      className="rts-read-more-two color-primary"
                      href="service-details.html"
                    >
                      Read More<i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single service area end--> */}
            {/* <!-- single service area --> */}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--60 pb_sm--60">
              <div className="service-two-inner">
                <a href="service-details.html" className="thumbnail three">
                  <img src={Images.service04} alt="Business_image" />
                </a>
                <div className="body-content">
                  <div className="hidden-area">
                    <h5 className="title">Finbiz Solution</h5>
                    <p className="dsic">
                      Porta sagittis diam imperdiet eu, tempus nisi aenean
                      vehicula torquent dis mattis nullam bibendum morbi laoreet
                      lobortis id
                    </p>
                    <a
                      className="rts-read-more-two color-primary"
                      href="service-details.html"
                    >
                      Read More<i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single service area end--> */}
          </div>
        </div>
      </div>
      {/* <!-- our service area end --> */}
      {/* <!-- service accordion area --> */}
      <div className="rts-accordion-area service rts-section-gap">
        <div className="accordion-service-bg bg_image ptb--120 ptb_md--80 ptb_sm--60">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="accordion-service-inner">
                  <div className="title-area-start">
                    <span className="sub color-primary">
                      JUST A CONSULTANCY
                    </span>
                    <h2 className="title">
                      We know how to manage business globally
                    </h2>
                  </div>
                  <div className="accordion-area">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Making Easy Business Growth
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Neque parturient sed nascetur facilisis suscipit
                            ridiculus magna lobortis imperdiet vivamus est
                            aliquam euismod nec quam convallis ornare justo
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Business Solution Model
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Neque parturient sed nascetur facilisis suscipit
                            ridiculus magna lobortis imperdiet vivamus est
                            aliquam euismod nec quam convallis ornare justo
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Finbiz Company Solution
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Neque parturient sed nascetur facilisis suscipit
                            ridiculus magna lobortis imperdiet vivamus est
                            aliquam euismod nec quam convallis ornare justo
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Management Process
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Neque parturient sed nascetur facilisis suscipit
                            ridiculus magna lobortis imperdiet vivamus est
                            aliquam euismod nec quam convallis ornare justo
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            Managing Invesment
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Neque parturient sed nascetur facilisis suscipit
                            ridiculus magna lobortis imperdiet vivamus est
                            aliquam euismod nec quam convallis ornare justo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- service accordion area End --> */}
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

export default Services;

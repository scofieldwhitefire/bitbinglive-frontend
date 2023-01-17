import { Images } from "../assets/images";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import TopBanner from "../components/TopBanner";
import HomeHelmet from "../components/Helmets/HomeHelmet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ClientJS } from "clientjs";

const About = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

    const client = new ClientJS();

    const isMobile = client.isMobile();
  return (
    <>
      <HomeHelmet title={"About Us"} />
      {/* <!-- start header area --> */}
      {/* <!-- start header area --> */}
      <header className="header--sticky header-one ">
        <TopBanner />
        <Menu />
      </header>
      {/* <!-- End header area --> */}

      <Sidebar />

      <div id="anywhere-home"></div>

      {/* <!-- start breadcrumb area --> */}
      <div className="rts-breadcrumb-area breadcrumb-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 breadcrumb-1">
              <h1 className="title">About Us</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index-2.html">Home</a>
                <span> / </span>
                <a href="#" className="active">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb area --> */}

      {/* <!-- rts about us section start --> */}
      <div className="rts-about-area rts-section-gap">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-image-v-inner">
                <div className="image-area">
                  <img
                    className={`mt--110 img-1 ${isMobile&&'w-full'}`}
                    src={Images.about03}
                    alt="BUsiness_image"
                  />
                  {!isMobile&&(<img
                    className="img-over"
                    src={Images.about04}
                    alt="BUsiness_image"
                  />)}
                  {/* <div className="goal-button-wrapper">
                    <div className="vedio-icone">
                      <a id="play-video" className="video-play-button" href="#">
                        <span></span>
                      </a>
                      <div id="video-overlay" className="video-overlay">
                        <a className="video-overlay-close">×</a>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-progress-inner">
                <div className="title-area">
                  <span>Broker Name Features</span>
                  <h2 className="title">
                    THE MOST ADVANCE AND SECURE CRYPTOCURRENCY PLATFORM.
                  </h2>
                </div>
                {/* <!-- inner start --> */}
                <div className="inner">
                  <p className="disc">
                    Trade from Anywhere. Trading at your Fingertips. Compatible
                    with multiple devices, start trading with safety and
                    convenience.
                  </p>
                  <div className="rts-progress-one-wrapper">
                    <div className="single-progress">
                      <div className="progress-top">
                        <p className="progress-title">Business Strategy</p>
                        <span className="persectage">80%</span>
                      </div>
                      <div className="meter cadetblue">
                        <span data-progress="80" style={{ width: "0" }}></span>
                      </div>
                    </div>
                    <div className="single-progress">
                      <div className="progress-top">
                        <p className="progress-title">Trading Strength</p>
                        <span className="persectage">99%</span>
                      </div>
                      <div className="meter">
                        <span data-progress="99" style={{ width: "0" }}></span>
                      </div>
                    </div>
                  </div>
                  {isAuthenticated ? (
                    <Link to="/dashboard" className="rts-btn btn-primary">
                      Dashboard
                    </Link>
                  ) : (
                    <Link to="/register" className="rts-btn btn-primary">
                      Get started
                    </Link>
                  )}
                </div>
                {/* <!-- end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- rts about us section end --> */}

      {/* <!-- rts services area start --> */}
      <div className="rts-service-area rts-section-gapBottom">
        <div className="container-fluid service-main about-service-width-controler">
          <div className="background-service service-three row">
            <div className="row g-5">
              <div className="rts-title-area service-four text-center pt--40 pt_md--0 mt_sm--0 mt_md--0">
                <p className="pre-title">Our Services</p>
                <h2 className="title">What We Provide</h2>
              </div>
              {/* <!-- start single Service --> */}
              <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80 mb_md--40 mb_sm--30">
                <div className="service-one-inner-four">
                  <div className="big-thumbnail-area">
                    <a href="#" className="thumbnail">
                      <img src={Images.service07p} alt="Business-service" />
                    </a>
                    <div className="content">
                      <img src={Images.serviceicon15} alt="Business-icon" />
                      <h5 className="title">FLEXABLE TRADING</h5>
                      <p className="disc">
                        Latest trends in options trading: Digital Option,
                        Pending Orders, Trades Copying.
                      </p>
                    </div>
                    <a href="service-details.html" className="over_link"></a>
                  </div>
                </div>
              </div>
              {/* <!-- start single Service --> */}
              <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80 mb_md--40 mb_sm--30">
                <div className="service-one-inner-four">
                  <div className="big-thumbnail-area">
                    <a href="#" className="thumbnail">
                      <img src={Images.service08p} alt="Business-service" />
                    </a>
                    <div className="content">
                      <img src={Images.serviceicon15} alt="Business-icon" />
                      <h5 className="title">EXPERT TRADERS</h5>
                      <p className="disc">
                        Our highly skilled traders assist our clients in
                        developing a strong trading portfolio.
                      </p>
                    </div>
                    <a href="service-details.html" className="over_link"></a>
                  </div>
                </div>
              </div>
              {/* <!-- start single Service --> */}
              <div className="col-xl-4 col-md-6 col-sm-12 col-12 pt--15 mb--80">
                <div className="service-one-inner-four">
                  <div className="big-thumbnail-area">
                    <a href="#" className="thumbnail">
                      <img src={Images.service09p} alt="Business-service" />
                    </a>
                    <div className="content">
                      <img src={Images.serviceicon15} alt="Business-icon" />
                      <h5 className="title">SAFE AND SECURE</h5>
                      <p className="disc">
                        Our website can resists attacks of any size. With
                        advanced security systems.
                      </p>
                    </div>
                    <a href="service-details.html" className="over_link"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cta-one-bg col-12">
              <div className="cta-one-inner">
                <div className="cta-left">
                  <h3 className="title animated fadeIn">
                    Let’s discuss about how we can help make your trading better
                  </h3>
                </div>
                <div className="cta-right">
                  <Link className="rts-btn btn-white" to="/register">
                    Lets Work Together
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- rts services area End --> */}

      {/* <!-- rts faq section area --> */}
      <div className="rts-faq-section rts-section-gap rts-faq-bg bg_image">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-two-inner">
                <div className="title-area-faq">
                  <span className="sub">WHY CHOOSE US</span>
                  <h2 className="title">
                    We Are Experienced{" "}
                    <span className="sm-title">
                      Trade <span>Investment</span>
                    </span>
                  </h2>
                </div>
                {/* <!-- faq accordion area --> */}
                <div className="faq-accordion-area">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapsed"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span>01. </span> Who are the trading experts?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse visible show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body !text-black">
                          We carefully select expert applicants. We get to know them as a trader and examine their trading performance over a period of time. We also tend to look for expert who already have a following to further confirm their competence (social proof). You can also read about every expert on their individual performance pages.
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
                          <span>02. </span> How does copy trading work?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse visible"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body !text-black">
                          Here is how the copier works: You, as an investor, 
                          simply select an expert or experts that you want to copy trades from. 
                          Once you are signed up, this is the only action needed on your part.<br/>
                          Once you’ve taken care of the above, you are all set. There are no 
                          codes that you need to run or signals for you to manually input. Our 
                          software will handle the trade copying automatically on your behalf. 
                          We monitor your experts trading activity and as soon as there is a trade, 
                          we calculate all the necessary parameters and execute the trade.<br/>
                          The only thing you have to make sure of is that you have enough available 
                          base currency that your expert trades with, in your trading account. 
                          How much is enough? First, you must meet the exchanges minimum order amount 
                          (let’s say about $10 per trade to be safe). That means that if your expert executes 
                          a 5% order, you must have at least $300 in your account total value 
                          (at 100% expert allocation as an example). This also means that you need to have at 
                          least 10% or higher in available base currency to avoid missed trades.<br/>When the 
                          expert exits a position, you too will exit it. Automatically. You can also change 
                          allocation at any time.
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
                          <span>03. </span> How do your ether contracts work?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse visible"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body !text-black">
                          When you purchase an Ether mining contract, you buy a share of a GPU (“graphics processing unit“) 
                          to mine Ethereum. The hashing algorithm used to mine Ether is called Ethash (or Dagger-Hashimoto).<br/>
                          Ethash requires the so called DAG file in order to perform the calculations. 
                          This file grows over time, which means that more operations for each hashing 
                          operation need to be performed. This means that the effective hashrate 
                          decreases a little each time the DAG file grows.<br/>
                          This has to be considered when comparing the theoretical output of your hashpower. 
                          Online calculators do not take this into account.<br/>
                          Also, please keep in mind that some of our products have a maintenance fee attached.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- faq accordion area end --> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="thumbnail-faq-four">
                <img src={Images.faq02s} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- rts faq section area End --> */}

      {/* <!-- customers feed back area start --> */}
      <div className="rts-customer-feedback-area rts-section-gap bg-customer-feedback">
        <div className="container">
          <div className="row">
            <div className="rts-title-area feedback team text-center">
              <p className="pre-title">Feedbacks</p>
              <h2 className="title">Client Feedbacks</h2>
            </div>
          </div>
          <div className="row g-5 mt--20">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="testimopnial-wrapper-two">
                <div className="test-header">
                  <div className="thumbnail">
                    <img src={Images.testimonials22} alt="" />
                  </div>
                  <div className="name-desig">
                    <h5 className="title">Vanessa Martins</h5>
                    <span className="designation">Forex Trade</span>
                  </div>
                </div>
                <div className="test-body">
                  <p className="disc">
                    “Excellent broker with a very good customer service
                          and support. Very contented with their services”
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="testimopnial-wrapper-two">
                <div className="test-header">
                  <div className="thumbnail">
                    <img src={Images.testimonials23} alt="" />
                  </div>
                  <div className="name-desig">
                    <h5 className="title">Diego bacellar</h5>
                    <span className="designation">Crypto Expert</span>
                  </div>
                </div>
                <div className="test-body">
                  <p className="disc">
                    “Pretty solid so far!. Opening an account was relatively 
                          quick which was nice, and the spreads are amazing. Highly 
                          recommend this broker.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- customers feed back area end --> */}

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

export default About;

import { useEffect, useState, useRef } from "react";
import { ClientJS } from "clientjs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Home.css";
import { Images } from "../assets/images";
import TopBanner from "../components/TopBanner";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import HomeHelmet from "../components/Helmets/HomeHelmet";
import ContactForm from "../components/ContactForm";

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const onLoadScriptRef = useRef();
  const onLoadScriptSRef = useRef();
  const onLoadScriptTRef = useRef();
  const onLoadScriptRef2 = useRef();
  const ch = useState(!1);
  let [n, setN] = useState(1);
  const client = new ClientJS();

  const isMobile = client.isMobile();

  let tvScriptLoadingPromise;

  const showCharts = (x = "init") => {
    if (x === "next") {
      setN(n += 1);
    } else if (x === "prev") {
      setN(n -= 1);
    }
    n > 3 && setN(1);
    n < 1 && setN(3);

  };

  useEffect(() => {
    onLoadScriptRef.current = firstTrade;
    onLoadScriptSRef.current = secondTrade;
    onLoadScriptTRef.current = thirdTrade;
    onLoadScriptRef2.current = secondTrade;

    showCharts();
    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => {
      onLoadScriptRef.current && onLoadScriptRef.current();
      onLoadScriptSRef.current && onLoadScriptSRef.current();
      onLoadScriptTRef.current && onLoadScriptTRef.current();
    });

    // return () => ([onLoadScriptRef.current, onLoadScriptSRef.current, onLoadScriptTRef.current, onLoadScriptRef2.current] = null);
    return () => (onLoadScriptRef.current = null);

    function firstTrade() {
      const first_trade = document.getElementById("tradingview_848b8");
      if (first_trade && "TradingView" in window) {
        const width = document.getElementById("firstTradew").clientWidth;
        const height = document.getElementById("firstTrade").clientHeight;
        new window.TradingView.widget({
          symbol: "COINBASE:BTCUSD",
          interval: "1",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          width,
          height,
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          save_image: false,
          container_id: "tradingview_848b8",
        });
      }
    }

    function secondTrade() {
      const second_trade = document.getElementById("tradingview_848c5");
      if (second_trade && "TradingView" in window) {
        const width = document.getElementById("secondTradew").clientWidth;
        const height = document.getElementById("secondTrade").clientHeight;
        new window.TradingView.widget({
          symbol: "COINBASE:ETHUSD",
          interval: "1",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          width,
          height,
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          save_image: false,
          container_id: "tradingview_848c5",
        });
      }
    }

    function thirdTrade() {
      const third_trade = document.getElementById("tradingview_8wec5");
      if (third_trade && "TradingView" in window) {
        const width = document.getElementById("thirdTradew").clientWidth;
        const height = document.getElementById("thirdTrade").clientHeight;
        new window.TradingView.widget({
          symbol: "COINBASE:LTCUSD",
          interval: "1",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          width,
          height,
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          save_image: false,
          container_id: "tradingview_8wec5",
        });
      }
    }
  }, [n]);

  return (
    <>
      <HomeHelmet title={"Home"} />
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

      {/* <!-- banner blank space area --> */}
      <div className="rts-banner-area rts-banner-one">
        <div className="swiper mySwiper banner-one">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              {/* <!-- banner single content --> */}
              <div className="bg-black bg-opacity-70 w-full flex justify-center items-center">
                <div className="banner-one-inner text-start">
                  <p className="pre-title">
                    <span>Welcome!</span>{" "}
                    <i style={{ color: "white", fontStyle: "normal" }}>
                      Start Growing...
                    </i>
                  </p>
                  <h1 className="title uppercase font-bold">
                    <span>Grow Your </span>
                    <i style={{ color: "white", fontStyle: "normal" }}>
                      Portfolio <br /> today.
                    </i>{" "}
                  </h1>
                  <p className="disc banner-para" style={{ color: "white" }}>
                    The most convenient trading interface. Instant access to
                    more than 100 assets
                    <br />
                    All over the world.
                  </p>
                  {isAuthenticated ? (
                    <Link
                      to="/dashboard"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <a
                      href="https://app.bitbinglive.com"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Get Started
                    </a>
                  )}
                  <img
                    className="shape-img one"
                    src={Images.shape01}
                    alt="banner_business"
                  />
                </div>
                {/* <!-- banner single content end --> */}
              </div>
            </div>
            <div className="swiper-slide two">
              {/* <!-- banner single content --> */}
              <div className="bg-black bg-opacity-70 w-full flex justify-center items-center">
                <div className="banner-one-inner text-start">
                  <p className="pre-title">
                    <span>Welcome!</span>{" "}
                    <i style={{ color: "white", fontStyle: "normal" }}>
                      Start Growing...
                    </i>
                  </p>
                  <h1 className="title uppercase font-bold">
                    <i className="text-white">An</i> <span>Easy way</span>{" "}
                    <br /> <i className="text-white">To tarde</i>
                  </h1>
                  <p className="disc banner-para text-white">
                    Trade on the Forex, Crypto and Stock Markets with Ease.
                    <br />
                    Trading is better with us, Experience the difference.
                  </p>
                  {isAuthenticated ? (
                    <Link
                      to="/dashboard"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <a
                      href="https://app.bitbinglive.com"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Get Started
                    </a>
                  )}
                  <img
                    className="shape-img one"
                    src={Images.shape01}
                    alt="banner_business"
                  />
                </div>
              </div>
              {/* <!-- banner single content end --> */}
            </div>
            <div className="swiper-slide three">
              {/* <!-- banner single content --> */}
              <div className="bg-black bg-opacity-70 w-full flex justify-center items-center">
                <div className="banner-one-inner text-start">
                  <p className="pre-title">
                    <span>Welcome!</span>{" "}
                    <i style={{ color: "white", fontStyle: "normal" }}>
                      Start Growing...
                    </i>
                  </p>
                  <h1 className="title uppercase font-bold">
                    <i style={{ color: "white", fontStyle: "normal" }}>A</i>{" "}
                    <span>Secure </span>
                    <i style={{ color: "white", fontStyle: "normal" }}>and</i>
                    <br />
                    <span>Reliable </span>
                    <i style={{ color: "white", fontStyle: "normal" }}>
                      platform
                    </i>{" "}
                  </h1>
                  <p className="disc banner-para" style={{ color: "white" }}>
                    Access all digital assets with our E256 Encryption security
                    level
                    <br />
                  </p>
                  {isAuthenticated ? (
                    <Link
                      to="/dashboard"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <a
                      href="https://app.bitbinglive.com"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Get Started
                    </a>
                  )}
                  <img
                    className="shape-img one"
                    src={Images.shape01}
                    alt="banner_business"
                  />
                </div>
              </div>
              {/* <!-- banner single content end --> */}
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="animation-img">
          <img
            className="shape-img two"
            src={Images.shape02}
            alt="banner_business"
          />
          <img
            className="shape-img three"
            src={Images.shape03}
            alt="banner_business"
          />
        </div>
      </div>
      {/* <!-- banner blank space area end --> */}
      <div id="scrollChart"></div>
      {/* <!-- rts about us section start --> */}
      <div className="rts-about-area rts-section-gap bg-about-sm-shape">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* <!-- about left --> */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--50 mt_sm--50">
              <div className="rts-title-area">
                <p className="pre-title">More About Us</p>
                <h2 className="title">
                  We Provide The Best And Secure Platform
                </h2>
              </div>
              <div className="about-inner">
                <p className="disc">
                  Trade from Anywhere. Trading at your Fingertips. Compatible
                  with multiple devices, start trading with safety and
                  convenience.
                </p>
                {/* <!-- start about success area --> */}
                <div className="row about-success-wrapper">
                  {/* <!-- left wrapper start --> */}
                  <div className="col-lg-6 col-md-6">
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">24/7 Call Services Available</p>
                    </div>
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Great Skilled Consultant</p>
                    </div>
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Expert Team Members</p>
                    </div>
                  </div>
                  {/* <!-- left wrapper end --> */}
                  <div className="col-lg-6 col-md-6">
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">High Reliability</p>
                    </div>
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Live Technical Analysis</p>
                    </div>
                    <div className="single">
                      <i className="far fa-check"></i>
                      <p className="details">Raw spreads on Forex pairs</p>
                    </div>
                  </div>
                </div>
                {/* <!-- start about success area --> */}

                {/* <!-- about founder & get in touch start --> */}
                <div className="row about-founder-wrapper align-items-center mt--40">
                  {/* <!-- left area start --> */}
                  {/* <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="author-inner">
                      <a className="thumbnail" href="#">
                        <img src={Images.sm01} alt="pro_founder" />
                      </a>
                      <div className="founder-details">
                        <a href="team-details.html">
                          <h6 className="title">Adrew David</h6>
                        </a>
                        <span>CEO & Founder</span>
                      </div>
                    </div>
                  </div> */}
                  {/* <!-- left area end --> */}
                  {/* <!-- right founder area --> */}
                  {/* <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_sm--20">
                    <div className="author-call-option">
                      <img
                        className="authore-call"
                        src={Images.call}
                        alt="call_founder"
                      />
                      <div className="call-details">
                        <span>Call us anytime</span>
                        <a href="tel:+18475555555">
                          <h6 className="title">+256 21458.2146</h6>
                        </a>
                      </div>
                    </div>
                  </div> */}
                  {/* <!-- left founder area --> */}
                </div>
                {/* <!-- about founder & get in touch end --> */}
              </div>
            </div>
            {/* <!-- about right --> */}

            {/* <!-- about-right Start--> */}
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1">
              <div className="about-one-thumbnail">
                <img src={Images.about011} alt="about-finbiz" />
                {!isMobile && (
                  <img
                    className="small-img"
                    src={Images.about022}
                    alt="pro-small"
                  />
                )}
                <div className="experience">
                  <div className="left single">
                    <h2 className="title">10+</h2>
                    <p className="time">Years</p>
                  </div>
                  <div className="right single">
                    <p className="disc">
                      Of experience in consulting and trading
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- about-right end --> */}
          </div>
        </div>
      </div>
      {/* <!-- rts about us section end --> */}

      {/* <!-- rts service post area  Start--> */}
      <div className="rts-service-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-title-area service text-center">
                <p className="pre-title">Our Services</p>
                <h2 className="title">High Quality Services</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid service-main plr--120-service mt--50 plr_md--0 pl_sm--0 pr_sm--0">
          <div className="background-service row">
            {/* <!-- start single Service --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-one-inner one">
                <div className="thumbnail">
                  <img src={Images.icon01} alt="pro_service" />
                </div>
                <div className="service-details">
                    <h5 className="title">FLEXIBLE TRADING</h5>
                  <p className="disc">
                    The latest trends in options trading: Digital Option,
                    Pending Orders, Trades Copying. Payouts up to 128%.
                  </p>
                  {/* <a
                    className="rts-read-more btn-primary"
                    href="service-details.html"
                  >
                    <i className="far fa-arrow-right"></i>Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- end single Services --> */}
            {/* <!-- start single Service --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-one-inner two">
                <div className="thumbnail">
                  <img src={Images.icon02} alt="pro_service" />
                </div>
                <div className="service-details">
                    <h5 className="title">24/7 CUSTOMER SUPPORT</h5>
                  <p className="disc">
                    We provide 24/7 customer support through e-mail. Our support
                    representatives are always available to answer any
                    questions.
                  </p>
                  {/* <a
                    className="rts-read-more btn-primary"
                    href="service-details.html"
                  >
                    <i className="far fa-arrow-right"></i>Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- end single Services --> */}
            {/* <!-- start single Service --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-one-inner three">
                <div className="thumbnail">
                  <img src={Images.icon03} alt="pro_service" />
                </div>
                <div className="service-details">
                    <h5 className="title">SAFE AND SECURE</h5>
                  <p className="disc">
                    We use the highest level of protection . Our website can
                    resists attacks of any size.With advanced security systems,
                    we keep your account always protected.
                  </p>
                  {/* <a
                    className="rts-read-more btn-primary"
                    href="service-details.html"
                  >
                    <i className="far fa-arrow-right"></i>Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- end single Services --> */}
            {/* <!-- start single Service --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-one-inner four">
                <div className="thumbnail">
                  <img src={Images.icon04} alt="pro_service" />
                </div>
                <div className="service-details">
                    <h5 className="title">EXPERT TRADERS</h5>
                  <p className="disc">
                    Our highly skilled traders assist our clients in developing
                    a strong trading portfolio.
                  </p>
                  {/* <a
                    className="rts-read-more btn-primary"
                    href="service-details.html"
                  >
                    <i className="far fa-arrow-right"></i>Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- end single Services --> */}
            {/* <!-- start single Service --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-one-inner five">
                <div className="thumbnail">
                  <img src={Images.icon05} alt="pro_service" />
                </div>
                <div className="service-details">
                    <h5 className="title">COVERED BY INSURANCE</h5>
                  <p className="disc">
                    All Investments in ProBitLive are insured with top Insurance
                    company.
                  </p>
                  {/* <a
                    className="rts-read-more btn-primary"
                    href="service-details.html"
                  >
                    <i className="far fa-arrow-right"></i>Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- end single Services --> */}
            {/* <!-- start single Service --> */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="service-one-inner six">
                <div className="thumbnail">
                  <img src={Images.icon06} alt="pro_service" />
                </div>
                <div className="service-details">
                    <h5 className="title">INSTANT WITHDRAWALS</h5>
                  <p className="disc">
                    Our withdrawals are all processed instantly after they are
                    requested.
                  </p>
                  {/* <a
                    className="rts-read-more btn-primary"
                    href="service-details.html"
                  >
                    <i className="far fa-arrow-right"></i>Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- end single Services --> */}
          </div>
          <div className="row">
            <div className="cta-one-bg col-12">
              <div className="cta-one-inner">
                <div className="cta-left">
                  <h3 className="title">
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
      {/* <!-- rts service post area ENd --> */}

      {/* <!-- business goal area --> */}
      <div className="rts-business-goal mt--0 rts-section-gapBottom">
        <div className="container">
          <div className="row">
            {/* <!-- business goal left --> */}
            <div className="col-lg-6">
              <div className="business-goal-one">
                <img src={Images.goal011} alt="Business_Goal" />
                {!isMobile && (
                  <img
                    className="small"
                    src={Images.goalsm011}
                    alt="Business_Goal"
                  />
                )}
              </div>
            </div>
            {/* <!-- business goal right --> */}

            {/* <!-- right area business --> */}
            <div className="col-lg-6 mt--35 mt_md--70 mt_sm--70">
              <div className="business-goal-right">
                <div className="rts-title-area business text-start pl--30">
                  <p className="pre-title">Trading with the best</p>
                  <h2 className="title">
                    We know how to manage trading globally
                  </h2>
                </div>
                <div className="rts-business-goal pl--30">
                  <div className="single-goal">
                    <img
                      src={Images.goalicon01}
                      alt="business_Icone"
                      className="thumb"
                    />
                    <div className="goal-wrapper">
                      <h6 className="title">Best Business Consulting</h6>
                      <p className="disc">
                        We are trusted by a huge number of people. We are
                        working hard constantly to improve the level of our
                        security system and minimize possible risks.
                      </p>
                    </div>
                  </div>
                  <div className="single-goal">
                    <img
                      src={Images.goalicon02}
                      alt="business_Icone"
                      className="thumb"
                    />
                    <div className="goal-wrapper">
                      <h6 className="title">24/7 Customer Support</h6>
                      <p className="disc">
                        We provide 24/7 customer support through e-mail and
                        livechat. Our support representatives are available to
                        elucidate any difficulty.
                      </p>
                    </div>
                  </div>
                  <div className="goal-button-wrapper mt--70">
                    <Link
                      to="/contact"
                      className="rts-btn btn-primary color-h-black"
                    >
                      Contact Us
                    </Link>
                    {/* <div className="vedio-icone">
                      <a id="play-video" className="video-play-button" href="#">
                        <span></span>
                        <span className="outer-text">Watch Video</span>
                      </a>
                      <div id="video-overlay" className="video-overlay">
                        <a className="video-overlay-close">×</a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- right area business ENd --> */}
          </div>
        </div>
      </div>
      {/* <!-- business goal area End --> */}

      {/* <!-- rts-counter up area start --> */}
      <div className="rts-counter-up-area rts-section-gap counter-bg">
        <div className="container">
          <div className="row">
            {/* <!-- counter up area --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-counter">
                <img src={Images.counterupicon01} alt="Business_counter" />
                <div className="counter-details">
                  <h2 className="title">
                    <span className="counter animated fadeInDownBig">858</span>
                  </h2>
                  <p className="disc">Successful Traders</p>
                </div>
              </div>
            </div>
            {/* <!-- counter up area --> */}
            {/* <!-- counter up area --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-counter pl--10 justify-content-center two pl--30">
                <img src={Images.counterupicon02} alt="Business_counter" />
                <div className="counter-details">
                  <h2 className="title">
                    <span className="counter animated fadeInDownBig">650</span>
                  </h2>
                  <p className="disc">Active Traders</p>
                </div>
              </div>
            </div>
            {/* <!-- counter up area --> */}
            {/* <!-- counter up area --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-counter pl--10 justify-content-center three pl--50">
                <img src={Images.counterupicon03} alt="Business_counter" />
                <div className="counter-details">
                  <h2 className="title">
                    <span className="counter animated fadeInDownBig">567</span>
                  </h2>
                  <p className="disc">Skilled Experts</p>
                </div>
              </div>
            </div>
            {/* <!-- counter up area --> */}
            {/* <!-- counter up area --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="single-counter pl--10 justify-content-end four">
                <img src={Images.counterupicon04} alt="Business_counter" />
                <div className="counter-details">
                  <h2 className="title happy">
                    <span className="counter animated fadeInDownBig">28</span>
                  </h2>
                  <p className="disc">Happy Clients</p>
                </div>
              </div>
            </div>
            {/* <!-- counter up area --> */}
          </div>
        </div>
      </div>
      {/* <!-- rts-counter up area end --> */}

      {/* <!-- start gallery section --> */}
      <div className="rts-gallery-area rts-section-gap gallery-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="rts-title-area gallery text-start pl_sm--20">
              <p className="pre-title">Popular Trades</p>
              <h2 className="title">Our Great Trades</h2>
            </div>
          </div>
          <div className="row mt--45">
            <div className="col-12">
              <div className="swiper mygallery mySwipers">
                <div className="swiper-wrapper gallery">
                  {n===1&&<div className="swiper-slide">
                    <div className="row g-5 w-g-100">
                      <div
                        id="firstTrade"
                        className="col-lg-7 col-md-12 col-sm-12 col-12"
                      >
                        <div id="firstTradew" className="thumbnail-gallery">
                          <div className="tradingview-widget-container">
                            <div
                              className="trades"
                              id="tradingview_848b8"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                        <div className="bg-right-gallery">
                          <div className="icon">
                            <img
                              src={Images.galleryicon01}
                              alt="Business-gallery"
                            />
                          </div>
                          <h4 className="title">Bitcoin</h4>
                          <span>Invest, Growth</span>
                          <p className="disc">Invest and trade with bitcoin</p>
                          {isAuthenticated ? (
                            <Link
                              className="rts-btn btn-primary"
                              to="/dashboard"
                            >
                              Invest now
                            </Link>
                          ) : (
                            <a
                              className="rts-btn btn-primary"
                              href="https://app.bitbinglive.com"
                            >
                              Login
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>}
                  {n===2&&<div className="swiper-slide">
                    <div className="row g-5 w-g-100">
                      <div id="secondTrade" className="col-lg-7">
                        <div id="secondTradew" className="thumbnail-gallery">
                          <div className="tradingview-widget-container">
                            <div
                              className="trades"
                              id="tradingview_848c5"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="bg-right-gallery">
                          <div className="icon">
                            <img
                              src={Images.galleryicon01}
                              alt="Business-gallery"
                            />
                          </div>
                          <h4 className="title">Invest in Ethereum</h4>
                          <span>Invest, Growth</span>
                          <p className="disc">
                            Invest in Ethereum with the latest technology
                          </p>
                          {isAuthenticated ? (
                            <Link
                              className="rts-btn btn-primary"
                              to="/dashboard"
                            >
                              Invest Now
                            </Link>
                          ) : (
                            <a
                              className="rts-btn btn-primary"
                              href="https://app.bitbinglive.com"
                            >
                              Login
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>}
                  {n===3&&<div className="swiper-slide">
                    <div className="row g-5 w-g-100">
                      <div id="thirdTrade" className="col-lg-7">
                        <div id="thirdTradew" className="thumbnail-gallery">
                          <div className="tradingview-widget-container">
                            <div
                              className="trades"
                              id="tradingview_8wec5"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="bg-right-gallery">
                          <div className="icon">
                            <img
                              src={Images.galleryicon01}
                              alt="Business-gallery"
                            />
                          </div>
                          <h4 className="title">Litcoin</h4>
                          <span>Invest, Growth</span>
                          <p className="disc">
                            Invest in litcoin with the latest technology
                          </p>
                          {isAuthenticated ? (
                            <Link
                              className="rts-btn btn-primary"
                              to="/dashboard"
                            >
                              Invest now
                            </Link>
                          ) : (
                            <a
                              className="rts-btn btn-primary"
                              href="https://app.bitbinglive.com"
                            >
                              Login
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>}
                </div>
                <div
                  className="swiper-button-next"
                  onClick={() => showCharts("next")}
                ></div>
                <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal">
                  <span className="swiper-pagination-current">{n}</span> /{" "}
                  <span className="swiper-pagination-total">3</span>
                </div>
                <div
                  className="swiper-button-prev"
                  onClick={() => showCharts("prev")}
                ></div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- start gallery section --> */}

      {/* <!-- start trusted client section --> */}
      {/* <div className="rts-trusted-client rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-area-client text-center">
                <p className="client-title">Our Trusted Clients</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="client-wrapper-one">
              <a href="#">
                <img src={Images.client01} alt="business_finbiz" />
              </a>
              <a href="#">
                <img src={Images.client02} alt="business_finbiz" />
              </a>
              <a href="#">
                <img src={Images.client03} alt="business_finbiz" />
              </a>
              <a href="#">
                <img src={Images.client04} alt="business_finbiz" />
              </a>
              <a href="#">
                <img src={Images.client05} alt="business_finbiz" />
              </a>
              <a href="#">
                <img src={Images.client06} alt="business_finbiz" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- end trusted client section --> */}

      {/* <!-- start team section --> */}
      {/* <div className="rts-team-area rts-section-gap bg-team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-title-area team text-center">
                <p className="pre-title">Professionals Team</p>
                <h2 className="title">Professionals Team</h2>
              </div>
            </div>
          </div>
          <div className="row g-5 mt--0">
            <div className="swiper mySwiperh1_team">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="team-single-one-start">
                    <div className="team-image-area">
                      <a href="team-details.html">
                        <img src={Images.tm01} alt="Business_Team_single" />
                        <div className="team-social">
                          <div className="main">
                            <i className="fal fa-plus"></i>
                          </div>
                          <div className="team-social-one">
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="single-details">
                      <a href="team-details.html">
                        <h5 className="title">Archer Graham</h5>
                      </a>
                      <p>Founder</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="team-single-one-start">
                    <div className="team-image-area">
                      <a href="team-details.html">
                        <img src={Images.tm02} alt="Business_Team_single" />
                        <div className="team-social">
                          <div className="main">
                            <i className="fal fa-plus"></i>
                          </div>
                          <div className="team-social-one">
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="single-details">
                      <a href="team-details.html">
                        <h5 className="title">Amelia Clover</h5>
                      </a>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="team-single-one-start">
                    <div className="team-image-area">
                      <a href="team-details.html">
                        <img src={Images.tm03} alt="Business_Team_single" />
                        <div className="team-social">
                          <div className="main">
                            <i className="fal fa-plus"></i>
                          </div>
                          <div className="team-social-one">
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="single-details">
                      <a href="team-details.html">
                        <h5 className="title">Beckett Hayden</h5>
                      </a>
                      <p>Deputy Manager</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="team-single-one-start">
                    <div className="team-image-area">
                      <a href="team-details.html">
                        <img src={Images.tm04} alt="Business_Team_single" />
                        <div className="team-social">
                          <div className="main">
                            <i className="fal fa-plus"></i>
                          </div>
                          <div className="team-social-one">
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="single-details">
                      <a href="team-details.html">
                        <h5 className="title">Julian Wyat</h5>
                      </a>
                      <p>Finance Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- end team section --> */}

      {/* <!-- rts features area start --> */}
      <div className="rts-team-area rts-section-gap">
        <div className="container-fluid padding-controler plr--120">
          <div className="row bg-white-feature  pt--120 pb--120">
            <div className="col-xl-6 col-lg-12">
              <div className="feature-left-area">
                <img src={Images.feature011} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="rts-title-area feature text-start pl--30 pl_sm--0">
                <p className="pre-title">Boost Your Portfolio Today</p>
                <h2 className="title feature-title">
                  Most Reliable Efficient <br />
                  Trading Company
                </h2>
                <p>
                  ProBitLive Limited, provides its clients with an opportunity
                  to invest money into mining farms located all around the world
                  to obtain quite a big income later.
                </p>
              </div>

              <div className="feature-one-wrapper pl--30 mt--40 pl_sm--0">
                <div className="single-feature-one">
                  <i className="fal fa-check"></i>
                  <p>Fast Growing Profits</p>
                </div>
                <div className="single-feature-one">
                  <i className="fal fa-check"></i>
                  <p>24/7 Quality Services</p>
                </div>
                <div className="single-feature-one">
                  <i className="fal fa-check"></i>
                  <p>Expert Traders</p>
                </div>
                <div className="single-feature-one">
                  <i className="fal fa-check"></i>
                  <p>Best Quality Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- rts features area end --> */}

      {/* <!-- start client feed back section --> */}
      <div className="rts-client-feedback">
        <div className="container">
          <div className="row">
            {/* <!-- start testimonials area --> */}
            <div className="col-lg-7">
              <div className="rts-title-area reviews text-start pl--30 pt--70">
                <p className="pre-title">Our Testimonials</p>
                <h2 className="title">Client’s Feedbacks</h2>

                {/* <!-- swiper area start --> */}
                <div className="swiper mySwipertestimonial">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-inner">
                        <p className="disc text-start">
                          “Impressive customer services, I can now trade with
                          peace of mind. Thanks for the high quality performance
                          for traders. Love it”
                        </p>
                        <div className="testimonial-bottom-one">
                          <div className="thumbnail">
                            <img
                              src={Images.testimonials21}
                              alt="business-testimonials"
                            />
                          </div>
                          <div className="details">
                            <h5 className="title text-[#DF0A0A]">
                              Victor Alisson
                            </h5>
                            <span>Investor</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-inner">
                        <p className="disc text-start">
                          “Excellent broker with a very good customer service
                          and support. Very contented with their services”
                        </p>
                        <div className="testimonial-bottom-one">
                          <div className="thumbnail">
                            <img
                              src={Images.testimonials22}
                              alt="business-testimonials"
                            />
                          </div>
                          <div className="details">
                            <h5 className="title text-[#DF0A0A]">
                              Vanessa Martins
                            </h5>
                            <span>Forex Trader</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-inner">
                        <p className="disc text-start">
                          “Pretty solid so far!. Opening an account was
                          relatively quick which was nice, and the spreads are
                          amazing. Highly recommend this broker.”
                        </p>
                        <div className="testimonial-bottom-one">
                          <div className="thumbnail">
                            <img
                              src={Images.testimonials23}
                              alt="business-testimonials"
                            />
                          </div>
                          <div className="details">
                            <h5 className="title text-[#DF0A0A]">
                              Diego bacellar
                            </h5>
                            <span>Crypto Expert</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
                {/* <!-- swiper area end --> */}
              </div>
            </div>
            {/* <!-- end testimonials are --> */}
            {/* <!-- images area --> */}
            <div className="col-lg-5">
              <div className="rts-test-one-image-inner">
                <img src={Images.testimonials01} alt="business_testimobials" />
              </div>
            </div>
            {/* <!-- image area end --> */}
          </div>
        </div>
      </div>
      {/* <!-- start client feed back section End --> */}

      {/* <!-- blog area start --> */}
      {/* <div className="rts-blog-area rts-section-gap bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-area text-center">
                <span>Blog Posts</span>
                <h2 className="title">News & Updates</h2>
              </div>
            </div>
          </div>
          <div className="g-5 mt--20">
            <div className="swiper mySwiperh1_blog">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="single-blog-one-wrapper">
                    <div className="thumbnail">
                      <img src={Images.blog01} alt="business_Blog" />
                      <div className="blog-badge">
                        <span>25.05.2023</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <p>
                        <span>News</span>/ by Admin
                      </p>
                      <a href="blog-details.html">
                        <h5 className="title">
                          The quick settle tips of the new ages exist{" "}
                        </h5>
                      </a>
                      <a
                        className="rts-read-more btn-primary"
                        href="blog-details.html"
                      >
                        <i className="far fa-arrow-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-blog-one-wrapper">
                    <div className="thumbnail">
                      <img src={Images.blog02} alt="business_Blog" />
                      <div className="blog-badge">
                        <span>25.05.2023</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <p>
                        <span>News</span>/ by Admin
                      </p>
                      <a href="blog-details.html">
                        <h5 className="title">
                          Old generation settle tips of the new ages upps !{" "}
                        </h5>
                      </a>
                      <a
                        className="rts-read-more btn-primary"
                        href="blog-details.html"
                      >
                        <i className="far fa-arrow-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-blog-one-wrapper">
                    <div className="thumbnail">
                      <img src={Images.blog03} alt="business_Blog" />
                      <div className="blog-badge">
                        <span>25.05.2023</span>
                      </div>
                    </div>
                    <div className="blog-content">
                      <p>
                        <span>News</span>/ by Admin
                      </p>
                      <a href="blog-details.html">
                        <h5 className="title">
                          Monkey Form settle tips of the new ages end{" "}
                        </h5>
                      </a>
                      <a
                        className="rts-read-more btn-primary"
                        href="blog-details.html"
                      >
                        <i className="far fa-arrow-right"></i>Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- blog area end --> */}

      {/* <!-- contact area start --> */}
      <ContactForm />
      {/* <!-- contact area end --> */}

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

export default Home;

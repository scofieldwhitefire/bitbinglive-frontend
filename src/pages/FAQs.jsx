import { Images } from "../assets/images";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import TopBanner from "../components/TopBanner";
import { Link } from "react-router-dom";
import HomeHelmet from "../components/Helmets/HomeHelmet";

const FAQs = () => {
  return (
    <>
      <HomeHelmet title={"FAQs"} />
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
              <h1 className="title">FAQs</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <Link href="/">Home</Link>
                <span> / </span>
                <a href="#" className="active">
                  FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb area --> */}
      {/* <!-- start customers faq section --> */}
      <div className="rts-faq-area rts-section-gap inner inner2">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 order-xl-1 order-md-2 order-sm-2 order-2">
              <div className="accordion-area inner inner2">
                <div className="title-area">
                  <span>Frequently Asked Questions </span>
                  <h2 className="title">All you need to know</h2>
                </div>
                <div className="accordion-one-inner inner">
                  <div className="accordion" id="accordionExample4">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span>01.</span> Who are the trading experts?
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse visible show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample4"
                      >
                        <div className="accordion-body">
                          <p className="!text-black">
                            We carefully select expert applicants. We get to
                            know them as a trader and examine their trading
                            performance over a period of time. We also tend to
                            look for expert who already have a following to
                            further confirm their competence (social proof). You
                            can also read about every expert on their individual
                            performance pages.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span>02.</span> How does copy trading work?
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse visible"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample4"
                      >
                        <div className="accordion-body">
                          <p className="!text-black">
                            Here is how the copier works: You, as an investor,
                            simply select an expert or experts that you want to
                            copy trades from. Once you are signed up, this is
                            the only action needed on your part.
                            <br />
                            Once you’ve taken care of the above, you are all
                            set. There are no codes that you need to run or
                            signals for you to manually input. Our software will
                            handle the trade copying automatically on your
                            behalf. We monitor your experts trading activity and
                            as soon as there is a trade, we calculate all the
                            necessary parameters and execute the trade.
                            <br />
                            The only thing you have to make sure of is that you
                            have enough available base currency that your expert
                            trades with, in your trading account. How much is
                            enough? First, you must meet the exchanges minimum
                            order amount (let’s say about $10 per trade to be
                            safe). That means that if your expert executes a 5%
                            order, you must have at least $300 in your account
                            total value (at 100% expert allocation as an
                            example). This also means that you need to have at
                            least 10% or higher in available base currency to
                            avoid missed trades.
                            <br />
                            When the expert exits a position, you too will exit
                            it. Automatically. You can also change allocation at
                            any time.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span>03.</span> How do your ether contracts work?
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse visible"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample4"
                      >
                        <div className="accordion-body">
                          <p className="!text-black">
                            When you purchase an Ether mining contract, you buy
                            a share of a GPU (“graphics processing unit“) to
                            mine Ethereum. The hashing algorithm used to mine
                            Ether is called Ethash (or Dagger-Hashimoto).
                            <br />
                            Ethash requires the so called DAG file in order to
                            perform the calculations. This file grows over time,
                            which means that more operations for each hashing
                            operation need to be performed. This means that the
                            effective hashrate decreases a little each time the
                            DAG file grows.
                            <br />
                            This has to be considered when comparing the
                            theoretical output of your hashpower. Online
                            calculators do not take this into account.
                            <br />
                            Also, please keep in mind that some of our products
                            have a maintenance fee attached.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <span>04.</span> What are the expected returns?
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse visible"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample4"
                      >
                        <div className="accordion-body">
                          <p className="!text-black">
                            Bitcoin and altcoin mining depends highly on the
                            prices and network difficulties of the
                            Cryptocurrencies that you are mining, which cannot
                            be predicted. It would not “look right” if we would
                            provide data on the mining performance and sell
                            contracts at the same time. Therefore, we recommend
                            all our clients to do their own research and do
                            their own performance calculation.
                            <br />
                            For example, you might want to have a look at
                            coinwarz.com. Remember that some of our products
                            have a daily maintenance fee which must be deducted
                            from the daily mining rewards.
                            <br />
                            Please note that the website is an independent
                            source of reference and not related to ISLAND FX
                            CHARTS in any manner.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ paddingTop: "100px" }}>
          <div className="cta-one-bg col-12">
            <div className="cta-one-inner">
              <div className="cta-left">
                <h3 className="title">
                  Let’s discuss about how we can help make your trading better
                </h3>
              </div>
              <div className="cta-right">
                <a className="rts-btn btn-white" href="appoinment.html">
                  Lets Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End customers faq section --> */}
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
    </>
  );
};

export default FAQs;

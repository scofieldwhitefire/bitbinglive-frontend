import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import TopBanner from "../components/TopBanner";
import HomeHelmet from "../components/Helmets/HomeHelmet";
import UsefulLinks from "../components/UsefulLinks";

const StockTrading = () => {
  return (
    <>
      <HomeHelmet title={"Crypto Trading"} />
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
              <h1 className="title">Crypto Trading</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index-2.html">Home</a>
                <span> / </span>
                <a href="#" className="active">
                  Crypto Trading
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb area --> */}
      {/* <!-- start Forex trading section --> */}
      <div className="rts-service-details-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {/* <!-- service details left area start --> */}
              <div className="service-detials-step-1">
                <h4 className="title">TRADE TOP CRYPTOCURRENCIES</h4>
                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">
                      Build Your Crypto Currency Trading Portfolio with Capital
                      Market live
                    </h6>
                  </div>
                </div>
                <p className="disc">
                  Capital Market live is excited to announce the launch of our
                  new cryptocurrency trading platform. Now you can start trading
                  Bitcoin, Ethereum and many more cryptocurrencies quickly,
                  easily and safely from wherever you are — in just seconds. You
                  get great margin trading leverage and short sell options with
                  fast deposits and withdrawals. Our support team is available
                  24/7/365 to help get you trading on our CySEC-regulated
                  platform with a trading volume of US $11 billion monthly.
                </p>
                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">What is a crypto currency?</h6>
                  </div>
                </div>
                <p className="disc">
                  A Crypto Currency like bitcoin is a virtual currency traded
                  peer-to-peer on a blockchain, independent of centralized
                  authorities like banks and governments. Cryptocurrencies are
                  entirely virtual, so they are not backed by physical
                  commodities and have no intrinsic value.
                </p>
                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">How Do Cryptocurrencies Work?</h6>
                  </div>
                </div>
                <p className="disc">
                  Primarily, cryptocurrencies rely on blockchain technology to
                  complete a transaction via an intricate P2P network. Once a
                  transfer request is entered into the network, it is validated
                  by the network and added to a pool of other transactions to
                  create a block of data for the ledger, which is then entered
                  into the existing blockchain. Once the block is successfully
                  added to the chain, the transaction is approved and completed.
                </p>
                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">
                      Are There Investment Opportunities with Cryptocurrencies?
                    </h6>
                  </div>
                </div>
                <p className="disc">
                  Absolutely. Cryptocurrencies have become established
                  investment commodities among major financial institutions and
                  have even been adopted by countries such as Australia and
                  Japan. As with any investment though, there are risks linked
                  to market movements, high volatility and economics.
                </p>
              </div>
            </div>
            {/* <!--rts blog wizered area --> */}
            <UsefulLinks current="cryptotrading" />
            {/* <!-- rts- blog wizered end area --> */}
          </div>
        </div>
      </div>
      {/* <!-- End forex trading section --> */}
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

export default StockTrading;

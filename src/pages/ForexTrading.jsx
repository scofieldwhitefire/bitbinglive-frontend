import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import TopBanner from "../components/TopBanner";
import HomeHelmet from "../components/Helmets/HomeHelmet";
import UsefulLinks from "../components/UsefulLinks";

const ForexTrading = () => {
  return (
    <>
      <HomeHelmet title={"Forex Trading"} />
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
              <h1 className="title">Forex Trading</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index-2.html">Home</a>
                <span> / </span>
                <a href="#" className="active">
                  Forex Trading
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
                <h4 className="title">COPY EXPERT TRADERS</h4>
                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">What is Forex?</h6>
                  </div>
                </div>
                <p className="disc">
                  Forex is short for foreign exchange. The forex market is a
                  place where currencies are traded. It is the largest and most
                  liquid financial market in the world with an average daily
                  turnover of 6.6 trillion U.S. dollars as of 2019. The basis of
                  the forex market is the fluctuations of exchange rates. Forex
                  traders speculate on the price fluctuations of currency pairs,
                  making money on the difference between buying and selling
                  prices.
                </p>
                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">What is Margin?</h6>
                  </div>
                </div>
                <p className="disc">
                  Margin is the amount of a trader’s funds required to open a
                  new position. Margin is estimated based on the size of your
                  trade, which is measured in lots. A standard lot is 100,000
                  units. We also provide mini lots (10,000 units), micro lots
                  (1,000 units) and nano lots (100 units). The greater the lot,
                  the bigger the margin amount. Margin allows you to trade with
                  leverage, which, in turn, allows you to place trades larger
                  than the amount of your trading capital. Leverage influences
                  the margin amount too.
                </p>
                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">What is leverage?</h6>
                  </div>
                </div>
                <p className="disc">
                  Leverage is the ability to trade positions larger than the
                  amount of capital you possess. This mechanism allows traders
                  to use extra funds from a broker in order to increase the size
                  of their trades. For example, 1:100 leverage means that a
                  trader who has deposited $1,000 into his or her account can
                  trade with $100,000. Although leverage lets traders increase
                  their trade size and, consequently, potential gains, it
                  magnifies their potential losses putting their capital at
                  risk.
                </p>
                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">
                        When is the forex market open?
                        </h6>
                  </div>
                </div>
                <p className="disc">
                  Due to different time zones, the international forex market is
                  open 24 hours a day — from 5 p.m. Eastern Standard Time (EST)
                  on Sunday to 4 p.m. EST on Friday, except holidays. Markets
                  first open in Australasia, then in Europe and afterwards in
                  North America. So, when the market closes in Australia,
                  traders can have access to markets in other regions. The
                  24-hour availability of the forex market is what makes it so
                  attractive to millions of traders.
                </p>
              </div>
            </div>
            {/* <!--rts blog wizered area --> */}
            <UsefulLinks current="forextrading" />
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

export default ForexTrading;

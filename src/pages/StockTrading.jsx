import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import TopBanner from "../components/TopBanner";
import HomeHelmet from "../components/Helmets/HomeHelmet";
import UsefulLinks from "../components/UsefulLinks";

const StockTrading = () => {
  return (
    <>
      <HomeHelmet title={"Stock Trading"} />
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
              <h1 className="title">Stock Trading</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index-2.html">Home</a>
                <span> / </span>
                <a href="#" className="active">
                  Stock Trading
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
                <h4 className="title">STOCKS FOR YOUR PORTFOLIO</h4>
                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">What is CFD?</h6>
                  </div>
                </div>
                <p className="disc">
                  A CFD, or Contract for Difference, is a type of financial
                  instrument that allows you to trade on the price movements of
                  stocks, regardless of whether prices are rising or falling.
                  The key advantage of a CFD is the opportunity to speculate on
                  the price movements of an asset (upwards or downwards) without
                  actually owning the underlying asset. Stock trading has been a
                  popular financial pursuit since stocks were first introduced
                  by the Dutch East India Company in the 17th century. This is
                  both an efficient and effective type of investment for both
                  families and individuals.
                </p>
                <div className="flex items-start justify-start border-l-4 border-[#DF0A0A] pt-6 pl-5 my-4 w-auto shadow-sm shadow-[#6a6a6a1a]">
                  <div className="flex items-center justify-center mr-10 ">
                    <h6 className="title">What Are Stocks?</h6>
                  </div>
                </div>
                <p className="disc">
                  Stocks, also commonly referred to as equities or shares, are
                  issued by a public corporation and put up for sale. Companies
                  originally used stocks as a way of raising additional capital,
                  and as a way to boost their business growth. When the company
                  first puts these stocks up for sale, this is called the
                  Initial Public Offering. Once this stage is complete, the
                  shares themselves are then sold on the stock market, which is
                  where any stock trading will occur. People occasionally
                  confuse buying shares with physically owning a portion of that
                  company as if this somehow gives them the right to walk into
                  the company offices and begin exerting their ownership rights
                  over computers or furniture. The law treats this type of
                  corporation in a unique way; as it is treated as a legal
                  person, the corporation, therefore, owns its own assets. This
                  is referred to as the separation of ownership and control. The
                  separation of these things is beneficial to both the
                  shareholders and the corporation because it limits the
                  liability for each party. For example, if a major shareholder
                  were to go bankrupt, they cannot then sell assets belonging to
                  the corporation to cover their debts and pay their creditors.
                  This is the same in reverse; if a corporation you own shares
                  in goes bankrupt and the judge orders them to sell all their
                  assets, none of your own personal assets are at risk. One
                  thing lies at the core of a stock’s value: it entitles
                  shareholders to a portion of the company profits.
                </p>
              </div>
            </div>
            {/* <!--rts blog wizered area --> */}
            <UsefulLinks current="stocktrading" />
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

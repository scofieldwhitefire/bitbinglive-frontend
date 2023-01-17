import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import TopBanner from "../components/TopBanner";
import HomeHelmet from "../components/Helmets/HomeHelmet";
import UsefulLinks from "../components/UsefulLinks";
import { useEffect, useState } from "react";

const CopyTrading = () => {
  const [ch] = useState(!1)
  useEffect(() => {
    document.getElementById("anywhere-home").click();
  }, [ch])
  return (
    <>
      <HomeHelmet title={"Copy Trading"} />
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
              <h1 className="title">Copy Trading</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <a href="index-2.html">Home</a>
                <span> / </span>
                <a href="#" className="active">
                  Copy Trading
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
                <p className="disc">
                  It’s all in the name! Copy trading allows you to directly copy
                  the positions taken by another trader. You decide the amount
                  you wish to invest and simply copy everything they do
                  automatically in real-time – when that trader makes a trade,
                  your account will make that same trade as well. You do not
                  need to have any input on the trades, and you get the
                  identical returns on each trade as your chosen trader. But by
                  copying another trader, you could potentially make money based
                  on their skills. In fact, no advanced knowledge of the
                  financial market is required to take part!.
                </p>
                <p className="disc">
                  The history of copy trading goes back to 2005 when traders
                  used to copy specific algorithms that were developed through
                  automated trading. Brokers recognised the potential of having
                  systems where any linked to that trader could automatically
                  copy their trading account. There was no need to constantly
                  monitor email signals or trading ‘chat’ rooms. We think they
                  were onto something. Out of this were born services that
                  allowed traders to connect their personal trading accounts to
                  their platform. Traders no longer had to submit their specific
                  strategies. The popularity of copy trading has since exploded.
                </p>
                <p className="disc">
                  1 in 3 say a traditional stock market approach is over-complex
                  and this can be simplified by automatically following traders.
                  1 in 4 investors said they were considering Copy trading last
                  year.
                </p>
                <p className="disc">
                  Here is how the copier works: You, as an investor, simply
                  select an expert or experts that you want to copy trades from.
                  Once you are signed up, this is the only action needed on your
                  part.
                </p>
                <p className="disc">
                  Once you’ve taken care of the above, you are all set. There
                  are no codes that you need to run or signals for you to
                  manually input. Our software will handle the trade copying
                  automatically on your behalf. We monitor your experts trading
                  activity and as soon as there is a trade, we calculate all the
                  necessary parameters and execute the trade.
                </p>
                <p className="disc">
                  The only thing you have to make sure of is that you have
                  enough funds available in your trading account. When the
                  expert exits a position, you too will exit it. Automatically.
                </p>
              </div>
            </div>
            {/* <!--rts blog wizered area --> */}
            <UsefulLinks current="copytrading" />
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

export default CopyTrading;

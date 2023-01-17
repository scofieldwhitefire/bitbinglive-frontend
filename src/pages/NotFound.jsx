import { Images } from "../assets/images";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import TopBanner from "../components/TopBanner";
import HomeHelmet from "../components/Helmets/HomeHelmet";

const NotFound = () => {
  return (
    <>
      <HomeHelmet title={"Page Not Found"} />
      {/* <!-- start header area --> */}
      {/* <!-- start header area --> */}
      <header className="header--sticky header-one ">
        <TopBanner />
        <Menu />
      </header>
      {/* <!-- End header area --> */}
      <Sidebar />
      <div id="anywhere-home"></div>
      {/* <!-- rts- 404 area start --> */}
      <div class="rts-404-area rts-section-gap">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="404wrapper text-center">
                <div class="thumbnail">
                  <img src={Images.a404} alt="" />
                </div>
                <h2 class="title mt--40">Oops! Nothing Was Found</h2>
                <p class="disc">
                  Sorry, we couldn’t find the page you where looking for. We
                  suggest <br /> that you return to homepage.
                </p>
                <a class="rts-btn btn-primary" href="index-2.html">
                  Back To Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- rts- 404 area end --> */}
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

export default NotFound;

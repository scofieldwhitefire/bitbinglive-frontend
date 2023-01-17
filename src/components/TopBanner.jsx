import { Link } from "react-router-dom";

const TopBanner = () => {
  return (
    <>
      <div className="header-top header-top-one bg-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-xl-block d-none">
              <div className="left">
                <div className="mail">
                  <a href="mailto:support@bitbinglive.com">
                    <i className="fal fa-envelope"></i> support@bitbinglive.com
                  </a>
                </div>
                <div className="working-time">
                  <p>
                    <i className="fal fa-clock"></i> Working: 8.00am - 5.00pm
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-xl-block d-none">
              <div className="right">
                <ul className="top-nav">
                  <li>
                    <Link to="/about-us">About</Link>
                  </li>
                  {/* <li>
                    <Link to="/blogs">News</Link>
                  </li> */}
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
                <ul className="social-wrapper-one">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="mr--0" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBanner
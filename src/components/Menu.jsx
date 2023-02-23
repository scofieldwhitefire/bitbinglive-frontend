import { Images, Logos } from "../assets/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ClientJS } from "clientjs";

const Menu = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const client = new ClientJS();

  const isMobile = client.isMobile();

  return (
    <>
      <div className="header-main-one bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
              <div className="thumbnail">
                <Link to="/">
                  <img
                    src={Logos.logoD}
                    alt="pro-logo"
                    className={`${!isMobile ? "w-[180px] h-[50px]" : ""}`}
                  />
                  {/* <h4 className="text-[23px] lg:text-[32px] font-bold">
                    Bitbing<span className="font-light">live</span>
                  </h4> */}
                </Link>
              </div>
            </div>
            <div className=" col-xl-9 col-lg-8 col-md-8 col-sm-8 col-8">
              <div className="main-header">
                <nav className="nav-main mainmenu-nav d-none d-xl-block">
                  <ul className="mainmenu">
                    <li>
                      {/* <Link className="nav-item" to="/services">
                        Services
                      </Link> */}
                    </li>
                    {/* <li>
                      <Link className="nav-item" to="/plans">
                        Prices & Plan
                      </Link>
                    </li> */}
                    <li>
                      <Link className="nav-item" to="/faqs">
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-item" to="/about-us">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                    {isMobile && (
                      <li>
                        <Link className="nav-item" to="/about-us">
                          About Us
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
                <div className="button-area">
                  {/* <button id="search" className="rts-btn btn-primary-alta">
                    <i className="far fa-search"></i>
                  </button> */}
                  {/* <div className="search-input-area">
                    <div className="container">
                      <div className="search-input-inner">
                        <div className="input-div">
                          <input
                            id="searchInput1"
                            className="search-input"
                            type="text"
                            placeholder="Search by keyword or #"
                          />
                          <button>
                            <i className="far fa-search"></i>
                          </button>
                        </div>
                        <div id="close" className="search-close-icon">
                          <i className="far fa-times"></i>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {isAuthenticated ? (
                    <Link
                      to="/dashboard"
                      className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <a
                      href="https://app.bitbinglive.com"
                      className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn"
                    >
                      Login
                    </a>
                  )}

                  <button
                    id="menu-btn"
                    className="menu rts-btn btn-primary-alta ml--20 ml_sm--5"
                  >
                    <img
                      className="menu-dark"
                      src={Images.menu}
                      alt="Menu-icon"
                    />
                    <img
                      className="menu-light"
                      src={Images.menuLight}
                      alt="Menu-icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

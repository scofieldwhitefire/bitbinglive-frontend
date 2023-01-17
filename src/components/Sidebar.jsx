import { Logos } from "../assets/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <div id="side-bar" className="side-bar">
        <button className="close-icon-menu">
          <i className="far fa-times"></i>
        </button>
        {/* <!-- inner menu area desktop start --> */}
        <div className="rts-sidebar-menu-desktop">
          <Link className="logo-1" to="/">
            <img className="logo" src={Logos.logoD} width="150" height="40" alt="pro_logo" />
            {/* <h4 className="text-[28px] lg:text-[32px] font-bold mt-4">
              Bitbing<span className="font-light">live</span>
            </h4> */}
          </Link>
          <Link className="logo-2" to="/">
            <img className="logo" src={Logos.logoD} width="150" height="40" alt="pro_logo" />
            {/* <h4 className="text-[28px] lg:text-[32px] font-bold mt-4">
              Bitbing<span className="font-light">live</span>
            </h4> */}
          </Link>
          <Link className="logo-3" to="/">
            <img className="logo" src={Logos.logoD} width="150" height="40" alt="pro_logo" />
            {/* <h4 className="text-[28px] lg:text-[32px] font-bold mt-4">
              Bitbing<span className="font-light">live</span>
            </h4> */}
          </Link>
          <Link className="logo-4" to="/">
            <img className="logo" src={Logos.logoD} width="150" height="40" alt="pro_logo" />
            {/* <h4 className="text-[28px] lg:text-[32px] font-bold mt-4">
              Bitbing<span className="font-light">live</span>
            </h4> */}
          </Link>
          <div className="body d-none d-xl-block">
            <p className="disc">
              Bitbing<span className="font-light">live</span> Limited, is an officially registered company which
              gives its clients 100% guarantee.
            </p>
            <div className="get-in-touch">
              {/* <!-- title --> */}
              <div className="h6 title">Get In Touch</div>
              {/* <!-- title End --> */}
              <div className="wrapper">
                {/* <!-- single --> */}
                <div className="single">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+15616231490">+1 (561) 623 1490</a>
                </div>
                {/* <!-- single ENd --> */}
                {/* <!-- single --> */}
                <div className="single">
                  <i className="fas fa-envelope"></i>
                  <a href="#">support@bitbinglive.com</a>
                </div>
                {/* <!-- single ENd --> */}
                {/* <!-- single --> */}
                <div className="single">
                  <i className="fas fa-globe"></i>
                  <a href="#">bitbinglive.com</a>
                </div>
                {/* <!-- single ENd --> */}
                {/* <!-- single --> */}
                <div className="single">
                  <i className="fas fa-map-marker-alt"></i>
                  <a href="#">58 Peregrine Road, Hainault, Ilford, Essex IG6 3SZ UK</a>
                </div>
                {/* <!-- single ENd --> */}
              </div>
              <div className="social-wrapper-two menu">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-whatsapp"></i>
                </a>
                {/* <!-- <a href="#"><i className="fab fa-linkedin"></i></a> --> */}
              </div>
            </div>
          </div>
          <div className="body-mobile d-block d-xl-none">
            <nav className="nav-main mainmenu-nav">
              <ul className="mainmenu">
                {/* <li>
                  <Link to="/services">Services</Link>
                </li> */}
                {/* <li>
                  <Link to="/plans">Price & Plan</Link>
                </li> */}
                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link to="/about-us">About US</Link>
                </li>
                {/* <li>
                  <Link to="/blogs">Blog</Link>
                </li> */}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="social-wrapper-two menu mobile-menu">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              {/* <!-- <a href="#"><i className="fab fa-linkedin"></i></a> --> */}
            </div>
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
              >
                Dashboard
              </Link>
            ) : (
              <div className="flex">
                <Link
                  to="/login"
                  className="mx-2 px-4 rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="mx-2 px-4 rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <!-- inner menu area desktop End --> */}
      </div>
    </>
  );
};

export default Sidebar;

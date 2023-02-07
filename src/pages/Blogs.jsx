import { Images } from "../assets/images";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import TopBanner from "../components/TopBanner";
import HomeHelmet from "../components/Helmets/HomeHelmet";
import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
<HomeHelmet title={"Blog"} />
      {/* <!-- start header area --> */}
      {/* <!-- start header area --> */}
      <header classNameName="header--sticky header-one ">
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
              <h1 className="title">Latest Blogs</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <Link href="/">Home</Link>
                <span> / </span>
                <a href="#" className="active">
                  Latest Blogs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb area --> */}

      {/* <!-- rts blog grid area --> */}
      <div className="rts-blog-grid-area rts-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12 pr--40 pr_md--0 pr_sm-controler--0">
              <div className="row g-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* <!-- start blog grid inner --> */}
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <Link className="thumbnail" to="/blogs/blogname">
                        <img
                          src={Images.grid01}
                          alt="Business_Blog"
                        />
                      </Link>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-file"></i>
                          <span>Business</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>News</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <Link to="/blogs/blogname">
                        <h5 className="title">
                          Building smart business grow solution for you
                        </h5>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end blog grid inner --> */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* <!-- start blog grid inner --> */}
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <Link className="thumbnail" to="/blogs/blogname">
                        <img
                          src={Images.grid02}
                          alt="Business_Blog"
                        />
                      </Link>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <Link to="/blogs/blogname">
                        <h5 className="title">
                          Smart business grow solution for your Building.
                        </h5>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end blog grid inner --> */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* <!-- start blog grid inner --> */}
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <Link className="thumbnail" to="/blogs/blogname">
                        <img
                          src={Images.grid03}
                          alt="Business_Blog"
                        />
                      </Link>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <Link to="/blogs/blogname">
                        <h5 className="title">
                          More smart business grow solution for you
                        </h5>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end blog grid inner --> */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* <!-- start blog grid inner --> */}
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <Link className="thumbnail" to="/blogs/blogname">
                        <img
                          src={Images.grid04}
                          alt="Business_Blog"
                        />
                      </Link>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <Link to="/blogs/blogname">
                        <h5 className="title">
                          Best smart business grow solution for you
                        </h5>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end blog grid inner --> */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* <!-- start blog grid inner --> */}
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <Link className="thumbnail" to="/blogs/blogname">
                        <img
                          src={Images.grid05}
                          alt="Business_Blog"
                        />
                      </Link>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <Link to="/blogs/blogname">
                        <h5 className="title">
                          Solution your business grow solution for you
                        </h5>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end blog grid inner --> */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* <!-- start blog grid inner --> */}
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <Link className="thumbnail" to="/blogs/blogname">
                        <img
                          src={Images.grid06}
                          alt="Business_Blog"
                        />
                      </Link>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <Link to="/blogs/blogname">
                        <h5 className="title">
                          Smart business grow solution for your Company
                        </h5>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end blog grid inner --> */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* <!-- start blog grid inner --> */}
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <Link className="thumbnail" to="/blogs/blogname">
                        <img
                          src={Images.grid07}
                          alt="Business_Blog"
                        />
                      </Link>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <Link to="/blogs/blogname">
                        <h5 className="title">
                          Latest business grow solution for you
                        </h5>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end blog grid inner --> */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* <!-- start blog grid inner --> */}
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <Link className="thumbnail" to="/blogs/blogname">
                        <img
                          src={Images.grid08}
                          alt="Business_Blog"
                        />
                      </Link>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <Link to="/blogs/blogname">
                        <h5 className="title">
                          Thinking smart business grow solution for you
                        </h5>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end blog grid inner --> */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* <!-- start blog grid inner --> */}
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <Link className="thumbnail" to="/blogs/blogname">
                        <img
                          src={Images.grid09}
                          alt="Business_Blog"
                        />
                      </Link>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <Link to="/blogs/blogname">
                        <h5 className="title">
                          Smart business grow solution for your building.
                        </h5>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end blog grid inner --> */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* <!-- start blog grid inner --> */}
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <Link className="thumbnail" to="/blogs/blogname">
                        <img
                          src={Images.grid10}
                          alt="Business_Blog"
                        />
                      </Link>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <Link to="/blogs/blogname">
                        <h5 className="title">
                          Grow smart business grow solution for you
                        </h5>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end blog grid inner --> */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* <!-- start blog grid inner --> */}
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <Link className="thumbnail" to="/blogs/blogname">
                        <img
                          src={Images.grid01}
                          alt="Business_Blog"
                        />
                      </Link>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <Link to="/blogs/blogname">
                        <h5 className="title">
                          business grow solution for you Building smart
                        </h5>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end blog grid inner --> */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* <!-- start blog grid inner --> */}
                  <div className="blog-grid-inner">
                    <div className="blog-header">
                      <Link className="thumbnail" to="/blogs/blogname">
                        <img
                          src={Images.grid02}
                          alt="Business_Blog"
                        />
                      </Link>
                      <div className="blog-info">
                        <div className="user">
                          <i className="fal fa-user-circle"></i>
                          <span>by Smith</span>
                        </div>
                        <div className="user">
                          <i className="fal fa-tags"></i>
                          <span>Business</span>
                        </div>
                      </div>
                      <div className="date">
                        <h6 className="title">15</h6>
                        <span>Jan</span>
                      </div>
                    </div>
                    <div className="blog-body">
                      <Link to="/blogs/blogname">
                        <h5 className="title">
                          Building smart business grow solution for you
                        </h5>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end blog grid inner --> */}
                </div>
              </div>
              {/* <!-- pagination area --> */}
              <div className="row mt--30">
                <div className="col-12">
                  <div className="text-center">
                    <div className="pagination">
                      <button className="active">01</button>
                      <button>02</button>
                      <button>03</button>
                      <button>04</button>
                      <button>
                        <i className="fal fa-angle-double-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- pagination area End --> */}
            </div>
            {/* <!--rts blog wized area --> */}
            <div className="col-xl-4 col-md-12 col-sm-12 col-12">
              {/* <!-- single wized start --> */}
              <div className="rts-single-wized search">
                <div className="wized-header">
                  <h5 className="title">Search Blog</h5>
                </div>
                <div className="wized-body">
                  <div className="rts-search-wrapper">
                    <input
                      className="Search"
                      type="text"
                      placeholder="Enter Keyword"
                    />
                    <button>
                      <i className="fal fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- single wized End --> */}
              {/* <!-- single wized start --> */}
              <div className="rts-single-wized Categories">
                <div className="wized-header">
                  <h5 className="title">Categories</h5>
                </div>
                <div className="wized-body">
                  {/* <!-- single categoris --> */}
                  <ul className="single-categories">
                    <li>
                      <a href="#">
                        Business Solution{" "}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- single categoris End --> */}
                  {/* <!-- single categoris --> */}
                  <ul className="single-categories">
                    <li>
                      <a href="#">
                        Solution Model
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- single categoris End --> */}
                  {/* <!-- single categoris --> */}
                  <ul className="single-categories">
                    <li>
                      <a href="#">
                        Business Advantage
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- single categoris End --> */}
                  {/* <!-- single categoris --> */}
                  <ul className="single-categories">
                    <li>
                      <a href="#">
                        Feature Product
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- single categoris End --> */}
                  {/* <!-- single categoris --> */}
                  <ul className="single-categories">
                    <li>
                      <a href="#">
                        Catagory Thury
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- single categoris End --> */}
                </div>
              </div>
              {/* <!-- single wizered End --> */}
              {/* <!-- single wizered start --> */}
              <div className="rts-single-wized Recent-post">
                <div className="wized-header">
                  <h5 className="title">Recent Posts</h5>
                </div>
                <div className="wized-body">
                  {/* <!-- recent-post --> */}
                  <div className="recent-post-single">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          src={Images.recentpost01}
                          alt="Blog_post"
                        />
                      </a>
                    </div>
                    <div className="content-area">
                      <div className="user">
                        <i className="fal fa-clock"></i>
                        <span>15 Jan, 2023</span>
                      </div>
                      <a className="post-title" href="#">
                        <h6 className="title">
                          We would love to share a similar experience
                        </h6>
                      </a>
                    </div>
                  </div>
                  {/* <!-- recent-post End --> */}
                  {/* <!-- recent-post --> */}
                  <div className="recent-post-single">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          src={Images.recentpost02}
                          alt="Blog_post"
                        />
                      </a>
                    </div>
                    <div className="content-area">
                      <div className="user">
                        <i className="fal fa-clock"></i>
                        <span>15 Jan, 2023</span>
                      </div>
                      <a className="post-title" href="#">
                        <h6 className="title">
                          We would love to share a similar experience
                        </h6>
                      </a>
                    </div>
                  </div>
                  {/* <!-- recent-post End --> */}
                  {/* <!-- recent-post --> */}
                  <div className="recent-post-single">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          src={Images.recentpost03}
                          alt="Blog_post"
                        />
                      </a>
                    </div>
                    <div className="content-area">
                      <div className="user">
                        <i className="fal fa-clock"></i>
                        <span>15 Jan, 2023</span>
                      </div>
                      <a className="post-title" href="#">
                        <h6 className="title">
                          We would love to share a similar experience
                        </h6>
                      </a>
                    </div>
                  </div>
                  {/* <!-- recent-post End --> */}
                  {/* <!-- recent-post --> */}
                  <div className="recent-post-single">
                    <div className="thumbnail">
                      <a href="#">
                        <img
                          src={Images.recentpost04}
                          alt="Blog_post"
                        />
                      </a>
                    </div>
                    <div className="content-area">
                      <div className="user">
                        <i className="fal fa-clock"></i>
                        <span>15 Jan, 2023</span>
                      </div>
                      <a className="post-title" href="#">
                        <h6 className="title">
                          We would love to share a similar experience
                        </h6>
                      </a>
                    </div>
                  </div>
                  {/* <!-- recent-post End --> */}
                </div>
              </div>
              {/* <!-- single wized End --> */}
              {/* <!-- single wized start --> */}
              <div className="rts-single-wized Recent-post">
                <div className="wized-header">
                  <h5 className="title">Recent Posts</h5>
                </div>
                <div className="wized-body">
                  <div className="gallery-inner">
                    <div className="row-1 single-row">
                      <a href="#">
                        <img
                          src={Images.gallery01} alt="Gallery"
                        />
                      </a>
                      <a href="#">
                        <img
                          src={Images.gallery02} alt="Gallery"
                        />
                      </a>
                      <a href="#">
                        <img
                          src={Images.gallery03} alt="Gallery"
                        />
                      </a>
                    </div>
                    <div className="row-2 single-row">
                      <a href="#">
                        <img
                          src={Images.gallery04} alt="Gallery"
                        />
                      </a>
                      <a href="#">
                        <img
                          src={Images.gallery05} alt="Gallery"
                        />
                      </a>
                      <a href="#">
                        <img
                          src={Images.gallery06} alt="Gallery"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- single wized End --> */}
              {/* <!-- single wized start --> */}
              <div className="rts-single-wized">
                <div className="wized-header">
                  <h5 className="title">Popular Tags</h5>
                </div>
                <div className="wized-body">
                  <div className="tags-wrapper">
                    <a href="#">Services</a>
                    <a href="#">Business</a>
                    <a href="#">Growth</a>
                    <a href="#">Finance</a>
                    <a href="#">UI/UX Design</a>
                    <a href="#">Solution</a>
                    <a href="#">Speed</a>
                    <a href="#">Strategy</a>
                    <a href="#">Technology</a>
                  </div>
                </div>
              </div>
              {/* <!-- single wized End --> */}
              {/* <!-- single wized start --> */}
              <div className="rts-single-wized contact">
                <div className="wized-header">
                  <a href="index-2.html">
                    <img
                      src="assets/images/logo/logo-2.svg"
                      alt="Business_logo"
                    />
                  </a>
                </div>
                <div className="wized-body">
                  <h5 className="title">Need Help? We Are Here To Help You</h5>
                  <a className="rts-btn btn-primary" href="contactus.html">
                    Contact Us
                  </a>
                </div>
              </div>
              {/* <!-- single wized End --> */}
            </div>
            {/* <!-- rts- blog wized end area --> */}
          </div>
        </div>
      </div>
      {/* <!-- rts blog grid area end --> */}

      {/* <!-- start header area --> */}
      <Footer />
      {/* <!-- ENd Header Area --> */}

      {/* <!-- start loader --> */}
      <div classNameName="loader-wrapper">
        <div classNameName="loader"></div>
        <div classNameName="loader-section section-left"></div>
        <div classNameName="loader-section section-right"></div>
      </div>
      {/* <!-- End loader --> */}

      {/* <!-- progress Back to top --> */}
      <div classNameName="progress-wrap">
        <svg
          classNameName="progress-circle svg-content"
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

export default Blogs;

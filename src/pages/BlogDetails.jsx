import { Images } from "../assets/images";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Sidebar from "../components/Sidebar";
import TopBanner from "../components/TopBanner";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import HomeHelmet from "../components/Helmets/HomeHelmet";

const BlogDetails = () => {
  const params = useParams();
  const dBlog = params.blogname;
  console.log(dBlog);
  return (
    <>
      {/* <HomeHelmet title={`Blog - ${dBlog?dBlog:''}`} /> */}
      <HomeHelmet title={`Blog Detail`} />
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
              <h1 className="title">{dBlog} Details</h1>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="bread-tag">
                <Link href="/">Home</Link>
                <span> / </span>
                <a href="#" className="active">
                  Blog Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb area --> */}

      {/* <!-- rts blog mlist area --> */}
      <div className="rts-blog-list-area rts-section-gap">
        <div className="container">
          <div className="row g-5">
            {/* <!-- rts blo post area --> */}
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {/* <!-- single post --> */}
              <div className="blog-single-post-listing details mb--0">
                <div className="thumbnail">
                  <img src={Images.blogbloglg1} alt="Business-Blog" />
                </div>
                <div className="blog-listing-content">
                  <div className="user-info">
                    {/* <!-- single info --> */}
                    <div className="single">
                      <i className="far fa-clock"></i>
                      <span>Jan 12, 2022</span>
                    </div>
                    {/* <!-- single info end --> */}
                    {/* <!-- single info --> */}
                    <div className="single">
                      <i className="far fa-file"></i>
                      <span>Business</span>
                    </div>
                    {/* <!-- single info end --> */}
                    {/* <!-- single info --> */}
                    <div className="single">
                      <i className="far fa-tags"></i>
                      <span>News</span>
                    </div>
                    {/* <!-- single info end --> */}
                  </div>
                  <h3 className="title">
                    Profitable business makes your profit
                  </h3>
                  <p className="disc para-1">
                    Collaboratively pontificate bleeding edge resources with
                    inexpensive methodologies globally initiate
                    multidisciplinary compatible architectures pidiously
                    repurpose leading edge growth strategies with just in time
                    web readiness communicate timely meta services
                  </p>
                  <p className="disc">
                    Onubia semper vel donec torquent fusce mauris felis aptent
                    lacinia nisl, lectus himenaeos euismod molestie iaculis
                    interdum in laoreet condimentum dictum, quisque quam risus
                    sollicitudin gravida ut odio per a et. Gravida maecenas
                    lobortis suscipit mus sociosqu convallis, mollis vestibulum
                    donec aliquam risus sapien ridiculus, nulla sollicitudin
                    eget in venenatis. Tortor montes platea iaculis posuere per
                    mauris, eros porta blandit curabitur ullamcorper varius
                  </p>
                  {/* <!-- quote area start --> */}
                  {/* <div className="rts-quote-area text-center">
                    <h5 className="title">
                      “Placerat pretium tristique mattis tellus accuan metus
                      dictumst vivamus odio nulla fusce auctor into suscipit
                      habitasse class congue potenti iaculis”
                    </h5>
                    <a href="#" className="name">
                      Daniel X. Horrar
                    </a>
                    <span>Author</span>
                  </div> */}
                  {/* <!-- quote area end --> */}

                  <p className="disc">
                    Ultrices iaculis commodo parturient euismod pulvinar donec
                    cum eget a, accumsan viverra cras praesent cubilia dignissim
                    ad rhoncus. Gravida maecenas lobortis suscipit mus sociosqu
                    convallis, mollis vestibulum donec aliquam risus sapien
                    ridiculus, nulla sollicitudin eget in venenatis. Tortor
                    montes platea iaculis posuere per mauris, eros porta blandit
                    curabitur ullamcorper varius, nostra ante risus egestas
                    suscipit. Quisque interdum nec parturient facilisis nunc ac
                    quam, ad est cubilia mauris himenaeos nascetur vestibulum.
                  </p>

                  {/* <div className="row g-5">
                    <div className="col-lg-6 col-md-6">
                      <div className="thumbnail details">
                        <img
                          src={Images.blogdetails01}
                          alt="finbiz_buseness"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="thumbnail details">
                        <img
                          src={Images.blogdetails02}
                          alt="finbiz_buseness"
                        />
                      </div>
                    </div>
                  </div> */}

                  {/* <h4 className="title mt--40 mt_sm--20">
                    Ultimate Business Strategy Solution
                  </h4> */}
                  <p className="disc mb--25">
                    Gravida maecenas lobortis suscipit mus sociosqu convallis,
                    mollis vestibulum donec aliquam risus sapien ridiculus,
                    nulla sollicitudin eget in venenatis. Tortor montes platea
                    iaculis posuere per mauris, eros porta blandit curabitur
                    ullamcorper varius nostra ante risus egestas.
                  </p>
                  <p className="disc mt--30">
                    Cubilia hendrerit luctus sem aptent curae gravida maecenas
                    eleifend nunc nec vitae morbi sodales fusce tristique aenean
                    habitasse mattis sociis feugiat conubia mus auctor praesent
                    urna tincidunt taciti dui lobortis nullam. Mattis placerat
                    feugiat ridiculus sed a per curae fermentum aenean facilisi,
                    vitae urna imperdiet ac mauris non inceptos luctus hac odio.
                  </p>
                  <div className="row  align-items-center">
                    <div className="col-lg-6 col-md-12">
                      {/* <!-- tags details --> */}
                      <div className="details-tag">
                        <h6>Tags:</h6>
                        <button>Services</button>
                        <button>Business</button>
                        <button>Growth</button>
                      </div>
                      {/* <!-- tags details End --> */}
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="details-share">
                        <h6>Share:</h6>
                        <button>
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button>
                          <i className="fab fa-twitter"></i>
                        </button>
                        <button>
                          <i className="fab fa-instagram"></i>
                        </button>
                        <button>
                          <i className="fab fa-linkedin-in"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="replay-area-details"
                    style={{
                      borderTop: "1px solid #E6E9F0",
                    }}
                  >
                    <h4 className="title" style={{ paddingTop: "15px" }}>
                      Leave a Reply
                    </h4>
                    <form action="#">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="col-lg-6">
                          <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="col-12">
                          <input type="text" placeholder="Select Topic" />
                          <textarea></textarea>
                        </div>
                      </div>
                    </form>
                  </div>
                  <a className="rts-btn btn-primary" href="#">
                    Submit Message
                  </a>
                </div>
              </div>
              {/* <!-- single post End--> */}
            </div>
            {/* <!-- rts-blog post end area --> */}
            {/* <!--rts blog wizered area --> */}
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
                        <img src={Images.recentpost01} alt="Blog_post" />
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
                        <img src={Images.recentpost02} alt="Blog_post" />
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
                        <img src={Images.recentpost03} alt="Blog_post" />
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
                        <img src={Images.recentpost04} alt="Blog_post" />
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
                        <img src={Images.gallery01} alt="Gallery" />
                      </a>
                      <a href="#">
                        <img src={Images.gallery02} alt="Gallery" />
                      </a>
                      <a href="#">
                        <img src={Images.gallery03} alt="Gallery" />
                      </a>
                    </div>
                    <div className="row-2 single-row">
                      <a href="#">
                        <img src={Images.gallery04} alt="Gallery" />
                      </a>
                      <a href="#">
                        <img src={Images.gallery05} alt="Gallery" />
                      </a>
                      <a href="#">
                        <img src={Images.gallery06} alt="Gallery" />
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
            {/* <!-- rts- blog wizered end area --> */}
          </div>
        </div>
      </div>
      {/* <!-- rts blog mlist area End --> */}

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

export default BlogDetails;

import React from 'react';

const Header = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Zara Therapy Clinic</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="Free HTML Templates" name="keywords" />
      <meta content="Free HTML Templates" name="description" />

      {/* <!-- Favicon --> */}
      <link href="img/favicon.png" rel="icon" />

      {/* <!-- Google Web Fonts --> */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* <!-- Icon Font Stylesheet --> */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />

      {/* <!-- Libraries Stylesheet --> */}
      <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      <link
        href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
        rel="stylesheet"
      />
      <link href="lib/twentytwenty/twentytwenty.css" rel="stylesheet" />

      {/* <!-- Customized Bootstrap Stylesheet --> */}
      <link href="css/bootstrap.min.css" rel="stylesheet" />

      {/* <!-- Template Stylesheet --> */}
      <link href="css/style.css" rel="stylesheet" />

      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary m-1" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-dark m-1" role="status">
          <span className="sr-only">Do not be impatient...</span>
        </div>
        <div className="spinner-grow text-secondary m-1" role="status">
          <span className="sr-only">We'll be right there!</span>
        </div>
      </div>
      {/* Spinner End */}

     {/* Topbar Start */}
    <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            <small className="py-2">
              <i className="far fa-clock text-primary me-2"></i>Opening Hours: Mon
              - Sat : 8.00 am - 8.00 pm | Sunday : 9.00am - 4.00 pm
            </small>
          </div>
        </div>
        <div className="col-md-6 text-center text-lg-end">
          <div
            className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5"
          >
            <div className="me-3 pe-3 border-end py-2">
              <p className="m-0">
                <i className="fa fa-envelope-open me-2"></i>info@example.com
              </p>
            </div>
            <div className="py-2">
              <p className="m-0">
                <i className="fa fa-phone-alt me-2"></i>+(023) 6349 4940
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Topbar Start */}

    {/* Navbar Start */}
    <nav
      className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0"
    >
      <a href="index.html" className="navbar-brand p-0">
        <img className="w-100" src="img/logo4.jpg" alt="Image" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="index.html" className="nav-item nav-link active">Home</a>
          <a href="about.html" className="nav-item nav-link">About</a>
          <a href="service.html" className="nav-item nav-link">Service</a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Problems We Treat</a
            >
            <div className="dropdown-menu m-0">
              <a href="disc.html" className="dropdown-item">Disc Syndrome</a>
              <a href="scia.html" className="dropdown-item">Sciatica</a>
              <a href="neck.html" className="dropdown-item">Neck Pain</a>
              <a href="sportInju.html" className="dropdown-item">Sport Injuries</a>
              <a href="scoliosis.html" className="dropdown-item">Scoliosis</a>
              <a href="lowBack.html" className="dropdown-item">Low back pain</a>
              <a href="headaches.html" className="dropdown-item">Headaches</a>
              <a href="foot.html" className="dropdown-item">Foot Problems</a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Pages</a
            >
            <div className="dropdown-menu m-0">
              <a href="product.html" className="dropdown-item">Product</a>

              <a href="team.html" className="dropdown-item">Our Doctors</a>
              <a href="testimonial.html" className="dropdown-item">Testimonial</a>
              <a href="appointment.html" className="dropdown-item">Appointment</a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">Contact</a>
        </div>
        <button
          type="button"
          className="btn text-dark"
          data-bs-toggle="modal"
          data-bs-target="#searchModal"
        >
          <i className="fa fa-search"></i>
        </button>
        <a href="appointment.html" className="btn btn-primary py-2 px-4 ms-3"
          >Appointment</a
        >
      </div>
    </nav>
    {/* Navbar End */}

      {/* Full Screen Search Start */}
    <div className="modal fade" id="searchModal" tabIndex="-1">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content" style={{ background: 'rgba(9, 30, 62, 0.7)' }}>
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn bg-white btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="modal-body d-flex align-items-center justify-content-center"
          >
            <div className="input-group" style={{ maxWidth: '600px' }}>
              <input
                type="text"
                className="form-control bg-transparent border-primary p-3"
                placeholder="Type search keyword"
              />
              <button className="btn btn-primary px-4">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Full Screen Search End */}

    {/* JavaScript Libraries */}
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/tempusdominus/js/moment.min.js"></script>
    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
    <script src="lib/twentytwenty/jquery.event.move.js"></script>
    <script src="lib/twentytwenty/jquery.twentytwenty.js"></script>

    {/* Template Javascript */}
    <script src="js/main.js"></script>
    </>
  );
};

export default Header;

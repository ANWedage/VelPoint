import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-light section-dark">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <h3 className="fs-20 mb-3">Address</h3>
            <p className="mb-0">121 VelPoint Drive, San Francisco</p>
            <p className="mb-0">CA 94107</p>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <img src="/images/footerlogo.png" className="w-100px mb-4" alt="VelPoint" />
            <div className="social-icons d-flex justify-content-center">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <h3 className="fs-20 mb-3">Contact Us</h3>
            <p className="mb-0">T. +1 123 456 789</p>
            <p className="mb-0">M. contact@velpoint.com</p>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              Copyright 2026 - VelPoint Cyber Solutions
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

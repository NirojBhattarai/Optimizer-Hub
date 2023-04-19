import React from "react";
import "bootstrap/js/dist/dropdown";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  let styleCopyright = {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  };

  let styleFooter = {
    backgroundColor: "rgb(15 23 42)",
  };

  let footerTop = {
    backgroundColor:"rgb(9, 15, 30)"
  }

  return (
    <div>
      <footer
        className="text-center text-lg-start text-white text-muted"
        style={styleFooter}
      >
        <section style={footerTop} className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block text-white" >
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="text-white">
            <a href="/" className="me-4 text-reset">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="bi bi-google"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </section>

      
        <div className="text-center text-white p-4" style={styleCopyright}>
          © 2023 Copyright:
          <a
            className="text-reset fw-bold"
            href="https://nirojbhattarai.com.np/"
          >
            nirojbhattarai.com.np
          </a>
        </div>
      </footer>
    </div>
  );
}

import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul>
          <li>Sitemap</li>
          <li>Downloads</li>
          <li>Retention Schedule</li>
          <li>Events</li>
          <li>Terms & Conditions</li>
          <li>WIM</li>
          <li>Website Policies</li>
          <li>Contact Us</li>
        </ul>
     
      <div className="footerbottom">
        <div className="footerbottom-container">
          <div className="copyrights">
            © 2024 Institute of Secretariat Training & Management. All Rights
            Reserved.
          </div>
          <div className="totalvisitors">Total visitors: 1234567</div>
          <div className="lastupdate">Last Updated On: 18 Dec, 2023</div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;

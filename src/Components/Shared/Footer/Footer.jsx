import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <Link to="" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link to="" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </Link>
        </div>
        <p className="footer-text">
          Copyright © 2025 DeepL Technology. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

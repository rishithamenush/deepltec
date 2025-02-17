import { FaEnvelope, FaFax, FaMapMarker, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ContactFooter.css";

export default function ContactFooter() {
  return (
    <div className="back ">
      <div className="container">
        <div className=" py-5 row ">
          <div className="text-white col-lg-4">
            <h4>About Us</h4>
            <div className="">
              <p>
                DeepL Technology and Blockchain Solutions is a Private
                Shareholding company, headquartered in Palestine and owned by
                talented experts. Our IT Solutions Firm specialized in providing
                professional services and integrated solutions mainly in Oracle
                technologies. DeepL is focusing on High-Ends technologies and
                products such as Blockchain, Oracle Database, Middleware,
                Security, Disaster Recovery, Virtualization in addition to
                software development.
              </p>
              <span className="oracle-partner container">
                <img
                  src="/Images/oracle.svg"
                  alt="Oracle Partner"
                  className="responsive-img"
                />
                <span>| Partner</span>
              </span>
            </div>
          </div>
          <div className="text-white col-lg-5">
            <h4 className="">Our Services</h4>
            <div className="d-flex w-100">
              <ul>
                <li>
                  <Link
                    className="text-decoration-none text-white linkhover"
                    to="/Oracle"
                  >
                    Oracle RDBMS implementation and support.
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white linkhover"
                    to="/Msql"
                  >
                    Microsoft SQL Server implementation and management.
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white linkhover"
                    to="/Solutions"
                  >
                    High Availability solutions (Active-Active Database
                    solutions, RAC, fail-over).
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white linkhover"
                    to="/Data"
                  >
                    Data Guard Implementations.
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white linkhover"
                    to="/Ebusiness"
                  >
                    Oracle E-Business Suite Implementation and Support.
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white linkhover"
                    to="/Cloud"
                  >
                    Oracle Fusion Cloud Implementation.
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white linkhover"
                    to="/Security"
                  >
                    Oracle Security Solutions.
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white linkhover"
                    to="/Software"
                  >
                    Software Development.
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white linkhover"
                    to="/Web"
                  >
                    Web Development.
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="contact-details contact-details-map w-100">
              <h4 className="text-white">Contact Details</h4>
              <ul className="text-decoration-none list-unstyled">
                <li className="text-white ">
                  <FaMapMarker />
                  <span className="text-decoration-none ">
                    Malabe,Colombo,Sri Lanka
                  </span>
                </li>

                <li className="text-white ">
                  <FaPhone />
                  <span>
                    <Link
                      className="text-decoration-none text-white ps-1"
                      to="tel:+46 123 456 789"
                    >
                      +94 77 698 5444
                    </Link>
                  </span>
                </li>
                <li className="text-white ">
                  <FaEnvelope />
                  <span>
                    <Link
                      className="text-decoration-none text-white  ps-1"
                      to="mailto:http://hello@sitename.com"
                    >
                      dileepaj@tracified.com
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

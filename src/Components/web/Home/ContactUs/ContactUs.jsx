import { FaEnvelope, FaFax, FaPhone } from "react-icons/fa";
import "./ContactUs.css";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="container" id="ContactUs">
      <div className="container">
        <div className="mb-5">
          <div className="maps row ">
            <div className="map-text  col-lg-6">
              <h3 className=" ">Contact Us </h3>
              <p className="map-p">
                1034/1/6, Nisala Pedesa, Pothuarawa Rd, Malabe, Sri Lanka
              </p>
              <div className="pt-4">
                <div className="d-flex">
                  <ul className="list-unstyled">
                    <li className=" d-flex align-items-center p-2">
                      <div className=" rounded-circle pb-2 px-2  ">
                        <FaPhone className=" text-black" />
                      </div>
                      <Link
                        className="text-decoration-none text-dark ps-2"
                        to="tel:+46 123 456 789"
                      >
                        +94 77 698 5444
                      </Link>{" "}
                    </li>
                    <li className=" d-flex align-items-center p-2">
                      <div className=" rounded-circle pb-2 px-2  ">
                        <FaFax className=" text-black" />
                      </div>
                      <span className="ms-2">Tele/Fax: +94 77 698 5444</span>
                    </li>
                    <li className=" d-flex align-items-center p-2">
                      <div className=" rounded-circle pb-2 px-2  ">
                        <FaEnvelope className=" text-black" />
                      </div>
                      <Link
                        className="text-decoration-none text-dark  ps-2"
                        to="mailto:http://hello@sitename.com"
                      >
                        info@deepl.us
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="map-iframe col-lg-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.55596991459396!2d79.96844810081917!3d6.903096669033093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256d59601df81%3A0x31a1dd96e8d49ba!2sMalabe!5e0!3m2!1sen!2slk!4v1739777593765!5m2!1sen!2slk"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

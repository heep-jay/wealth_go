import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h1>WealthGO</h1>
          </div>
          <div className="footer-links">
            <h6>USEFUL LINKS</h6>
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Plans</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-crypto">
            <h6>CRYPTO LIVE PRICES</h6>
            <coingecko-coin-list-widget
              coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
              currency="usd"
              locale="en"
              //   width="100"
            ></coingecko-coin-list-widget>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="copyright">
            <h6>Copyright WealthGo</h6>
            <ul className="faq-links">
              <li>
                <Link>Terms and Condition</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="language">
            <h6>English</h6>
            <h6>USD</h6>
          </div>
        </div>

        <hr />
        <p className="description footer-desc">
          Mablyfarm Technologies UAB, Gedimino pr. 9, Vilnius 01105, Lithuania
          (306074900) Which is authorized by the FCIS and is the onboarding
          company. Mablyfarm Technologies Pte, 50 Raffles Place #37-00 Singapore
          Land Tower, Singapore (048623). is a company registered in Singapore
          (no:201716443G)
        </p>
      </div>
    </div>
  );
};

export default Footer;

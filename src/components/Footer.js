import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>K.C. Park Ville 189/26 M.2</p>
              <p>Samuprakarn, Phraeksa Mai, Thailand </p>
              <p>10280 </p>
            </div>
          </div>
          <div className="phone">
            <p>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              091-234-5678
            </p>
          </div>
          <div className="email">
            <p>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              afp.intertrade@gmail.com
            </p>
          </div>
        </div>
        <div className="right">
          <h4>Owner</h4>
          <p>
            Laphat Nimsiriwangso (Aut)
          </p>
          <p>
            Fahsai Nimsiriwangso (Fahsai)
          </p>
          <p>
            Awat Nimsiriwangso (Phoom)
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
       
      </div> <div className="copyright">
          <p>&copy; {new Date().getFullYear()} @AFP Intertrade</p>
        </div>
    </div>
  );
};

export default Footer;

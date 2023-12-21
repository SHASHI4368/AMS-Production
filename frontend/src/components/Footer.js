import React from 'react'
import "../styles/footer.css";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="top-container">
        <div className="first">
          <p>CONTACT US:</p>
        </div>
        <div className="second">
          <p>Faculty of Engineering</p>
          <p>Hapugala,Galle,</p>
          <p>Sri Lanka.</p>
        </div>
        <div className="third">
          <div className="phone">
            <FaPhone className="icon-phone" />
            <p>Phone : +(94) 0 91 2245765/6</p>
          </div>
          <div className="phone">
            <FaEnvelope className="icon-phone" />
            <p>E-mail : </p>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        &copy; Copyright Faculty of Engineering-2023
      </div>
    </footer>
  );
}

export default Footer
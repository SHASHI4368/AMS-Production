import React from 'react'
import "../styles/new.css";

const Temp = () => {
  return (
    <div className="footer">
      <div className="overlap">
        <div className="cotact">
          <div className="contact-details">
            <div className="overlap-group">
              <div className="div">
                <div className="text-wrapper">CONTACT US:</div>
                <div className="flexcontainer">
                  <p className="text-i">
                    <span className="span">
                      Faculty of Engineering
                      <br />
                    </span>
                  </p>
                  <p className="text-i">
                    <span className="span">
                      Hapugala,Galle,
                      <br />
                    </span>
                  </p>
                  <p className="text-i">
                    <span className="span">Sri Lanka.</span>
                  </p>
                </div>
                <div className="frame">
                  <div className="frame-2">
                    <img className="vector" alt="Vector" src="image.svg" />
                    <p className="p">Phone : +(94) 0 91 2245765/6</p>
                  </div>
                  <div className="frame-3">
                    <img className="img" alt="Vector" src="vector-2.svg" />
                    <div className="text-wrapper-2">
                      E-mail : webmaster@eng.ruh.ac.lk
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle" />
          </div>
        </div>
        <div className="frame-4">
          <img className="vector-2" alt="Vector" src="vector.svg" />
          <div className="text-wrapper-3">
            Copyright Faculty of Engineering-2023
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temp
import React from 'react';
import "../styles/lecsignup.css";

const StaffVerificationForm = () => {
  return (
    <div className="verification-form">
      <form className="verification-form">
        <h3>Please Enter the Code Received in Your Email</h3>
        <div className="code">
          <input type="text" className="one" />
          <input type="text" className="two" />
          <input type="text" className="three" />
          <input type="text" className="four" />
        </div>
        <button type="button" className="verify-btn back-btn">
          Verify
        </button>
        <p>
          Didn’t Receive the Code? <a href="#">Resend</a>
        </p>
      </form>
    </div>
  );
}

export default StaffVerificationForm
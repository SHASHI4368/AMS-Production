import React from 'react';
import "../styles/lecsignup.css";

const StudentSignUpForm = () => {
  return (
    <div className="std-signup-form">
      <form className="signup-form">
        <h2>SIGN UP</h2>
        <label htmlFor="email">Email</label>
        <input type="email" className="email" placeholder="Faculty Email" />
        <button type="submit" className="submit-btn">
          Continue
        </button>
      </form>
    </div>
  );
}

export default StudentSignUpForm;
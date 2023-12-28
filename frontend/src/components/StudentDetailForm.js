import React from 'react';
import "../styles/lecsignup.css";

const StudentDetailForm = () => {
  return (
    <div className="detail-form">
      <form className="detail-form">
        <h2>SIGN UP</h2>
        <div className="std-name">
          <input type="text" className="Fname" placeholder="First Name" />
          <input type="text" className="Lname" placeholder="last Name" />
        </div>
        <label htmlFor="reg-no">Email</label>
        <input type="text" className="reg-no" placeholder="Registration No." />
        <label htmlFor="department">Department</label>
        <select name="department" className="department">
          <option value="DEIE">DEIE</option>
          <option value="CEE">CEE</option>
          <option value="DMME">DMME</option>
          <option value="MENA">MENA</option>
          <option value="Computer">Computer</option>
        </select>
        <label htmlFor="email">Email</label>
        <input type="email" className="email" placeholder="Faculty Email" />
        <label htmlFor="password">Email</label>
        <input type="password" className="password" placeholder="Password" />
        <button type="submit" className="submit-btn">
          SIGN UP
        </button>
      </form>
    </div>
  );
}

export default StudentDetailForm
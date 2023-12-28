import "../styles/lecsignup.css";
import React from "react";

const StaffDetailForm = () => {
  return (
    <div className="detail-form">
      <form className="detail-form">
        <h2>SIGN UP</h2>
        <label htmlFor="name">name</label>
        <input type="text" className="name" placeholder="Name" />
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
          Continue
        </button>
      </form>
    </div>
  );
};

export default StaffDetailForm;

import React, { useEffect } from "react";
import "../styles/lecsignup.css";
import { FaGoogle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import axios from "axios";

const StaffSignUpForm = ({staff, setStaff}) => {

  const getStaff = async () => {
    try {
      const url = `http://localhost:8080/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setStaff(data.user._json);
      
      console.log(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setStaff(null);
    getStaff();
  }, []);


  const handleGoogleAuth = (e) => {
    e.preventDefault();
    window.open("http://localhost:8080/auth/google", "_self");
  }

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="signup-form">
      <form className="signup-form">
        <h2>SIGN UP</h2>
        <label htmlFor="email">Email</label>
        <input type="email" className="email" placeholder="Faculty Email" Value={staff ? staff.email : " "} />
        {/* <label htmlFor="password">Email</label>
        <input type="password" className="password" placeholder="Password" /> */}
        <button type="submit" className="submit-btn">
          Continue
        </button>
        <p>Or</p>
        <button className="google-btn" onClick={handleGoogleAuth}>
          <FaGoogle className="google-icon" />
          <p>CONTINUE WITH GOOGLE</p>
        </button>
      </form>
    </div>
  );
};

export default StaffSignUpForm;

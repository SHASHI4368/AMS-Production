import "../styles/lecsignup.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const StaffVerificationForm = ({ passCode, setPassCode }) => {
  

  const history = useHistory();
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (one === "" || two === "" || three === "" || four === "") {
      setMessage("Please enter the code");
    } else if (`${one}${two}${three}${four}` !== passCode.toString()) {
      setMessage("Incorrect code");
    } else {
      sessionStorage.setItem("passCode", JSON.stringify(""));
      history.push("/login/std-details");
    }
  };

  return (
    <div className="verification-form">
      <form className="verification-form">
        <h3>Please Enter the Code Received in Your Email</h3>
        <div className="code">
          <input
            type="text"
            maxLength="1"
            className="one"
            value={one}
            onChange={(e) => setOne(e.target.value)}
          />
          <input
            type="text"
            maxLength="1"
            className="two"
            value={two}
            onChange={(e) => setTwo(e.target.value)}
          />
          <input
            type="text"
            maxLength="1"
            className="three"
            value={three}
            onChange={(e) => setThree(e.target.value)}
          />
          <input
            type="text"
            maxLength="1"
            className="four"
            value={four}
            onChange={(e) => setFour(e.target.value)}
          />
        </div>
        {message && (
          <p className="message" style={{ color: "red", fontSize: "15px" }}>
            {message}
          </p>
        )}
        <button
          type="button"
          className="verify-btn back-btn"
          onClick={handleSubmit}
        >
          Verify
        </button>
        <p>
          Didn’t Receive the Code? <a href="#">Resend</a>
        </p>
      </form>
    </div>
  );
};

export default StaffVerificationForm;

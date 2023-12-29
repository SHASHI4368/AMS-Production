import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./index.css";
import "./styles/home.css";
import api from "./api/students";
import Login from "./components/Login";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [userType, setUserType] = useState(
    JSON.parse(sessionStorage.getItem("userType")) || "Student"
  );
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await api.get("/students");
        setStudents(response.data);
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.message);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err.message);
        }
      }
    };
    getAllStudents();
  },[]);

  return (
    <div className="App">
      <Header
        userType={userType}
        setUserType={setUserType}
        isSignIn={isSignIn}
        setIsSignIn={setIsSignIn}
        setIsSignUp={setIsSignUp}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login">
          <Login
            userType={userType}
            isSignIn={isSignIn}
            isSignUp={isSignUp}
            setIsSignIn={setIsSignIn}
            setIsSignUp={setIsSignUp}
            students={students}
            setStudents={setStudents}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

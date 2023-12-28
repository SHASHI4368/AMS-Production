import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "./index.css";
import "./styles/home.css";
import Login from "./components/Login";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [userType, setUserType] = useState("Student");
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="App">
      <Header userType={userType} setUserType={setUserType} isSignIn={isSignIn} setIsSignIn={setIsSignIn} setIsSignUp={setIsSignUp} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login">
          <Login userType={userType} isSignIn={isSignIn} isSignUp={isSignUp} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

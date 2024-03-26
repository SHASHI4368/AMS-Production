import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx0QXxbf1x0ZFBMYVhbRH9PIiBoS35RckVgW3lecHFTQ2ZYUUV0"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Route path="/" component={App} />
  </Router>
);

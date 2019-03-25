//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter);
library.add(faFacebook);
//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

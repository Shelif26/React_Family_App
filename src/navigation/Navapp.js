import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./Sidebar";

function Navapp() {
  return (
    <Router>
      <Sidebar></Sidebar>
    </Router>
  );
}

export default Navapp;

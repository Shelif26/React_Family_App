import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./navigation/ExpenseApp";
import Home from "./navigation/Home";

import Sidebar from "./navigation/Sidebar";

function Application() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenseapp" element={<App />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default Application;

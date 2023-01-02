import React, { useState } from "react";
import { motion } from "framer-motion";
import "./navigation.css";
import App from "../App";

const Sidebar = ({ children }) => {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = "Home";
      break;

    case "/expenseApp":
      component = <App />;
      break;

    case "/App2":
      component = "app2";
      break;
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "60px",
            transition: { duration: 0.5, type: "spring", damping: 10 },
          }}
          className="sidebar"
        >
          <div className="top_section">
            {isOpen && <h1 className="logo">The Family App</h1>}
            <i onClick={toggle} class="fa-solid fa-bars"></i>
          </div>

          <div className="link">
            <div className="icon">
              <i class="fa-solid fa-house-user"></i>
            </div>
            <motion.div className="link_text">
              {isOpen && <a href="/">Home</a>}
            </motion.div>
          </div>

          <div className="link">
            <div className="icon">
              <i class="fa-sharp fa-solid fa-money-bill-trend-up"></i>
            </div>
            <motion.div className="link_text">
              {isOpen && <a href="/expenseApp">Expense Calculator</a>}
            </motion.div>
          </div>

          <div className="link">
            <div className="icon">
              <i class="fa-solid fa-chart-line"></i>{" "}
            </div>
            <motion.div className="link_text">
              {isOpen && <a href="/">Expense Analysis</a>}
            </motion.div>
          </div>

          <div className="link">
            <div className="icon">
              <i class="fa-solid fa-upload"></i>
            </div>
            <motion.div className="link_text">
              {isOpen && <a href="/">upload</a>}
            </motion.div>
          </div>

          <div className="link">
            <div className="icon">
              <i class="fa-sharp fa-solid fa-calculator"></i>
            </div>
            <motion.div className="link_text">
              {isOpen && <a href="/">BMI calculator</a>}
            </motion.div>
          </div>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;

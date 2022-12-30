import "./home.css";
import App from "./App";

const Home = () => {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = "Home";
      break;

    case "/Service":
      component = <App />;
      break;
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <nav className="nav_header">
        <ul className="nav_item_list">
          <li className="nav_item">
            <a href="./home.js">
              <i class="fa-solid fa-house-user"></i> Home
            </a>
          </li>
          <li className="nav_item">
            <a href="/Service">
              <i class="fa-sharp fa-solid fa-calculator"></i> Expense Calculator
            </a>
          </li>
        </ul>
      </nav>

      {component}
    </>
  );
};
export default Home;

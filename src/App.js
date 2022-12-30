import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expense";
import Navapp from "./navigation/Navapp";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </>
  );
};
const Nav = () => {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <App />;
      break;

    case "/expenseApp":
      component = <App />;
      break;

    case "/App2":
      component = <Navapp />;
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
            <a href="/expenseApp">
              <i class="fa-sharp fa-solid fa-calculator"></i> Expense Calculator
            </a>
          </li>
          <li className="nav_item">
            <a href="/App2">
              <i class="fa-brands fa-apple"></i> Application
            </a>
          </li>
        </ul>
      </nav>

      {component}
    </>
  );
};

export default App;
export { Nav };

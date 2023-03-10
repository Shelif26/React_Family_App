import React from "react";
import "./ExpensesItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpensesItems(props) {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("updated");
  //   console.log(title);

  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpensesItems;

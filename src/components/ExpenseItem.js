import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // const ExpenseDate = new Date(2021 , 2 ,23);
  // const ExpenseTitle ='Car Insurance';
  // const ExpenseAmount = "$"+ 250 ;

  return (
    <div className="expense-item">
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <span className="expense-item-description">
          <h2>{props.title}</h2>
        </span>
      </div>

      <div className="expense-item">
        <span className="expense-item-price">{props.amount}</span>
      </div>
    </div>
  );
}

export default ExpenseItem;

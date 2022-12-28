import "./ExpenseDate.css";

function ExpenseDate(props) {
  const year = props.date.toLocaleString();
  const month = props.date.toLocaleString("en-US", { month: "long" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;

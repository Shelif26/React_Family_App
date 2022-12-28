import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Thakkali",
      amount: "$" + 0.2,
      date: new Date(2021, 12, 23),
    },
    {
      id: "2",
      title: "Vellarikai",
      amount: "$" + 0.5,
      date: new Date(2021, 12, 23),
    },
    {
      id: "3",
      title: "Koththamalli",
      amount: "$" + 0.1,
      date: new Date(2021, 12, 23),
    },
  ];
  return (
    <div>
      <h2>Let's get started !</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

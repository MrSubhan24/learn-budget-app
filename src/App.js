import "./App.css";
import AddTransaction from "./components/AddTransaction";
import ExpensesList from "./components/ExpensesList";
import Header from "./components/Header";
import IncomeList from "./components/IncomeList";

import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <AddTransaction />
      <div className="container">
        <IncomeList />
        <ExpensesList />
      </div>
    </GlobalProvider>
  );
};

export default App;

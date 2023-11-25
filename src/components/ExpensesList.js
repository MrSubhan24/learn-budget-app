import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpensesList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Pengeluaran</h3>
      <ul className="list">
        {expenseTransactions.map((expTr) => (
          <ExpenseTransaction key={expTr.id} expTr={expTr} />
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;

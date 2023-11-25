import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Pemasukan</h3>
      <ul className="list">
        {incomeTransactions.map((incTr) => (
          <IncomeTransaction key={incTr.id} incTr={incTr} />
        ))}
      </ul>
    </>
  );
};

export default IncomeList;

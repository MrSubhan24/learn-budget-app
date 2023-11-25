import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ incTr }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="plus">
      {incTr.text}
      <span>+Rp{new Intl.NumberFormat('id-ID').format(incTr.amount)}</span>
      <button
        onClick={() => deleteTransaction(incTr.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default IncomeTransaction;

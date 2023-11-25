import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Header = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const current = new Date();
  const date = ` ${months[current.getMonth()]} ${current.getFullYear()}`;

  const { incomeTransactions } = useContext(GlobalContext);
  const { expenseTransactions } = useContext(GlobalContext);

  //Total incomes
  const incomeAmount = incomeTransactions.map((inc) => inc.amount);
  const incomeTotal = incomeAmount.reduce((acc, value) => {
    return acc + value;
  }, 0);

  //Total expenses
  const expenseAmount = expenseTransactions.map((inc) => inc.amount);
  const expenseTotal = expenseAmount.reduce((acc, value) => {
    return acc + value;
  }, 0);

  //Overall total
  const overallTotal = incomeTotal - expenseTotal;


  let percentage = 0;
  
  if (incomeTotal >= expenseTotal) {
    percentage = Math.round((expenseTotal / incomeTotal) * 100);
  }

  return (
    <div>
      <h2>Anggaran Bulan {date}</h2>
      <div>
      <h1>{incomeTotal >= expenseTotal ? `+Rp${new Intl.NumberFormat('id-ID').format(overallTotal)}` : `-Rp${new Intl.NumberFormat('id-ID').format(Math.abs(overallTotal))}`}</h1>

      </div>
      <div className="inc-exp-container">
        <div>
          <h4>Pemasukan</h4>
          <p className="money plus">+Rp{incomeTotal}</p>
        </div>
        <div>
          <h4>Pemasukan</h4>
          <p className="money minus">-Rp.{expenseTotal}</p>
          <span className="percentage-span">{percentage > 0 ? `%${percentage}` : "%"}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

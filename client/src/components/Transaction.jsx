import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {numberWithCommas} from "../utils/format"
function Transaction({transaction}) {
  const { deleteTransaction } = useContext(GlobalContext);
    const sign=transaction.amount>0?'+':'-';
    const classname=transaction.amount>0?"plus":"minus";
  return (
    <li className={classname}>
      {transaction.text}
      <span>
        {sign}${numberWithCommas(Math.abs(transaction.amount))}<button onClick={()=> deleteTransaction(transaction._id)} className="delete-btn">x</button>
      </span>
    </li>
  );
}
export default Transaction;

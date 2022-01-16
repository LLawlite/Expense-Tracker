import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {numberWithCommas} from "../utils/format"
function IncomeExpenses()
{
    const {transactions}=useContext(GlobalContext);
    const amounts=transactions.map(transaction=>(transaction.amount));
    console.log(amounts);
    const income=amounts.filter(item=> item>0).reduce((prev,curr)=>(prev+=curr),0).toFixed(2);
    console.log(income);

    const expense=amounts.filter(item=> item<=0).reduce((prev,curr)=>(prev+=curr)*-1,0).toFixed(2);
    console.log(expense);
    return (
        <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus" id="money-plus">{numberWithCommas(income)}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus" id="money-minus">{numberWithCommas(expense)}</p>
        </div>

        </div>

    );
}
export default IncomeExpenses;
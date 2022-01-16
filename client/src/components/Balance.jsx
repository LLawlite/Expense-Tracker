import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {numberWithCommas} from "../utils/format"
function Balance()
{
    const {transactions}=useContext(GlobalContext);
    var total=0;
    transactions.map(transaction=>(total+=transaction.amount));
    return (
        <div>
        <h4>Your Balance</h4>
        <h1>${numberWithCommas(total)}</h1>
        </div>
    );
}
export default Balance;
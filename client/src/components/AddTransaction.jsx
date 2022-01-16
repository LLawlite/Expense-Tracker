import React, { useContext, useState } from "react";
import { GlobalContext, GlobalProvider } from "../context/GlobalState";


function AddTransaction() {
  const {addTransaction}=useContext(GlobalContext);

    const [text,setText]=useState("");
    const [amount,setAmount]=useState(0);

    function onSubmit(event)
    {
      event.preventDefault();
      const newTransaction={
        id: Math.floor(Math.random()*100000000),
        text,
        amount:+amount //+amount to convert string to int
      }
      addTransaction(newTransaction);
    }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(event)=>setText(event.target.value)}  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(event)=>setAmount(event.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}
export default AddTransaction;

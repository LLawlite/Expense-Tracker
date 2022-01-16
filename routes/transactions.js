const express = require('express');
const router=express.Router();

const {getTransactions,addTransaction,deleteTransaction}=require("../controllers/transactions")

router
.route('/')
.get(getTransactions)
.post(addTransaction);


//for delete we require id so url is changed

router
.route("/:id")
.delete(deleteTransaction);
// router.get("/",function(req,res){
//     res.send("Hello in transaction.js")
// });

module.exports=router;

const dotenv = require('dotenv')
const path=require('path')
dotenv.config({path:'./config/config.env'})
const express=require('express');
const colors=require('colors');
const morgan=require('morgan');

const connectDB=require('./config/db');
connectDB();
const app=express();
app.use(express.json());





const transactions=require("./routes/transactions");

app.use("/api/v1/transactions",transactions);

if(process.env.NODE_ENV==='production')
{
    app.use(express.static('client/build'));
    app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname,'client','build','index.html')));
}


app.get("/",function(req,res){
    res.send("Hello");
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,function(){
    console.log(`Server started successfully at ${process.env.NODE_ENV}`.yellow.bold);
})

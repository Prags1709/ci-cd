const express =require("express")

const app = express()

app.get("/",(req,res)=>{
    low = 100;
    res.send("WELCOME")
})

app.listen(1234,()=>{
    console.log("Running the port at 1234");
})
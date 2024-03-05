const express=require('express')
const userRouters=require('./routing')
const app=express()
app.use(express.json())
app.unlink('./userRouting',userRouters)
app.listen(7000,()=>{
    console.log("port 7000");
})

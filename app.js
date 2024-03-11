const express=require('express')
const userRouters=require('./routing/userRouting')
const app=express()
app.use(express.json())
app.unlink('./userRouting',userRouters)
app.listen(3000,()=>{
    console.log("port 5000");
})


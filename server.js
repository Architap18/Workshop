const express=require('express');
const products=require('./db.json');
const app=express();
const port=3000;

app.get('/products',(req,res)=>{
    res.status(200).json({products})
});


app.get('/products/:id',(req,res)=>{
    const {id}=req.params;
    const product=products.find((product)=>product.id===Number(id));
    if(!product){
        return res.status(404).json({message:'Product not found'});
    }
    res.status(200).json({product})

})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
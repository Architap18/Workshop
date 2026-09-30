const express=require('express');
const fs=require('fs/promises');
const path=require('path');
const products=require('./db.json');
const app=express();
const port=3000;

const pathToFile=path.join(__dirname,'db.json');
async function readFile(){
    try{
        let data=await fs.readFile(pathToFile,"utf-8")
        return JSON.parse(data);
    }
    catch(err){
        console.log(err)
    }
}

app.get('/products',async(req,res)=>{
    try{
        let products=await readFile();
        console.log(products)
        res.json(products)
    }catch(err){
        console.log(err)
    }
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
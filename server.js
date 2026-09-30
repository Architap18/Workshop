const express=require('express');
const fs=require('fs/promises');
const path=require('path');
const products=require('./db.json');
const app=express();
const port=3000;

const cache={}
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
async function readFilewithDelay() {
    await new Promise((resolve,reject)=>{
        setTimeout(resolve,1500)
    })
         let p=await readFile();
         return p
        }

readFile();
app.get('/products',async(req,res)=>{
    try{
        let key=req.url;
        let value=cache[key];
        if (value) {
            return res.json(cache[key]);
        }
        let products=await readFilewithDelay();
        cache[key]=products;
        return res.json(products)
    }catch(err){
        console.log(err)
    }
});
app.get('/products/:id',async(req,res)=>{
    try{
        let key=req.url;
        let value=cache[key];
        if (value) {
            return res.json(cache[key]);
        }
        const {id}=req.params;
        const products = await readFilewithDelay();
        const product=products
                            .find((product)=>product.id===Number(id));
        if(!product){
            return res.status(404).json({message:'Product not found'});
        }
        cache[key] = { product };
        res.status(200).json({product})

    }
    catch(err){
        console.log(err)
    }
    
})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
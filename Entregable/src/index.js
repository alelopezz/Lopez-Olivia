const express=require(`express`);
const port = 8000;
const app =express();

app.listen(port,()=> {
console.log (`El servidor esta corriendo en el puerto :${port}`)

})
app.get ("Productos",(req,res)=>{res.send("Productos")
})
app.post ("Productos",(req,res) =>{res.send("Productos")
})
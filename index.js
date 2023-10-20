const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
//middleware
app.use(cors());
app.use(express.json());


// 

console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)




const uri = "mongodb+srv://mahizaman490:FdvIKhzgE6hQQb67@cluster0.1nwwv7k.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const collectionProduct = client.db('productDB').collection('product')
      app.post('/product',async(req,res)=>{
        const newProduct = req.body;
        console.log(newProduct)
      })
    const database = client.db("technologyDB");
    const productCollection = database.collection("products");
    
  app.get('/product/:brand',async (req,res) =>{
 const brand = req.params.brand
 const query = {
  brand:brand

 }

 const result = await productCollection.find(query).toArray()
 res.send(result)
 console.log(result)
 console.log(brand)
 console.log(query)
  }) 
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


run().catch(console.dir);


app.get('/',(req,res) =>{
    res.send('Technology-and-Electronics-server is running')
})


app.listen(port,() => {
    console.log(`Technology Server is running on port:${port}`)
})

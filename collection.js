const { MongoClient } = require("mongodb");

uri= "mongodb://localhost:27017";
client = new MongoClient(uri);
// client.connect();

async function run() {
    try {
        await client.connect();
        await client.db("patnadb").command({ping: 1});
        // console.log("Connected successfully");
        collection = client.db("patnadb").collection("students")
        result =await collection.insertOne({
            name:"manu",
            mail:"manu@abc.com"
        })
        console.log('inserted successfully')
    }
    finally {await client.close()}

}
run().catch(console.dir)
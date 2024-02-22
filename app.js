const {MongoClient} = require("mongodb");

uri= "mongodb://localhost:27017";
client = new MongoClient(uri);
// client.connect();

async function run(){
    try {
        await client.connect();
        await client.db("patnadb").command({ping: 1});
        console.log("Connected successfully");

    } finally{
        await client.close();
    }
}

run().catch(console.dir);
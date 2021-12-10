
const { getValue } = require('../config');
const { MongoClient } = require('mongodb');

async function initDb(db) {
    console.log("trying to init db...")
    var dbo = await client.db(getValue("mongodb_dbname"));
    dbo.createCollection('Users', function(err, res) {
        if (err) throw err;
        console.log("Users Collection created!");
    });

    var users = [
        { name: "user 1"},
        { name: "user 2"},
        { name: "user 3"}
    ]
    users.forEach(element => {
        dbo.collection('Users').insertOne(element, (err, res) => {
            if (err) throw err;
            console.log(`Element ${element.name} inserted.`)
        })
    });
}

// Connection URL
const url = getValue("mongodb_url");
console.log(`backend trying to connect to db url: ${url}`)

// Create a new MongoClient
const client = new MongoClient(url, {useUnifiedTopology: true});

const db = new Promise((res, rej) => {
    // Database Name
    const dbName = getValue("mongodb_dbname");
    // Use connect method to connect to the Server
    client.connect(function (err) {
        if (err) {
            rej(err);
        }

        console.log("Connected successfully to server");
        res(client.db(dbName));
    });

});

(async () => {

    try {
        await db;
        console.log("db connection success")

        await initDb(db);
    }

    catch (e) {
        console.error('*** failed to create db connection ***')
        console.error(e);
        console.error('*** end of db connection error ***')
        process.exit(1);
    }

})();

module.exports = { db, client };

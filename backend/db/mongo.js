
const { getValue } = require('../config');
const { MongoClient } = require('mongodb');

// create new users collection if not exists in the database and insert usernames
async function initDb(db) {
    var dbo = await client.db(getValue("mongodb_dbname"));
    dbo.createCollection('Users', function(err, res) {
        if (err) {
            console.log('initDb:Users collection already exists')
            return
        };
        console.log("initDb:Users Collection created");
        var users = [
            { name: "eric"},
            { name: "stan"},
            { name: "kyle"},
            { name: "kenny"}
        ]
        dbo.collection('Users').insertMany(users, (err, res) => {
            if (err) throw err;
            console.log(`initDb:Users Inserted.`)
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
        console.error('*** db connection failed ***')
        console.error(e);
        process.exit(1);
    }

})();

module.exports = { db, client };

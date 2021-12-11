
const MONGO_DB_NAME = getSecret("MONGO_DB_NAME");
const MONGO_USERNAME = getSecret("MONGO_USERNAME");
const MONGO_PASSWORD = getSecret("MONGO_PASSWORD");

const config = {
    // mongodb+srv://edanbi:peter1810@cluster0.x3alk.mongodb.net/usersdb?retryWrites=true&w=majority
    // mongodb_url: `mongodb://${process.env.MONGO_HOST}:27017}`,
    // mongodb_url: `mongodb+srv://edanbi:peter1810@cluster0.x3alk.mongodb.net`,
    // mongodb_dbname: "usersdb"
    
    mongodb_url: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@mongodb-service:27017`,
    mongodb_dbname: MONGO_DB_NAME
}

function getValue(key, defaultValue) {
    // const v = config[key] || defaultValue;
    // console.log(`getValue ${key}: ${v}`)
    // return v
    return config[key] || defaultValue;
}

function getSecret(key) {
    const value = process.env[key];
    // console.log(`getSecret ${key}: ${value}`)
    if (value) {
        return value;
    }

    throw Error(`env ${key} not found in env vars`);
}

module.exports = { getValue, getSecret }

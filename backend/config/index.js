
const MONGO_DB_NAME = getSecret("MONGO_DB_NAME");
const MONGO_USERNAME = getSecret("MONGO_USERNAME");
const MONGO_PASSWORD = getSecret("MONGO_PASSWORD");

const config = {
    mongodb_url: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@mongodb-service:27017`,
    mongodb_dbname: MONGO_DB_NAME
}

function getValue(key, defaultValue) {
    return config[key] || defaultValue;
}

function getSecret(key) {
    const value = process.env[key];
    if (value) {
        return value;
    }

    throw Error(`env ${key} not found in env vars`);
}

module.exports = { getValue, getSecret }

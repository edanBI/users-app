
const config = {
    backend_url: `http://${process.env.BACKEND_HOST}:8080`
}

function getValue(key, defaultValue) {
    // return config[key] || defaultValue;
    const value = config[key] || defaultValue;
    console.log(`getValue: ${value}`)
    return value
}

function getSecret(key) {
    const value = process.env[key];
    console.log(`getSecret: ${value}`)
    if (value) {
        return value;
    }
    
    throw Error(`env ${key} not found in env vars`);
}

module.exports = { getValue, getSecret }

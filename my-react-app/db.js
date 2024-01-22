const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.COSMOS_DB_CONNECTION_STRING);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to Cosmos DB');
  } catch (e) {
    console.error('Failed to connect to Cosmos DB', e);
  }
}

module.exports = { client, connect };

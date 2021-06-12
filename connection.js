const { Client } = require('@elastic/elasticsearch')
let credentials;
if (fs.existsSync('./credentials.json')) {
  credentials = require('./credentials.json');
}
const client = new Client({
  cloud: {
    id: credentials.cloud_id,
  },
  auth: {
    username: credentials.username,
    password: credentials.password
  }
});


module.exports = client;  
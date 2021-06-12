const client = require('./connection.js');

client.count({index: 'user'},function(err,resp,status) {  
  console.log("users",resp);
});
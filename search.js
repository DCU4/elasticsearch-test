const client = require('./connection.js');

client.search({  
  index: 'user',
  body: {
    query: {
      match: { 
        "rooms.roomName" : "Room 1"
      }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response ---");
      console.log(response.body);
      console.log("--- Hits ---");
      response.body.hits.hits.forEach(function(hit){
        console.log(hit._source.rooms[0].messages);
      })
    }
});
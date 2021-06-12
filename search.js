const client = require('./connection.js');
// get all data from Room 1
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
      console.log("--- response ---");
      console.log(response.body);
      console.log("--- messages ---");
      response.body.hits.hits.forEach(function(hit){
        console.log(hit._source.rooms[0].messages);
      })
    }
});
const client = require('./connection.js');

// check cluster health
// client.cluster.health({},function(err,resp,status) {  
//   console.log("-- Client Health --",resp);
// });


// create index
// client.indices.create({  
//   index: 'user'
// },function(err,resp,status) {
//   if(err) {
//     console.log(err);
//   }
//   else {
//     console.log("create",resp);
//   }
// });


// creating index
// client.index({  
//   index: 'user',
//   id: '1',
//   body: {
//     "userName": "Dylan",
//     "rooms": [{
//     "roomName": "Room 1",
//     "messages": [{
//       "userName" : "Dylan",
//       "value" : "Hello"
//     }]
//   }]
// }
// },function(err,resp,status) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(resp);
//   }
// });


// client.index({  
//   index: 'user',
//   // id: '',
//   body: {
//     "userName": "Obi Wan",
//     "rooms": [{
//       "roomName": "Room 1",
//       "messages": [{
//         "userName" : "Obi Wan",
//         "value" : "Hello There"
//       }]
//     }]
//   }
// },function(err,resp,status) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(resp);
//   }
// });


// for bulk adding
// client.bulk({  
//   index: 'gov',
//   type: 'constituencies',
//   body: myBody
// });



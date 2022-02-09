const ws = require('ws');
//.web socket server
const port = 8000;
const wsserver = new ws.WebSocketServer({port:port},()=>{
    console.log("listening to the port:8000")
});

wsserver.on('connection',function connection(ws){
    // console.log('connection')
    let count =0;
    ws.on("message",function incoming(message){
   const payload = JSON.parse(message);
// loop through all live clients a
//send everyone the messafe//
wsserver.clients.forEach(client=>{
    if(client.readyState === ws.OPEN){
        payload.type ="user_message"
     payload.timestamp = new Date().toUTCString();
        client.send(JSON.stringify(payload));
    }
})
   console.log(payload);
   console.log("recieved: %s",message);
    });
    console.log(`a new user has connected`);
ws.send("conncected successfully");

// setInterval(()=>{
//     ws.send(`${++count} seconds are over`);
// },1000)

});

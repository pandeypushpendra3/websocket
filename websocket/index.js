const ws = require('ws');
//.web socket server
const port = 8000;
const wss = new ws.WebSocketServer({port:port},()=>{
    console.log("listening to the port:8000")
});

wss.on('connection',function connection(ws){
    // console.log('connection')
    ws.on("message",function incoming(message){
        console.log("recieved: %s",message);
    });
    console.log(`a new user has connected`,ws);
ws.send("something");
})
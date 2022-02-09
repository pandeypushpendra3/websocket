const ws = require('ws');
//.web socket server
const wss = new ws.WebSocketServer({port:5000});

wss.on('connection',function connection(ws){
    // console.log('connection')
    ws.on("message",function incoming(message){
        console.log("recieved: %s",message);
    });
ws.send("something");
})
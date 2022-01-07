// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// const { username } = require('react-lorem-ipsum');

// const port = process.env.PORT || 3000;

// app.get('/chatroom', (req, res) => {
// 	 res.sendFile(__dirname + "/index1.html");	 
// });

// io.on('connection', (socket) => {
// 	socket.on('chat message', (msg) => {
// 		io.emit('chat message', msg);
// 	});
// });

// http.listen(port, (req, res) => {
// 	console.log(`Server is running on port ${port}`);
// });

// const server = require('http').createServer();
// const io = require('socket.io')(server,	{
// 		transports: ['websocket','polling']
// 	}
// );

const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{
     cors: {    
    origin: "*",  
		methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true  
    }		
})

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 443;

const users = {};

io.on("connection", client => {
  client.on("username", username => {
    const user = {
      name: username,
      id: client.id
    };
    users[client.id] = user;
    io.emit("connected", user);
    io.emit("users", Object.values(users));
  });

  client.on("send", message => {
    io.emit("message", {
      text: message,
      date: new Date().toISOString(),
      user: users[client.id]
    });
  });

  client.on("disconnect", () => {
    const username = users[client.id];
    delete users[client.id];
    io.emit("disconnected", client.id);
  });
});

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));


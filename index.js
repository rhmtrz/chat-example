const app = require('express')();
const http = require('http').Server(app)
const io = require('socket.io')(http)

// app.get('/', (req, res) => {
// 	res.send('<h1>Hello World</h1>')
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
	console.log('listening on * 3000')
})



const  socket = require('socket.io');
const app = socket('3000');
//app.listen('3000');//监听 3000端口
const mydb = require('./utility/db');
mysql.connect();
app.on('connection',function (socket) {
    console.log('a user is connected');//监听到玩家连接成功后接着需要发送消息给客户端 《--客户端需要监听这个消息
    socket.emit('welcome','hello world !');//消息格式：标题，内容
    socket.on('login',function (data) {
        console.log('a user login = ' + JSON.stringify(data));
    })
});
console.log('listening on 3000');
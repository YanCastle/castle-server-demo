let http = require('http');

//创建web服务器，提供服务，处理客户端的请求
//普通方式监听
let server = http.createServer((req, res) => {
    //req客户端请求的相关信息,res返回响应信息
    let url = req.url;
    //解决中文乱码
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    res.end('访问路径：' + url);
}).listen(9000);

//request事件监听
/*server.on('request', (req, res) => {
    console.log(req.url);
    //设置应答头信息
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('HHHHH<br>');
});
server.listen(9000);*/

//当TCP建立连接的时候，该事件被触发，提供了一个参数socket，为net.socket的实例(底层协议对象)
server.on('connection', (req, socket, head) => {});
//Code with EXPRESS


const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();


const mysql = require("mysql");
var baseDate = require("./mysql/config");  //数据库连接的信息
var $sql = mysql.createConnection(baseDate.mysql);
$sql.connect();


app.use(express.static('public'));

app.use("/",session({
    secret: '12345',
    name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 1000*60*2},  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: true,
    saveUninitialized: false,
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/user',require('./routers/user.js'));
app.use('/',require('./routers/main.js'));




app.listen(80,(res,req)=>{
     console.log('Node app start at port 80');
});

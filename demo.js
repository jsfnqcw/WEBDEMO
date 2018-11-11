#Code with EXPRESS


var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var mysql = require("mysql");
var baseDate = require("./mysql");  //数据库连接的信息
var $sql = mysql.createConnection(baseDate.mysql);
$sql.connect();



var select = "select * from users" ;  //假设我们数据表叫mono  *代表查询全部内容  select查询
$sql.query(select,function(err,res){   //err提示错误信息  res是查询到的内容全在里面
        if(err){
			console.log("错误",err)//我们打印出，错误信息
		}else {
			console.log(res)      //打印出我们查询的内容
		}

});


var register = function (account,password){
	var insert = "insert into users value ("+account+","+password+")";
	$sql.query(insert,function(err,res){
        if(err){
			console.log("错误",err);
			return "0"
        }else{
			console.log("添加成功",res);  //我们打印出添加成功的信息
			return "1"
		}
	});
};


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/static/" +"Login.html");
})


app.get('/images/*', function (req, res) {
    res.sendFile( __dirname + "/static/" + req.url );
})

app.get('/*', function (req, res) {
   res.sendFile( __dirname + "/static/" + req.url );

})

app.use(bodyParser.urlencoded({ extended: false }));


app.post('/login', function (req, res) {
   res.send("Done");
   console.log("Request for " + req.url + " received.");
})

app.post('/register', function (req, res) {
	account = req.body.account;
	password = req.body.password;
	result = register(account,password);

	if (result = "1"){

		res.send("Done");
		console.log("Request for " + req.url + " received.");
	}

})


var server = app.listen(80, function () {
  console.log('Server running at http://127.0.0.1:80/');
})

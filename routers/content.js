const app = require('express');
const router = app.Router();
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
var session = require('express-session');


var mysql = require("mysql");
var baseDate = require("../mysql/config"); //数据库连接的信息
var $sql = mysql.createConnection(baseDate.mysql);
$sql.connect();

router.use(bodyParser.urlencoded({
  extended: false
}));



var register = function(account, password, callback) {
  var insert = "insert into users value (" + account + "," + password + ")";
  $sql.query(insert, function(err, res) {
    if (err) {
      console.log("数据库错误", err);
      callback("0");
    } else {
      console.log("account:" + account + " is registered now.");
      callback("1");
    }
  });
};

var login = function(account, password, callback) {
  var select = "select * from users where account =" + account + "";
  $sql.query(select, function(err, res) { //err提示错误信息  res是查询到的内容全在里面
    if (err) {
      console.log("数据库错误", err);
      callback("0");
    } else {
      if (res[0].password == password) {
        callback("1");
        console.log("account:" + account + " is logged now.");
      } else {
        callback("2");
      }
    }
  });
}



router.post('/login', (req, res) => {
  var account = req.body.account;
  var password = req.body.password;
  login(account, password, function(result) {
    switch (result) {
      case "0":
        res.send("Error");
        break;
      case "1":
        req.session.userName = account;
        res.send("Done");
        break;
      case "2":
        res.send("Wrong Password");
        break;
    }

  });

})


router.post('/register', (req, res) => {
  var account = req.body.account;
  var password = req.body.password;
  register(account, password, function(result) {
    switch (result) {
      case "0":
        res.send("Error");
        break;
      case "1":
        res.send("Done");
        break;
    }
  });
})

router.post('/logout', (req, res) => {
  var account = req.body.account;
  req.session.userName = null;
  res.send("Done");
})


module.exports = router;

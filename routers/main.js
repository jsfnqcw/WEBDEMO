const app = require('express');
const router = app.Router();
const https = require('https');
const path = require('path');
var session = require('express-session');





router.get('/', (req, res) => {
  req.sessionStore.get(req.query.usrname, function (error, session) {
    // 如果session存在，表示用户已在其他地方登录
  });


  if (req.session.userName) { //判断session 状态，如果有效，则返回主页，否则转到登录页面
    res.sendFile(path.join(__dirname, '../public/main.html'));
  } else {
    res.redirect('/login');
  }
})
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
})


module.exports = router;

## jQuery + Express + mysql WEB站点


### public 静态文件

#### login.html
1 CSS加载动画 实现方案@keyframe

2 等比例自适应填充式背景实现
实现方案：添加属性  background-size: cover;和height: 100vh;

3 半透明效果以及层次感
实现方案：使用z-index和opacity；
color不再选择#ffffff十六进制，而是使用rgba模式，a可以在调试中自由更改

#### main.html
1 标题栏 实现方案：float属性。

2 轮播栏 实现方案：使用js播放，



### express NODE.JS server
1 多级路由及其重定向
实现方案：使用module.export = router;
使用path.join实现路径切换

2 session保留登录状态
实现方案：在主路由添加，便于所有路由访问

3 mysql数据库连接
比较简单，不做赘述

4 关于异地登陆限制
web端无法实现，因为意外状况无法预料且结果不可避免，例如突然停电，因此无法将登陆状态锁定在一个设备一个ip上。不过可以保证做数据操作前先进行session验证，相对保证安全性。

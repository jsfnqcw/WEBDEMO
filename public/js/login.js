$(function() {
  window.history.replaceState(null, null, "/");
  $("#account").val(window.localStorage.account);
})

$("#login").click(function functionName() {
  var account = $("#account").val();
  var password = $("#password").val();
  console.log("account:" + account + ",password:" + password);

  $.post("/user/login", {
      "account": account,
      "password": password
    },
    function(result) {
      if (result == "Done") {
        //补充登录成功的方法
        //
        window.localStorage.account = account;
        console.log("登陆成功！");
        window.location.href = './main.html';

      } else {
        alert("Failed!");
      }
    });
})

$(".note").click(function() {
  $(".card").animate({
    left: '-400px'
  }, "1s", function() {
    window.location.href = "./register.html";
  });
})

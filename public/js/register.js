$(function() {
  window.history.replaceState(null, null, "/");
})

$("#register").click(function functionName() {
  var account = $("#account").val();
  var password = $("#password").val();
  var retype = $("#retype").val();
  if (password != retype){
    alert("密码不一致噢！");
    return;
  }
  console.log("account:" + account + ",password:" + password);
  $.post("/user/register", {
      "account": account,
      "password": password
    },
    function(result) {
      if (result == "Done") {
        //补充注册成功的方法
        //
        window.localStorage.account = account;
        jump();

      } else {
        alert("Failed!");
      }
    });
})

$(".note").click(function(){
  jump();
})



function jump() {
  $(".card").animate({
    left: '-400px'
  }, "1s", function() {
    window.location.href = "./login.html";
  });
}

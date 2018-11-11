$(function() {
  window.history.replaceState(null, null, "/");
  $("#account").text("当前登陆：" + window.localStorage.account);
})


$("#logout").click(function() {
  var account = window.localStorage.account + "";
  window.localStorage.removeItem("account");
  $.post("/user/logout", {
      "account": account,
    },
    function(result) {
      if (result == "Done") {
        window.location.href = '/';
      } else {
        alert("Failed!");
      }
    });
})

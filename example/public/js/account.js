function login(){
	account = $("#account").val();
	password = $("#password").val();
	
	$.post("/login",
			{"account":account,"password":password},
			function(result){
				if (result=="Done"){
					alert("Success!");
					window.location.href='./Main.html';
				}else{
					alert("Failed!");
				}
	});
	
}


function register(){
	account = $("#account").val();
	password = $("#password").val();
	passwordConfirm = $("#passwordConfirm").val();
	
	if( password != passwordConfirm){
		alert("密码不一致噢!");
	}else{
		$.post("/register",
			{"account":account,"password":password},
			function(result){
				if (result=="Done"){
					alert("Register Success!");
					window.location.href='./Login.html';
				}else{
					alert("Failed!");
				}
	});
	}
	
}
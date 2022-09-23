//密码
function checkPwd() {
	var pwd = document.getElementById("pwd").value;
	var pwdId = document.getElementById("pwd_prompt");
	pwdId.innerHTML = "";
	if(pwd.length < 4 || pwd.length > 10) {
		pwdId.innerHTML = "密码长度为在4—10字符";
		return false;
	}
	return true;
}
//手机号
function checkMobile() {
	var mobile = document.getElementById("mobile").value;
	var mobileld = document.getElementById("mobile_prompt");
	mobileld.innerHTML = "";
	if(mobile.charAt(0) != 1) {
		mobileld.innerHTML = "手机号开始位应该为1";
		return false;
	}
	if (mobile.length < 11 || mobile.length > 12) {
		mobileld.innerHTML = "请输入正确的手机号长度";
		return false;
	}
	for(var i = 0; i < mobile.length; i++) {
		if(isNaN(mobile.charAt(i))) {
			mobileld.innerHTML = "手机号码不能包含字符";
			return false;
		}
	}
	return true;
}
//登录函数
            /*function login_click(){
                window.location.href="login.html";
            }*/
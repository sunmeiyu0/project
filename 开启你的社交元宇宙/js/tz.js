function checkMobile() {
	var mobile = document.getElementById("mobile").value;
	var mobileld = $("mobile_prompt");
	mobileld.innerHTML = "";
	if(mobile.charAt(0) != 1) {
		mobileld.innerHTML = "手机号开始位应该为1";
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

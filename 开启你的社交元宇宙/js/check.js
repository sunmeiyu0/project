function $ (ElementId){
	return document.getElementById(Element);
}
function check(){
	var oText=$("oText");
	var oTextId=$("oTextId");
	userId.innerHTML="";
	if (oText.value==""){
		oTextId.innerHTML="哈哈哈哈";
		return false;
	}
	return true;
}
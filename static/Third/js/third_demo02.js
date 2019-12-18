var text1 = window.parent.window.accommodation;
var _103v0vt = document.getElementById("_103v0vt");
_103v0vt.innerHTML = text1;
if(_103v0vt.innerHTML == "您还未输入住宿地址") {
	_103v0vt.style.color = "red";
}
var nav = document.getElementById("_nav");
nav.onclick = function() {
	window.parent.window.dddd();
	//alert(11);
}
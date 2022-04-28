function addBorder(Person_name){
	document.getElementById(Person_name).border="1";
}
function videohide() {
    document.getElementById("start").style.display="none";//none or block
}

setTimeout(videohide,7000) //等待6kms执行videohide函数
function texthide(){
	document.getElementById("relation").style.display="none";
}

function textblock(){
	document.getElementById("relation").style.display="block";
}
setTimeout(textblock,7000)

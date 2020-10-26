var count = 0;
function main(){
	alert("Hello World");
}
function check(){
	var div = document.getElementById("dropdown");
	if(div.style.display === "none"){
		div.style.display = "block";
	}
	else{
		div.style.display = "none";	
	}
}
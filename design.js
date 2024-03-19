var num=(Math.ceil(Math.random()*100));
var count=0;
console.log(num)
var img=document.getElementById("im")
function chec() {
	var use=parseInt(document.getElementById('num').value);
	count++
	if(use==num){
		document.getElementById('ss').textContent="congratulations";
		img.src="cong.jpeg"
		document.getElementById('mm').textContent="you have taken "+count+" tries to guess number";
	}
	else if(use<num){
		document.getElementById('ss').textContent="!Try with greater number";
	    img.src="down.jpeg"
	}
	else if(use>num){
		document.getElementById('ss').textContent="!Try with smaller number";
	    img.src="down.jpeg"
	}
	document.getElementById('kk').textContent=count
}
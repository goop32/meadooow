function init() { //this function will execute when the html body loads
	time();
}

function time() {
	var d = new Date(); //main date thing - wouldn't touch
	var s = d.getSeconds(); //seconds - unimplemented
	var g = ["Hello, ", "Howdy, ", "Greetings, ", "Hey, ", "Yo, ", "What a nice day we're having, ", "Woah, it's "];
	var gr = g[Math.floor(Math.random() * g.length)]; // selected greeting
	var p = prompt("what's your name? \(leave blank for frosted tip man\)");
	if (p = null) p="Guy Fieri";
	document.getElementById("h1-hello").innerHTML = (gr + p + "!");

	function update(d) {
		var current = new Date(); // init Date object
		var d = (current.getMonth()+1) + "/" + current.getDate() + "/" + current.getFullYear(); // join elements of date
		var h = current.getHours(); // hours
		l = current.getMinutes();
		if (Math.ceil(Math.log10(l + 1)) == 1) { // checking length of mins
			var m = "0" + current.getMinutes(); // outputs 0x instead of just x
		} else {
			var m = current.getMinutes(); // minutes
		}
		var ts = current.getSeconds(); // seconds
		
		var dElem = document.getElementById("h3-date")
		dElem.innerHTML = d;
		var tElem = document.getElementById("h2-time");
		tElem.innerHTML = (h + ":" + m);
		setTimeout(update, 1000);
	}
	
	document.addEventListener('DOMContentLoaded', update(), false);
}
// fuck a code aesthetic
function showSettings() {
	document.getElementById("settings").style.display = "block";
}

function darkMode() {
	document.getElementsByTagName("body")[0].style.backgroundColor = "black";
	document.getElementById("h1-hello").style.color = "white";
	document.getElementById("h2-time").style.color = "white";
	document.getElementById("h3-date").style.color = "white";
	document.getElementById("img-gear").style.filter="invert(100%)";
}

function lightMode() {
	document.getElementsByTagName("body")[0].style.backgroundColor = "white";
	document.getElementById("h1-hello").style.color = "black";
	document.getElementById("h2-time").style.color = "black";
	document.getElementById("h3-date").style.color = "black";
	document.getElementById("img-gear").style.filter="invert(0%)";
}

function changeName() {
	input("new name: ");
}

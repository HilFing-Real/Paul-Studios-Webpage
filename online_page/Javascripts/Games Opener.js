function p(){
	window.open("Pong.html", "_blank", "toolbar=yes,scrollbars=no,resizable=no,top=10,left=370,width=400,height=460");
}

function sm(){
	window.open("Story Maker.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=no,left=200,width=800,height=460");
}

function tt(){
	window.open("Typing Test.html", "_blank", "toolbar=yes,scrollbars=no,resizable=no,top=10,left=370,width=550,height=460");
}
function pl(){
	window.replace("192.168.0.102/Pauls/online_page/WebGl_Build/index.html");
}

function fgt() {
	document.onkeyup = function(e) {
		if(e.keyCode==83) {
			var gnm = prompt("Please enter the game", "Game Name");
			if (gnm == "Story Maker" || gnm == "story maker") {
				sm()
			}
			if (gnm == "Typing Test" || gnm == "typing test") {
				tt()
			}
			if (gnm == "Pong" || gnm == "pong") {
				p()
			}
			if (gnm == "Platformer" || gnm == "platformer") {
				pl()
			}
		}
	}
}

function j() {
	alert("Press 'S'");
}

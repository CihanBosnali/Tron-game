var lastpressed;

document.addEventListener("keydown", function() {
	lastpressed = event.keyCode;
});

setInterval( () => console.log(lastpressed), 200);
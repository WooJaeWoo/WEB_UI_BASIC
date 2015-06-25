







var box = document.getElementById('box');
box.style.left = '10px';


function goRightWithTimeout() {
	box.style.left = parseInt(box.style.left) + 5 + 'px';
	setTimeout(goRightWithTimeout, 20);
}
//setTimeout(goRightWithTimeout, 20);


function goRightWithInterval() {
	box.style.left = parseInt(box.style.left) + 5 + 'px';
}
//setInterval(goRightWithInterval, 20);


function goRightWithRAF (timestamp) {
	console.log(timestamp);
	box.style.left = parseInt(box.style.left) + 5 + 'px';
	requestAnimationFrame(goRightWithRAF);
}
//requestAnimationFrame(goRightWithRAF);


var startTime;
var startLeft = parseInt(box.style.left);
var unitDist = (800 - parseInt(box.style.left)) / 10000;

function tick(timestamp) {
	if (!startTime) startTime = timestamp;
	var deltaTime = timestamp - startTime;

	box.style.left = Math.floor(Math.min(startLeft + unitDist * deltaTime, 800)) + 'px';

	if (parseInt(box.style.left) < 800) {
		requestAnimationFrame(tick);
	}
}
//requestAnimationFrame(tick);

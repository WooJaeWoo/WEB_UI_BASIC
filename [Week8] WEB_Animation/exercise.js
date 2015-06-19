window.addEventListener('load', function() {

	var box = document.getElementById('box');
	box.style.left = '10px';
	var startButton = document.getElementById('startButton');
	var stopButton = document.getElementById('stopButton');
	var dirButton = document.getElementById('dirButton');
	var isMoving = false;
	var isLeft = false;

	startButton.addEventListener('click', start);
	stopButton.addEventListener('click', stop);
	dirButton.addEventListener('click', dirChange);

	var startTime;
	var startLeft;
	var unitDist;
	
	function start() {
		isMoving = true;
		startTime = null;
		startLeft = parseInt(box.style.left);
		if (isLeft)
			unitDist = startLeft / 5000;
		else
			unitDist = (800 - startLeft) / 5000;
		requestAnimationFrame(tick);
	}

	function stop() {
		isMoving = false;
	}
	
	function dirChange() {
		if (isLeft == true) {
			isLeft = false;
		} else {
			isLeft = true;
		}

		stop();
		start();
	}

	function tick(timestamp) {
		if (!startTime) startTime = timestamp;
		var deltaTime = timestamp - startTime;

		if (isLeft)
			box.style.left = Math.floor(Math.min(startLeft - unitDist * deltaTime, 800)) + 'px';
		else
			box.style.left = Math.floor(Math.min(startLeft + unitDist * deltaTime, 800)) + 'px';
		
		if (isMoving && parseInt(box.style.left) < 800 && parseInt(box.style.left) > 0) {
			requestAnimationFrame(tick);
		}
	}

});

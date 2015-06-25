window.addEventListener('DOMContentLoaded', function() {
	var container = document.getElementById('container');
	container.addEventListener('click', function(event) {
		if (event.target.tagName === 'DIV') {
			if (isAnimate(event.target)) {
				event.target.classList.remove('animate');
				return;
			}
			event.target.classList.add('animate');
		}
	}, false);

	function isAnimate(element) {
		var elClasses = element.classList;
		for (var i = 0; i < elClasses.length; i++) {
			if (elClasses[i] === 'animate') return true;
		}
		return false;
	}
})
window.addEventListener("load", function (e) {
	addButton = document.getElementById('addButton');
	lotto = [];
	addButton.addEventListener("click", addNum,false);
}, false);

var addNum = function () {
	var numList = document.getElementById('numList');
	var num = document.createElement('li');
	while (1) {
		var randomNum = Math.floor(Math.random() * 45) + 1;	
		var checkedNum = duplicateCheck(randomNum);
		if (checkedNum !== -1) {
			lotto.push(checkedNum);
			num.textContent = checkedNum;
			numList.appendChild(num);
			break;
		}
	}
	endCheck(numList);
}

var duplicateCheck = function (randomNum) {
	lotto.forEach(function (item) {
		if (item === randomNum) {
			randomNum = -1;
		}
	});
	return randomNum;
}

var endCheck = function (numList) {	
	var listCount = numList.querySelectorAll('li').length;
	if (listCount === 7) {
		addButton.disabled = true;
		addButton.style.color = "gray";
	}
}

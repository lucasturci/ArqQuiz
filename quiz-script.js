
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt4 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var submitButton = document.getElementById('submitButton');
var resultCont = document.getElementById('result');

$(function() {
	window.parent.window.frameLoaded(); // avisei o meu pai que eu estou carregado
});

function loadQuestion(question) {
	
	var request = new XMLHttpRequest();
	request.open("GET", "questoes/" + question + ".json", false);
	request.send(null);
	var q = JSON.parse(request.responseText);
	console.log(q);
	questionEl.textContent = question + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
}

function isCorrect() {
	
}

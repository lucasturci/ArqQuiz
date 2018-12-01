var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt4 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var submitButton = document.getElementById('submitButton');
var resultCont = document.getElementById('result');
var q = null;

$(function() {
	window.parent.window.frameLoaded(); // avisei o meu pai que eu estou carregado
});

function loadQuestion(question, curQuestion) {
	
	var request = new XMLHttpRequest();
	request.open("GET", "questoes/" + question + ".json", false);
	request.send(null);
	q = JSON.parse(request.responseText);
	console.log(q);
	questionEl.textContent = curQuestion + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
}

function isCorrect() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption) return "Selecione uma opcao";
	var x = selectedOption.value;
	if(q.answer == x) return "OK";
	else return "WA";
}


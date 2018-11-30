
$(function() {
	
});

var currentQuestion = 0;
var score = 0;

function frameLoaded() {
	var frame = document.getElementById('frame');
	frame.contentWindow.loadQuestion("1"); // loada a questao do quiz
}

/*

function skipQuestion() { 
	currentQuestion++;
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your score: ' + score; 
		return;
	}
	
	loadQuestion(currentQuestion);


}

function loadNextQuestion() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Selecione uma opcao!');
		return;
	}
	var answer = selectedOption.options[selectedOption.selectedIndex].text;
	if(questions[currentQuestion].answer.localeCompare(answer)){
		return;
	}else {
		return;
	}
	selectedOption.checked = false;
	currentQuestion++;
	
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your score: ' + score; 
		return;
	}
	
	loadQuestion(currentQuestion);


}
* */

//loadQuestion(currentQuestion);


function pular() {
	console.log("Pular");
	
}

function submeter() {
	console.log("Submeter");
}

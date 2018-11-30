var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt4 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var submitButton = document.getElementById('submitButton');
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
	

}

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
	alert(answer);
	if(questions[currentQuestion].answer.localeCompare(answer)){
		alert('RIGHT!');
		score += 10;
		return;
	}else {
		alert(answer);
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

loadQuestion(currentQuestion);



var curQuestion = 0;
var score = 0;
var frame = null;

var questoes = [{type: "questao", id: 1}, {type: "questao", id: 2}];


function loadFase() {
	var fase = questoes[curQuestion];
	console.log(frame);
	if(fase.type == "questao") $("#frame").attr("src", "quiz.html");
	else $("#frame").attr("src", "jogos/" + fase.id.toString() + ".html");
}

$(function() {
	frame = document.getElementById("frame");
	loadFase();
});

function frameLoaded() {	
	var fase = questoes[0];
	
	if(fase.type == "questao") frame.contentWindow.loadQuestion(fase.id.toString()); // loada a questao do quiz
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

function nextQuestion() {
	curQuestion++;
}


function pular() {
	console.log("Pular");
	
}

function submeter() {
	console.log("Submeter");
	var ret = frame.contentWindow.isCorrect();

	if(ret == "OK") { //passa de fase
		curQuestion++;
		score += 10;
		loadFase();
	} else if(ret == "WA") { 
		// vai pra pagina do gif do pc explodindo
	}
}

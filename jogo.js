


var curQuestion = 0;
var score = 0;
var frame = null;

var questoes = [{type: "jogo", id: 4}, {type: "jogo", id: 2}, {type: "jogo", id: 3}, {type: "jogo", id: 1}, {type: "questao", id: 1}, {type: "questao", id: 2}, {type: "questao", id: 3}, {type: "questao", id: 4}, {type: "questao", id: 5},  {type: "questao", id: 6}, {type:"jogo", id: 5}];


function loadFase() {
	var fase = questoes[curQuestion];
	console.log(frame);
	console.log(curQuestion);
	console.log(fase.type);
	if(fase.type == "questao") $("#frame").attr("src", "quiz.html");
	else $("#frame").attr("src", "jogos/" + fase.id.toString() + ".html");
}

$(function() {
	frame = document.getElementById("frame");
	loadFase();
});

function frameLoaded() {	
	var fase = questoes[curQuestion];
	
	if(fase.type == "questao") frame.contentWindow.loadQuestion(fase.id.toString(), curQuestion); // loada a questao do quiz
}


function nextQuestion() {
	curQuestion++;
}


function pular() {
	console.log("Pular");
	curQuestion++;
	loadFase();
}

function submeter() {
	console.log("Submeter");
	var ret = frame.contentWindow.isCorrect();

	if(ret == "OK") { //passa de fase
		curQuestion++;
		score += 10;
		loadFase();
	} else if(ret == "WA") { 
		console.log("Errou");
		$("#frame").attr("src", "./wrong/wrong2.html");
	} else if(ret == "Selecione uma opcao") { 
		alert("Nenhuma opção selecionada")
	} else {
		alert(ret);
	}
}

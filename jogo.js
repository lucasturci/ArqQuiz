var curQuestion = 0;
var score = 0;
var frame = null;
var butPular, butSubmeter;

var questoes = [{type: "questao", id: 1}, {type: "questao", id: 1}, {type: "questao", id: 1}, {type: "questao", id: 1}, {type: "questao", id: 2}, {type: "questao", id: 3}, {type: "questao", id: 4}, {type: "jogo", id: 1}, {type: "jogo", id: 2}, {type: "jogo", id: 3}, {type: "jogo", id: 4}, {type: "questao", id: 5},  {type: "questao", id: 6}, {type: "jogo", id: 5}];


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

function tryAgain() {
	$("#submit_button").css("visibility", "visible");
	$("#skip_button").css("visibility", "visible");
	console.log("Entreiiiii");
	loadFase();
}

function pular() {
	console.log("Pular");
	curQuestion++;
	openModal(curQuestion, 0);
}

function submeter() {
	console.log("Submeter");
	var ret = frame.contentWindow.isCorrect();

	if(ret == "OK") { //passa de fase
		curQuestion++;
		score += 10;
		openModal(curQuestion, 1);
//		loadFase();
	} else if(ret == "WA") { 
		console.log("Errou");
		$("#submit_button").css("visibility", "hidden");
		$("#skip_button").css("visibility", "hidden");
		$("#frame").attr("src", "./wrong/wrong" + (curQuestion+1).toString() + ".html");
	} else if(ret == "Selecione uma opcao") { 
		alert("Nenhuma opção selecionada")
	} else {
		alert(ret);
	}
}

function openModal(curQuestion, acertou) {
	document.getElementById("frame").hidden = "hidden";

	var request = new XMLHttpRequest();
	request.open("GET", "respostas/" + curQuestion + ".json", false);
	request.send(null);
	q = JSON.parse(request.responseText);

	if (acertou) document.getElementById("title").textContent = "Parabéns!! Você acaba de ganhar mais 10 pontos =D\nConfere aqui embaixo se seu raciocínio foi igual ao nosso!";
	else document.getElementById("title").textContent = "Poxa, que pena que você desistiu dessa pergunta =(\nMas então dá uma olhadinha aqui na nossa explicação pra ela!";

	document.getElementById("modal-body").textContent = q.explanation;

	document.getElementById("modal").hidden = "";
	document.getElementById("submit_button").hidden = "hidden";
	document.getElementById("skip_button").hidden = "hidden";
}

function closeModal() {
	document.getElementById("frame").hidden = "";
	document.getElementById("modal").hidden = "hidden";

	document.getElementById("submit_button").hidden = "";
	document.getElementById("skip_button").hidden = "";
	loadFase();
} 

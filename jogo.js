var curQuestion = 0;
var score = 0;
var pts = 0;
var frame = null;
var butPular, butSubmeter;

var questoes = [
/*1*/	{type: "questao", id: 0}, //pipeline basico
/*2*/	{type: "questao", id: 1},
/*3*/	{type: "jogo", id: 9},
/*4*/	{type: "questao", id: 9},
/*5*/  	{type: "questao", id: 10},
/*6*/	{type: "questao", id: 2}, //dep de dados
/*7*/	{type: "questao", id: 3},
/*8*/	{type: "questao", id: 4},
/*9*/	{type: "jogo", id: 1},
/*10*/	{type: "jogo", id: 2},
/*11*/	{type: "jogo", id: 3},
/*12*/	{type: "jogo", id: 4},
/*13*/	{type: "questao", id: 5},  //dep de controle
/*14*/	{type: "questao", id: 6}, 
/*15*/	{type: "jogo", id: 5},
/*16*/	{type: "jogo", id: 8}, //dep de controle
/*17*/	{type: "jogo", id: 6}, //escalonamento
/*18*/	{type: "questao", id: 8},
/*19*/	{type: "jogo", id: 7},
/*20*/  {type: "jogo", id: 10},
/*21*/  {type: "questao", id: 11}
];

var gifs = [
/*1*/	"images/gif1.gif",
/*2*/	"images/gif2.gif",
/*3*/	"images/gif3.gif",
/*4*/	"images/gif4.gif",
/*5*/	"images/gif5.gif",
/*6*/	"images/gif6.gif",
/*7*/	"images/gif7.gif",
/*8*/	"images/gif8.gif",
/*9*/	"images/gif9.gif",
/*10*/	"images/gif10.gif",
/*11*/	"images/gif11.gif",
/*12*/	"images/gif12.gif",
/*13*/	"images/gif13.gif",
/*14*/	"images/gif1.gif",
/*15*/	"images/gif2.gif",
/*16*/	"images/gif3.gif",
/*17*/	"images/gif4.gif",
/*18*/	"images/gif5.gif",
/*19*/	"images/gif6.gif",
/*20*/	"images/gif7.gif",
/*21*/	"images/gif8.gif"
];


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
	frame.onload = frameLoaded;
	pts = 10;
	loadFase();
});

function frameLoaded() {	
	var fase = questoes[curQuestion];
	console.log($("#frame")[0].attributes["src"]);
	if($("#frame").attr("src") == "quiz.html") frame.contentWindow.loadQuestion(fase.id.toString(), curQuestion); // loada a questao do quiz
	if($("#frame").attr("src") == "./wrong/wrong.html") frame.contentWindow.loadGif(gifs[curQuestion]);
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
		score += pts;
		openModal(curQuestion, 1);
//		loadFase();
	} else if(ret == "WA") { 
		console.log("Errou");
		$("#submit_button").css("visibility", "hidden");
		$("#skip_button").css("visibility", "hidden");
		$("#frame").attr("src", "./wrong/wrong.html");
	} else if(ret == "Selecione uma opcao") { 
		alert("Nenhuma opção selecionada")
	} else {
		alert(ret);
	}
	console.log("aquiiiiiii")
	if (pts > 1) pts -= 1;
	console.log(score)
}

function openModal(curQuestion, acertou) {
	document.getElementById("frame").hidden = "hidden";

	var fase = questoes[curQuestion-1];
	var exp;
	console.log(fase.type + " " + fase.id);
	if(fase.type == "jogo") {
		var request = new XMLHttpRequest();
		request.open("GET", "jogos/exp" + fase.id + ".json", false);
		request.send(null);
		exp = JSON.parse(request.responseText);
		console.log("Eh um jogo");
	} else exp = frame.contentWindow.q;
	console.log(exp);

	if (acertou) document.getElementById("title").textContent = "Parabéns!! Você acaba de ganhar mais " + pts + " pontos =D\nConfere aqui embaixo se seu raciocínio foi igual ao nosso!";
	else document.getElementById("title").textContent = "Poxa, que pena que você desistiu dessa pergunta =(\nMas então dá uma olhadinha aqui na nossa explicação pra ela!";

	document.getElementById("modal-body").innerHTML = exp.explanation;

	document.getElementById("modal").hidden = "";
	document.getElementById("submit_button").hidden = "hidden";
	document.getElementById("skip_button").hidden = "hidden";
}

function closeModal() {
	document.getElementById("frame").hidden = "";
	document.getElementById("modal").hidden = "hidden";

	pts = 10;
	document.getElementById("submit_button").hidden = "";
	document.getElementById("skip_button").hidden = "";
	if (curQuestion == 21) console.log(score);
	else loadFase();
} 

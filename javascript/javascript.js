
// Pontuação dos jogadores.
var pontJogador1 = 0;
var pontJogador2 = 0;

function enviar() {

var resultado = Math.floor(Math.random() * 6); // Número gerado aleatoriamente.

// criando variáveis para cada id do input da form.
var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var r = document.getElementById('r');
var x = document.getElementById('x');
var pj1 = document.getElementById('pontuacao-jog1');
var pj2 = document.getElementById('pontuacao-jog2');

r.value = resultado; // Adicionando o numero aleatório no input com o id 'r'.

// Se o valor não for numérico ou não tiver nada ou tiver apenas um espaço;
// mostre que os valores são inválidos.
if ( isNaN(n1.value) || (n1.value == "") || (n1.value == " "))
	x.value = "Valor(es) inválido(s)!";

else if (isNaN(n2.value) || (n2.value == "") || (n2.value == " "))
	x.value = "Valor(es) inválido(s)!";

// Se o valor colocado for menor ou igual a zero, ou for maior do que cinco;
// apague o valor digitado.
else if ((n1.value <= 0) || (n1.value > 5)) {
	n1.value = "";
	x.value = "...";
}
else if ((n2.value <= 0) || (n2.value > 5)){
	n2.value = "";
	x.value = "...";
}

else {
	// Se os valores tiverem os mesmos números; 
	// mostre que os valores são iguais.
	if (n1.value == n2.value)
		x.value = "Valores iguais!";

	// Se o valor digitado for igual o numero aleatório;
	// adicione um ponto ao do vencedor.
	else if (resultado == n1.value){
		x.value = "Jogador 1 venceu";
		pontJogador1++;
		pj1.innerHTML = pontJogador1;
	}else if (resultado == n2.value){
		x.value = "Jogador 2 venceu";
		pontJogador2++;
		pj2.innerHTML = pontJogador2;
	}else // se não; apenas mostre que ninguem acertou.
		x.value = "Ninguém venceu";

}

// Se os pontos do jogador for igual a 5;
// ele ganha, e o jogo acaba.
// todos os input são desabilitados e o botão de enviar também. 
if (pj1.innerHTML == 5 ) {
	r.value = "Fim de jogo";
	x.value = "Vencedor: Jogador 1";
	n1.disabled = true;
	n2.disabled = true;
	document.getElementById('send').disabled = true;
}else if (pj2.innerHTML == 5) {
		r.value = "Fim de jogo";
		x.value = "Vencedor: Jogador 2";
		n1.disabled = true;
		n2.disabled = true;
		document.getElementById('send').disabled = true;
	}
}


function cleaner() { // Limpar todos os input e habilitar o que foi desabilitado.
	document.getElementById('n1').value = '';
	document.getElementById('n2').value = '';
	document.getElementById('r').value = '';
	document.getElementById('x').value = '';
	document.getElementById('pontuacao-jog1').innerHTML = 0;
	document.getElementById('pontuacao-jog2').innerHTML = 0;
	pontJogador1 = 0;
	pontJogador2 = 0;
	n1.disabled = false;
	n2.disabled = false;
	document.getElementById('send').disabled = false;
}
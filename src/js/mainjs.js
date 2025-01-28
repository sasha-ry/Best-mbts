const listaSelecaotanks = document.querySelectorAll(".tanks");

listaSelecaotanks.forEach(tanks => {
	tanks.addEventListener("click", () => {
		esconderCartaotanks();

		const idtanksSelecionado = mostrarCartaotanksSelecionado(tanks);

		desativartanksNaListagem();
		ativartanksSelecionadoNaListagem(idtanksSelecionado);

	})
})


function ativartanksSelecionadoNaListagem(idtanksSelecionado) {
	const tanksSelecionadoNaListagem = document.getElementById(idtanksSelecionado);
	tanksSelecionadoNaListagem.classList.add("ativo");
}

function desativartanksNaListagem() {
	const tanksAtivoNaListagem = document.querySelector(".ativo");
	tanksAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaotanksSelecionado(tanks) {
	const idtanksSelecionado = tanks.attributes.id.value;
	const idDoCartaotanksParaAbrir = "cartao-" + idtanksSelecionado;
	const cartaotanksParaAbrir = document.getElementById(idDoCartaotanksParaAbrir);
	cartaotanksParaAbrir.classList.add("aberto");
	return idtanksSelecionado;
}

function esconderCartaotanks() {
	const cartaotanksAberto = document.querySelector(".aberto");
	cartaotanksAberto.classList.remove("aberto");
}


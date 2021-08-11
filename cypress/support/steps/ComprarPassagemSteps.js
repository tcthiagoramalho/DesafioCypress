/* global Given, And, Then, When */

import site from '../pageobjects/AcessarSite';
import comprarPassagem from '../pageobjects/ComprarPassagemPege';


const abrirSite = new site
const passagem = new comprarPassagem

Given(/^que acesso o site da smiles$/, () => {
	abrirSite.AbrirBrowser();
});

When(/^defino a origem e o destino$/, () => {
	passagem.PrencherEndereco();
});

And(/^defino as datas de partida e de retorno$/, () => {
	passagem.PrencherData();
});

And(/^seleciono o voo de ida e o voo de volta$/, () => {
	passagem.SelecionarVoo();
});

And(/^vizualizo a seleção da taxa com milhas$/, () => {
	passagem.ViewTaxa();
});

And(/^valido o resumo do pedido$/, () => {
	passagem.VizualizarResumo();
});

Then(/^aceito os termos e continuo$/, () => {
	passagem.AceitarTermos();
});

/* global Given, And, Then, When */

import site from '../pageobjects/AcessarSite';
import comprarPassagem from '../pageobjects/ComprarPassagemPege';


const abrirSite = new site
const passagem = new comprarPassagem

Given(/^que acesso o site da smiles$/, () => {
	abrirSite.AbrirBrowser();
});

When(/^defino os enderecos de partida e de destino$/, () => {
	passagem.PrencherEndereco();
});

And(/^defino as datas de partida e de retorno$/, () => {

});

And(/^seleciono o voo de ida e o voo de volta$/, () => {

});

Then(/^valido o resumo do pedido$/, () => {
	return true;
});

And(/^aceito os termos e continuo$/, () => {

});




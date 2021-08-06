/* global Given, Then, When */

import site from '../pageobjects/AcessarSite';
import comprarPassagem from '../pageobjects/ComprarPassagemPege';


const abrirSite = new site
const passagem = new comprarPassagem

Given(/^que acesso o site da smiles$/, () => {
	abrirSite.AbrirBrowser();
});

When(/^defino o endereço de partida e de destino$/, () => {
	passagem.PrencherEndereco();
});

Then(/^valido o resumo do pedido$/, () => {
	return true;
});





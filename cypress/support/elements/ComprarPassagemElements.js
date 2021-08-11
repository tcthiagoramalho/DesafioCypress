class comprarPassagemElements {
    Origem = () => {return '#inputOrigin'}
    SetOrigem = () => {return '#ulOriginAirport > :nth-child(3)'}
    Destino = () => {return '#inputDestination'}
    SetDestino = () => {return '#ulDestinationAirport > :nth-child(1)'}

    AbrirCalendario = () => {return '#_smilesflightsearchportlet_WAR_smilesbookingportlet_departure_date'}
    SetDataIda = () => {return '.ui-datepicker-group-first > .ui-datepicker-calendar > tbody >'}
    SetDataVolta = () => {return '.ui-datepicker-group-last > .ui-datepicker-calendar > tbody >'}
    DataVoltaProximoMes = () => {return '.ui-datepicker-next'}
    ConfirmaData = () => {return '.ui-datepicker-current'}

    BuscarVoos = () => {return '#submitFlightSearch'}

    SelecionarVooDeIda = () => {return '#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
    SelecionarVooDeVolta = () => {return '#secondFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}

    FormaDePagTaxa = () => {return '#opt1'}

    AceitaTermos = () => {return '.terms > label'}
    Continuar = () => {return '.button > .btn'}

    TelaDeLogin = () => {return '.main-content > h3'}

    //validações
    ValorBilheteIda = () => {return '#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"]'}
    ValorBilheteVolta = () => {return'#secondFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
    ValorTotalDoBilhete = () => {return '.summary-side-fare-miles-total'}
    ValorTaxaEmbarque = () => {return '.summary-side-boarding-miles-value'}
    ValorTotal = () => {return '#summarytotalmilesId'}

    //Mensagens de erros
    erro = () => {return '#errorModal'}
    btnOkErro = () => {return '#errorModal > .modal-footer > .btn'}
}

export default comprarPassagemElements
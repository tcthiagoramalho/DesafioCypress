class comprarPassagemElements {
    Origem = () => {return '#inputOrigin'}
    SetOrigem = () => {return '#ulOriginAirport > :nth-child(3)'}
    Destino = () => {return '#inputDestination'}
    SetDestino = () => {return '#ulDestinationAirport > :nth-child(1)'}

    Calendario = () => {return '#_smilesflightsearchportlet_WAR_smilesbookingportlet_departure_date'}
    DataIda = () => {return '.ui-datepicker-group-first > .ui-datepicker-calendar > tbody > :nth-child(3) > :nth-child(1) > .ui-state-default'}
    DataVolta = () => {return '.ui-datepicker-group-first > .ui-datepicker-calendar > tbody > :nth-child(4) > :nth-child(3) > .ui-state-default'}
    ConfirmeData = () => {return '.ui-datepicker-current'}

    BuscarVoo = () => {return '#submitFlightSearch'}

    VooIda = () => {return '#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
    VooVolta = () => {return '#secondFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}

    Taxa = () => {return 'totalMiles'}

    SetTermo = () => {return '.terms > label'}
    Continuar = () => {return '.button > .btn'}

    Login = () => {return '.main-content > h3'}

    //validações
    ValorIda = () => {return '#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"]'}
    ValorVolta = () => {return'#secondFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
    ValorTotalPassagem = () => {return '.summary-side-fare-miles-total'}
    ValorTaxa = () => {return '.summary-side-boarding-miles-value'}
    ValorTotalPedido = () => {return '.summary-side-total-miles'}

    //erros
    erro = () => {return '#errorModal > .modal-header > h3'}
    btnOkErro = () => {return '#errorModal > .modal-footer > .btn'}
}


export default comprarPassagemElements
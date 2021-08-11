Feature: Simular uma viagem 

    Scenario: Comprar passagem 
        Given que acesso o site da smiles
        When defino a origem e o destino
        And defino as datas de partida e de retorno 
        And seleciono o voo de ida e o voo de volta 
        And vizualizo a seleção da taxa com milhas
        And valido o resumo do pedido
        Then aceito os termos e continuo
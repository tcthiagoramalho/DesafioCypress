Feature: Simular uma viagem 

    Scenario: Comprar passagem 
        Given que acesso o site da smiles
        When defino os enderecos de partida e de destino
        And defino as datas de partida e de retorno 
        And seleciono o voo de ida e o voo de volta 
        Then valido o resumo do pedido
        And aceito os termos e continuo
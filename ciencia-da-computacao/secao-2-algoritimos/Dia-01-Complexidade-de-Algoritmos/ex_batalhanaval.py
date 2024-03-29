"""
1 - Suponha que se está escrevendo uma função
chamada battleship para um jogo
de batalha naval. Dado um array
bidimensional com n linhas e m colunas,
e um par de coordenadas x para linhas e y para
colunas, o algoritmo verifica se há um navio
na coordenada alvo
entrada = [ 0 0 0 0 1
            0 0 0 0 1
            1 1 1 1 1
            0 0 0 1 0 ]

# resultado para (0, 4) = True
# resultado para (0, 0) = False
Implemente em: src/batalha_naval.py
"""

"""
Mesmo para um array bidimensional, o 
acesso a um elemento é O(1).
A complexidade de espaço também é
O(1), pois não consideramos a entrada em seu cálculo.
"""


def battleship(grid, line, column):
    if (grid[line][column] == 1): 
        return True

    return False

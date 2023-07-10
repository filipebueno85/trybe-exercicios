''' Soma de elementos
Crie uma função recursiva que receba uma lista de inteiros como
parâmetro e retorna a soma de todos elementos da lista.

Exemplo:
Entrada
[1, 2, 3, 4, 5]
Saída
15
'''

def soma_elementos(lista, indice):
  if indice == len(lista) - 1:
    return lista[indice]
  else:
    acc = soma_elementos(lista, indice + 1)
    return lista[indice] + acc

''' Valor máximo
    Crie uma função recursiva que receba uma lista de inteiros como
    parâmetro e retorna o maior inteiro contido nela.

  Exemplo:
  Entrada
  [1, 3, 2, 0]

  Saída
  3
  '''

def valor_maximo(lista, indice):
  if indice == len(lista) - 1:
    return lista[indice]
  else:
    elemento = valor_maximo(lista, indice + 1)
    return max(lista[indice], elemento)

''' Print ponta-a-ponta
    Crie uma função recursiva que simule o seguinte comportamento:
    Você terá uma lista com N inteiros e terá que printar os elementos das pontas até a lista terminar, ou seja, das pontas para o centro.

    Exemplo:
    Entrada
    [15, 54, 23, 50, 39, 27]
    [1, 2, 3, 4, 5]
    Saida
    15 27
    54 39
    23 50
    '''

def print_ponta_a_ponta(lista, inicio, fim):
  if inicio <= fim:
    print(lista[inicio], lista[fim])
    print_ponta_a_ponta(lista, inicio + 1, fim - 1)

if __name__ == "__main__":
  #print(soma_elementos([1, 2, 3, 4, 5], 0))
  #print(valor_maximo([1, 33, 26, -3189], 0))
  lista = [1, 2, 3, 4, 5]
  print_ponta_a_ponta(lista, 0, len(lista) - 1)
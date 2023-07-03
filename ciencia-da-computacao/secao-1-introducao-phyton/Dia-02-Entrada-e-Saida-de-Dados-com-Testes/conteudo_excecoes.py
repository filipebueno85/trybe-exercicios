# Dado um arquivo contendo estudantes e suas 
# respectivas notas, escreva um programa que:

# lê todas essas informações;
# aplique um filtro, mantendo somente as 
# pessoas que estão reprovadas;
# escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.

# Arquivo:

# Copiar
# Marcos 10
# Felipe 4
# José 6
# Ana 10
# Maria 9
# Miguel 5
# Exemplo saída:

# Copiar
# Felipe
# Miguel
# 🦜 A função split pode ser utilizada para
# dividir o nome em uma linha. Ex: line.split() -> 
# ['Felipe', '["Marcos", "10"].

def obter_estudantes_reprovados(arquivo_notas, arquivo_reprovados):
    with open(arquivo_notas) as notas_file:
        with open(arquivo_reprovados, mode="w") as reprovados_file:
            for line in notas_file:
                nome, nota = line.strip().split()
                nota = int(nota)
                if nota < 6:
                    reprovados_file.write(nome + "\n")


# Chamada da função
print(obter_estudantes_reprovados("notas.txt", "reprovados.txt"))

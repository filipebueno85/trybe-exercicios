# import sys


# if __name__ == "__main__":
#     for argument in sys.argv:
#         print("Received -> ", argument)

# user_input = input("Digite uma mensagem: ")
# print('O valor recebido foi:', user_input)

# NAME = input("Insira seu nome: ")


# for letter in NAME:
#     print(letter)

# nums = input("Insira valores aqui, separados por espaço: ")

# nums_arr = nums.split(" ")

# sum = 0
# for num in nums_arr:
#     if not num.isdigit():
#         print(f"Erro ao somar valores, {num} não é um dígito.")
#     else:
#         sum += int(num)

# print(f"A soma dos valores válidos é: {sum}")


a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d


head, *tail = (1, 2, 3)
# Quando um * está presente no
#  desempacotamento, os valores são desempacotados
#  em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]

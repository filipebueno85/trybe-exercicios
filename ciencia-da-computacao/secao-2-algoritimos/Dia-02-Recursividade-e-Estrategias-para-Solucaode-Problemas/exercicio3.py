# Crie um algoritmo recursivo que encontre, em uma lista,
#  o maior número inteiro.

def find_max_recursive(list):
    if len(list) == 1:
        return list[0]
    else:
        if list[0] > list[1]:
            list.pop(1)
        else:
            list.pop(0)
        return find_max_recursive(list)
    # outro jeito usando a função max()

    # if len(list) == 1:
    #     return list[0]
    # else:
    #     return max(list[0], find_max_recursive(list[1:]))


if __name__ == "__main__":
    list = [1, 2, 3, 4, 44, 5, 6, 7, 8, 9]
    print(find_max_recursive(list))
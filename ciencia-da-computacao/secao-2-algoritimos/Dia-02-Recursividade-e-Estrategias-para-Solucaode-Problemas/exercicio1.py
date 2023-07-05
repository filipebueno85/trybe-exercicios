# Crie um algoritmo não recursivo para
# contar quantos números pares existem em
# uma sequência numérica (1 a n).

def count_even(n):
    count = 0
    for i in range(1, n+1):
        # if i % 2 == 0:
        if n % 2 == 0 and n != 0:
            count += 1
    return count

# Transforme o algoritmo criado acima em recursivo.


def count_even_recursive(n):
    if n == 0:
        return 0
    else:
        if n % 2 == 0:
            return 1 + count_even_recursive(n-1)
        else:
            return count_even_recursive(n-1)


if __name__ == "__main__":
    print(count_even(4))

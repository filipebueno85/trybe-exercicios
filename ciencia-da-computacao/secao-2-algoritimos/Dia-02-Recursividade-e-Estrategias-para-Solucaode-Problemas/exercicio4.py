# Escreva um algoritmo recursivo para
# encontrar o máximo divisor comum (mdc) de dois inteiros.

def mdc(a, b):
    if b == 0:
        return a
    else:
        return mdc(b, a % b)


if __name__ == "__main__":
    print(mdc(16, 24))

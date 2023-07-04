def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


n = 1000


meu_array = list(range(1, n))
# meu_array = [1, 2, 3, 4, 5, 10, 22,
#  25, 45, 47, 48, 53, 55, 56, 58, 61, 66, 68, 77, 85, 88, 145]

multiply_arrays(meu_array, meu_array)

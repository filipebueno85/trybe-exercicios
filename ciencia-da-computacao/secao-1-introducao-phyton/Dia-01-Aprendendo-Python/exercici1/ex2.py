listNumber = [1, 2, 3, 10, 30, 45, 60, 150]


def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(mean(listNumber))

# def averageCauculete(list):
#   return sum(list) / len(listNumber)

# print(averageCauculete(listNumber))
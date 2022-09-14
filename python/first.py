
# a = float(input("give me a number: "))

# b = float(input("give me a second number: "))

# if a == b:
#     print("those are the same numbers")
#     if b!= 0:
#         print("therefore, the quotient is ", a/b)
# elif a > b:
#     print("your first number was bigger")
# else:
#     print("your second number was bigger")

# x = int(input('Enter an integer: '))
# root = 0
# pwr = 2
# while pwr > 1 and pwr < 7:
#     while root**pwr < x:
#         root = root + 1
#     if root**pwr == x:
#         print(str(root) + '**' + str(pwr), '==', str(x))
#         break
#     else:
#         root = 1
#         pwr = pwr + 1
# else:
#     print('no such pair exists')

sum = 0
current = ''
for x in '1.2,2.4,3.123':
    if x != ',':
        current += x
        # print('CURR:', current)
    else:
        # print('sum:', sum, 'current:', current)
        sum += float(current)
        current = ''
        
sum += float(current)
print(sum)
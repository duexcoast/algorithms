# x = 123456
# epsilon = 0.01
# step = epsilon**3
# numGuesses = 0
# ans = 0.0
# while abs(ans**2 - abs(x)) >= epsilon and ans*ans <= abs(x):
#     ans += step
#     numGuesses += 1


# print('numGuesses =', numGuesses)

# if abs(ans**2 - abs(x)) >= epsilon:
#     print('Failed on square root of', x)
# else: 
#     print('Square root of', x, 'is close to', ans)

x = 144
epsilon = 0.01
numGuesses = 0
low = 0
if x < 0 and x > -1:
    high = -1
elif x < -1:
    high = x
else:
    high = max(1, x)
     
ans = (high + low)/2.0 # starting point

while abs(ans**3 - x) >= epsilon:
    print('low =', low, 'high =', high, 'ans =', ans)
    numGuesses += 1
    if abs(ans**3) < abs(x):
        low = ans
    else: 
        high = ans
    ans = (high + low)/2.0
print('numGuesses:', numGuesses)
print(ans, 'is close to the cube root of', x)
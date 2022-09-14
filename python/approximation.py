x = 123456
epsilon = 0.01
step = epsilon**3
numGuesses = 0
ans = 0.0
while abs(ans**2 - abs(x)) >= epsilon and ans*ans <= abs(x):
    ans += step
    numGuesses += 1


print('numGuesses =', numGuesses)

if abs(ans**2 - abs(x)) >= epsilon:
    print('Failed on square root of', x)
else: 
    print('Square root of', x, 'is close to', ans)
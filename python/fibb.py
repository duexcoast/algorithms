def fibRec(n):
    """Assumes n int >= 0
    Returns fibonacci of n"""

    if n== 0 or n == 1:
        return 1
    else:
        return fibRec(n - 1) + fibRec(n-2)
  
def test(n):
    print(fibRec(n))
    
def testFib(n):
    for i in range(n+1):
        print( 'fib of', i, '=', fibRec(i))

test(120)

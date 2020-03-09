def summation(n):
	return n * (n + 1) / 2

def sumOfSquares(n):
	return summation(n) * (((2 * n) + 1) / 3)

def squareOfSum(n):
	return pow(summation(n), 2)

def sumSquareDifference(n):
	return squareOfSum(n) - sumOfSquares(n)

n = 100
#print(summation(n))
#print(sumOfSquares(n))
#print(squareOfSum(n))
result = sumSquareDifference(n) 
print(result)

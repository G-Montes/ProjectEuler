#Sum Square Difference

#The sum of the squares of the first ten natural numbers is,
#12+22+...+102=385
#The square of the sum of the first ten natural numbers is,
#(1+2+...+10)2=552=3025
#Hence the difference between the sum of the squares of the 
#first ten natural numbers and the square of the sum is, 
#3025−385=2640.
#Find the difference between the sum of the squares of the 
# first one hundred natural numbers and the square of the sum.


#Solved 3/08/2020
#
#Notes: This problem was pretty simple, so long as it's assumed
#that the summation always begins at 1. Since the sum of squares
#and the square of sums both included a summation of the first n
#numbers, I could make that its own function to improve readability.
#The one improvement I see here is to assign the summation to a
#variable under sumSquareDifference, and then pass that as an argument
#to the other two functions since the same summation is calculated twice.
def summation(n):
	return n * (n + 1) / 2

def sumOfSquares(n):
	return summation(n) * (((2 * n) + 1) / 3)

def squareOfSum(n):
	return pow(summation(n), 2)

def sumSquareDifference(n):
	return squareOfSum(n) - sumOfSquares(n)

n = 100
result = sumSquareDifference(n) 
print(result)

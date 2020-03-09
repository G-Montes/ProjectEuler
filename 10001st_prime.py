#10001st_prime

#By listing the first six prime numbers: 
#2, 3, 5, 7, 11, and 13, we can see that 
#the 6th prime is 13. What is the 10001st 
#prime number?


#Solved: 3/08/2020
#
#Notes: This solution finds all the
#first n prime numbers and returns the
#last one. The reason the I stored the 
#previous prime is that primality is
#determined by making sure that the 
#previous primes acquired are not multiples
#of the current number.
#
#This solution is not fit to find large
#values of n, as this function will have
#to check every odd number for primalilty.

def firstNPrimes(n):
	arrOfprimes = [2,3]
	i = 5
	while (len(arrOfprimes) < n):
		isPrime = True
		
		#check to see that the number isn't
		#divisible by any of the primes
		for prime in arrOfprimes:
			if(i % prime == 0):
				isPrime = False
				break
		
		if(isPrime):
			arrOfprimes.append(i)
		
		#multiples of 2 are not prime
		#so no need to check them
		i = i + 2
	
	return arrOfprimes[-1]
	
n = 10001
result = firstNPrimes(n)
print(result)
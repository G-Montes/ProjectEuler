//Largest prime factor

//The prime factors of 13195 are 
//5, 7, 13 and 29. What is the largest 
//prime factor of the number 600851475143?

//Solved: 3/09/2020
//
//Notes: This solution is pretty much like the
//previous solution. The main difference is that
//instead of generating the primes up to N, it
//only does so for numbers < sqrt(n). I realized
//that since we're finding the largest prime factor,
//there wouldn't be a value greater than n/2.
//The findLargestPrime function performs a prime 
//factorization on the input number and then
//returns the largest prime found.
//
//Some other improvemnets:
//-removed some redundant code:
//  -findLargestPrimeNum:
//      -I realized that the code surrounding the for
//       loop redoes what's done in the for loop so
//       I deleted it.
//  -findPrimesUpToN
//      -the if else at the beginning didn't really
//       do anything since the limit was sqrt(n)
//      -also 2,3 was added at the beginning of the array
//       at the end of the function. The array could be 
//       declared with those values at the start.
//
//Although the function works for smaller values, the 
//findPrimesUptoN should be refactored so that it prevents
//unnecesarry calculations.
function findPrimesUpToN(limit){
    let numIsPrimeArr = []
    let primeNumsArr = [2,3]
    for(let i = 0; i < limit; i++){
        numIsPrimeArr.push(false)
    }
    for(let i = 1; i * i < limit; i++){
        for(let j = 1; j * j < limit; j++){
            let n = (4 * i * i) + (j * j)
            if(n <= limit && (n % 12 == 1 || n % 12 == 5)){
                numIsPrimeArr[n] ^= true
            }
            n = (3 * i * i) + (j * j)
            if(n <= limit && n % 12 == 7){
                numIsPrimeArr[n] ^= true
            }
            n = (3 * i * i) - (j * j)
            if(i > j && n <= limit && n % 12 == 11){
                numIsPrimeArr[n] ^= true
            }
        }
    }
    for(let r = 5; r * r < limit; r++){
        if(numIsPrimeArr[r]){
            for(let i = r * r; i < limit; i += r * r){
                numIsPrimeArr[i] = false
            }
        }
    }
    for(let a = 5; a < limit; a++){
        if(numIsPrimeArr[a]){
            primeNumsArr.push(a)
        }
    }
    return primeNumsArr
}
function findLargestprimeNo(n){
    for(let index in primeArr){
        if (n % primeArr[index] == 0 && n != primeArr[index]){
                return findLargestprimeNo(n/primeArr[index])
        }
    }
    return n
}
let n = 600851475143
var primeArr = [].concat(findPrimesUpToN(Math.sqrt(n)))
console.log(findLargestprimeNo(n))
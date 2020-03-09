//Largest prime factor

//The prime factors of 13195 are 
//5, 7, 13 and 29. What is the largest 
//prime factor of the number 600851475143?


//Partially Solved 3/1/2020
//Officially uploaded to the repo on 3/2/2020
//
//Notes: This solution DOES NOT solve problem 3
//of the project-euler website. This is marked and
//uploaded as a partial solution as the code will
//theoretically solve the solution but runs into
//memory issues for n over 120 million.
//
//There are two resolutions that I have in mind.
//The more unlikely is to find a way to increase 
//the memory limit on the heap which I tried with
//no success. The other solution I have would be to
//to break the prime search into sections and avoid
//having the heap run out of memory. I will come back
//and fix this issue so that it can run normally on
//most computers, but since I spent a lot of time
//researching this issue already, I feel it's best
//to move on to the next problem and come back to this
//when I have more free time.
function findPrimesUpToN(limit){
    let numIsPrimeArr = []
    let primeNumsArr = []
    let primes1 = []
    if(limit == 2){
        primes1.push(2)
    }else if(limit == 3){
        primes1.push(3)
    }
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
    primeNumsArr.unshift(2,3)
    return primeNumsArr
}
function noIsPrime(n){
    return primeArr.includes(n)
}
function findLargestprimeNo(n){
    if (noIsPrime(n)){
        return n
    }else if(n % 2 == 0){
        return findLargestprimeNo(n/2)
    }else{
        for(let index in primeArr){
            if (n % primeArr[index] == 0){
                return findLargestprimeNo(n/primeArr[index])
            }
        }
    }
}
let n = 600851475143
//let n = 99999999
var primeArr = [].concat(findPrimesUpToN(n))
console.log(findLargestprimeNo(n))
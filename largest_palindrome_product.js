//Largest Palindrom Product

//A palindromic number reads the same both ways. The 
//largest palindrome made from the product of two 2-digit 
//numbers is 9009 = 91 × 99. Find the largest palindrome 
//made from the product of two 3-digit numbers.


//Solved 3/04/2020
//
//Notes: This problem was relatively easy. Much easier than
//the last. This may not be the fastest solution but I tried
//to make sure there weren't any unnecessary double calculations.
//This was also the first time I gave myself a time limit to work
//on the problem. This took me 24 minutes 30 seconds of 25 minutes.
//I was under time, but I feel I could have finished faster had I taken
//the time to work out the edge cases initially. 
//
//This program finds the largest palindrome resulting from the 
//product of two n digit numbers. 
function checkIfPalindrome(num){
    let numArr = num.toString().split("")
    for(let i = 0; i <= (numArr.length) / 2; i++){
        if(numArr[i] != numArr[numArr.length - 1 -i]){
            return false
        }
    }
    return true
}
function findPalindrome(numOfDigits){
    let start = Math.pow(10, numOfDigits - 1)
    let end = Math.pow(10, numOfDigits)
    let largestPalindrome = 0
    for(let i = start; i < end; i++){
        for(let j = i; j < end; j++){
            let product = i * j
            if(checkIfPalindrome(product)){
                if(largestPalindrome <  product){
                    largestPalindrome = product
                }
            }
        }
    }
    return largestPalindrome
}
const numOfDigits = 1
let palindrome = findPalindrome(numOfDigits)
console.log(palindrome)

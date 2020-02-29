//Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of 
// all the multiples of 3 or 5 below 1000.


//Solved 2/28/2020
//
//Notes: while this attempt manages to generalize the problem so that any two
//numbers would work, the approach for finding the Least Common Multiple prevents
//the solution from working with more than two arguments. The problem was abstracted
//so that a future revision of this code would only need to change the implementation
//for finding the least common multiple.

function greatestCommDiv(a, b){
    let temp = 0
    while( b != 0){
        temp = b
        b = a % b
        a = temp
    }
    return a
}
function leastCommMult(a,b){
    let gcd = greatestCommDiv(a, b)
    return (a / gcd) * b
}
function sumUnder(limit, ...number){
    let sum = 0
    let multCountOfEachNo = []
    for(let x in number){
        let multipleCountUnderLimit = Math.floor(limit / number[x])
        if(limit % number[x] == 0){
            multCountOfEachNo.push(multipleCountUnderLimit - 1)
        }else{
            multCountOfEachNo.push(multipleCountUnderLimit)
        }
        let sumOf1toN = (multCountOfEachNo[x] * (multCountOfEachNo[x] + 1)) / 2
        sum += (number[x] * sumOf1toN)
    }
    return sum
}
function sumUnderWithoutDups(limit, ...number){
    let sumWithDups = sumUnder(limit, ...number)
    let lcm = leastCommMult(number[0], number[1])
    let sumOfLCM = sumUnder(limit, lcm)
    return sumWithDups - sumOfLCM
}
let limit = 1000

console.log(sumUnderWithoutDups(limit, 8, 5))
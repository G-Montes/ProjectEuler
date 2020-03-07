//Smallest multiple

//2520 is the smallest number that can be 
//divided by each of the numbers from 1 to 10 
//without any remainder. What is the smallest 
//positive number that is evenly divisible by 
//all of the numbers from 1 to 20?


//Soved 3/07/2020
//
//Notes: I had solved a version of this problem in
//the freecodecamp.org website. This is a similar
//implementation. This approach finds the lcm (least 
//common multiple) of the max number m and m-1 (which 
//I assumed would be the product of the two numbers) 
//and then checks to see if n through m-2 are factors. 
//If they're not, then you keep iterating through the 
//multiples of the lcm until a match is found. 
//Initially, this implementation found the lcm of the 
//two input numbers. I then realized that getting the lcm 
//of the last two numbers of the range would result in 
//bigger jumps, lessening the number of multiples that 
//needed to be generated. A much smaller improvement 
//was that I only generated the array for n through m-2 
//since m and m-1 were guaranteed to be factors of the lcm.

//Again, an alternative solution would be to find the lcm
//of all the numbers using prime factorization. A future 
//implementaion will include this solution, as some of the
//earlier euler problems will benefit from having a prime
//factorization function.

function leastCommonMultiple(a, b){
    let inputs = [a,b].sort((a,b) => a-b)
    //the lcm of the last two numbers in the range
    let lcm = Math.pow(inputs[1], 2) - inputs[1]
    let multiple = lcm
    //array of the smallest number to the largest number minus 2
    let rangeOfNums = Array.from(new Array(Math.abs(a - b) - 1), (x,i) => i + inputs[0])
    let evenlyDiv = false
    while(evenlyDiv == false){
        evenlyDiv = rangeOfNums.every((currentValue) => {
            return lcm % currentValue == 0? true: false
        })
        //Will break once all numbers in the array are evenly divisible
        if(evenlyDiv){
            break
        }else{
            lcm += multiple
        }
    }
    return lcm
}
let result = leastCommonMultiple(1,10)
console.log(result)
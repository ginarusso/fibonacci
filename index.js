// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,144,233,377,610,987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229

// 0, 1, 0+1 = 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13, 8+13=21

// print out first 20 fibonacci numbers

const numberOfTerms = 20;

let prevNum1 = 0;
let prevNum2 = 1;
let nextTerm;

console.log(prevNum1);
console.log(prevNum2);

// for (let currentCount = 3; currentCount <= numberOfTerms; currentCount++) {
//     nextTerm = prevNum1 + prevNum2;
//     console.log(nextTerm);
    
//     prevNum1 = prevNum2;
//     prevNum2 = nextTerm;
// }
let currentCount = 3; 
while (currentCount <= numberOfTerms) {
    nextTerm = prevNum1 + prevNum2;
    console.log(nextTerm);
    
    prevNum1 = prevNum2;
    prevNum2 = nextTerm;
    currentCount++
}


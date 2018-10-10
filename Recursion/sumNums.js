// Write a function, sumNums, that takes a number greater than 1 and returns the sum of all the numbers between the given number and 1. Use recursion.

function sumNums(num, result = []){
    let reducer = (a, c) => a+c;
    
    if (num >= 1){
        result.push(num);
        return sumNums(num - 1, result);

    }else{
        // console.log(result);
        return result.reduce(reducer);  
        }
        
        
    }


function sumNum(num, sum = 0){
    if (num > 2){
        sum += (num - 1);
        return sumNum(num - 1, sum)
    }else{
        return sum;
    }
}
console.log(sumNum(8)); // => 6 (3 + 2 + 1)

// let arr1 = [4, 3, 2, 1];

// let totale = arr1.reduce(function(acc, curVal){
//     return acc + curVal;
// });

// console.log('totale: ' + totale);


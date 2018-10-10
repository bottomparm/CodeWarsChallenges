// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

let uniqueInOrder = function(input){
    let result = [];

    for (let i = 0; i < input.length; i++){
        if (i === 0){
            result.push(input[i]);
        }else if(input[i-1] !== input[i]){
            result.push(input[i]);
        }
    }
    return result;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // == ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));       //  == ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));     //  == [1,2,3]
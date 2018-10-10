// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another place in the number.

// Doing so, find the smallest number you can get.

// #Task: Return an array or a tuple or a string depending on the language (see "Sample Tests") with

// 1) the smallest number you got
// 2) the index i of the digit d you took, i as small as possible
// 3) the index j (as small as possible) where you insert this digit d to have the smallest number.
// Example:

// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

// smallest(209917) --> [29917, 0, 1] or ...

// [29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than 
// index `i` in [29917, 0, 1].
// 29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.

// smallest(1000000) --> [1, 0, 6] or ...

let smallest = function(num){
    let numArr = num.toString().split('').map(function(a) {return parseInt(a)});

    function findSmallGuy(arr, count = 0){
        let smallVal = 10;
        let smallInd = 0;
        // let result = [];
        
        for (let i = 0; i < arr.length; i++){
            if (arr[i] <= smallVal){
                smallVal = arr[i];
                smallInd = i;  
                    
            }
            //console.log('smallVal: ' + smallVal, 'smallInd: ' + smallInd, 'count: ' + count);
        }
    
        if (arr.length === 1){
            return 'we\'re done here';
        }else if(smallInd === 0){
            count ++;
            return findSmallGuy(arr.slice(1, arr.length), count)
        }else{
            return [smallVal, smallInd + count, count];
        }
    }
    
    let findings = findSmallGuy(numArr);
    if (findings === 'we\'re done here'){
        return [num, 0, 0];
    }else{
        numArr.splice(findings[1], 1);
        numArr.splice(findings[2], 0, findings[0]);
        return [Number(numArr.join('')), findings[1], findings[2]];
    }
}

console.log(smallest(111111111));

function findSmallGuy(arr, count = 0){
    let smallVal = 10;
    let smallInd = 0;
    // let result = [];
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < smallVal){
            smallVal = arr[i];
            smallInd = i;  
                
        }
        console.log('smallVal: ' + smallVal, 'smallInd: ' + smallInd, 'count: ' + count);
    }

    if (arr.length === 1){
        return 'we\'re done here';
    }else if(smallInd === 0){
        count ++;
        return findSmallGuy(arr.slice(1, arr.length), count)
    }else{
        return smallInd + count;
    }
}

//console.log(findSmallGuy([1, 2, 3, 4, 5, 1]));
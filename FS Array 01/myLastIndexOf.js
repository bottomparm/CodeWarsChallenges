// Define a function, myLastIndexOf, that accepts up to three arguments:

// array
// searchValue
// startIdx (optional)
// myLastIndexOf should return the last index at which the searchValue appears in the array.

// myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
// If the searchValue isn't in the array, myLastIndexOf should return -1.

// myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1
// If startIdx is defined, myLastIndexOf should start looking for the seachValue at that index, and then move toward the front of the array as it looks for the value.

// myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
// You cannot use the built-in .lastIndexOf method for this problem, but feel free to use it in the future! Note that strings also have a .lastIndexOf method.


 function myLastIndexOf(arr, searchValue, startIdx){
     for(let i = arr.length-1; i >= 0; i--){
         if(arr[i] === searchValue){
             return i;
         }
     }
     return -1;
 }

console.log(myLastIndexOf([12,0,4,1,2,12,4,5], 4));


// let x = [1,2,3,4,5,6,7,10];
// console.log(x.indexOf(10));
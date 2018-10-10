function myForEach(arr, func){
    for (i = 0; i < arr.length; i++){
        func(arr[i], i);
    }
}

let sum = 0;

function addToSum(num) {
    sum += num;
}

let nums = [1, 2, 3];

myForEach(nums, addToSum);

console.log(sum); // 6
let simpleArr = [1, 2, 3];
let nestedArr = [1, [2, 3]];
let nestedArr2 = [1, [2, 3], 4];

function deeperCopy(arr) {
    let copy = [];
    for (let i = 0; i < arr.length; i++) {
        //screen for nested arrays
        if (Array.isArray(arr[i])) {
            //find nested data, push recursively
            copy.push(deeperCopy(arr[i]));
            console.log(arr[i]);
        } else {
            //if primitive data, push to copy
            copy.push(arr[i]);
        }
    }
    return copy;
}

console.log(deeperCopy(simpleArr));
//[1, 2, 3]

console.log(deeperCopy(nestedArr));
// [1, [2, 3]]

console.log(deeperCopy(nestedArr2));
// [1, [2, 3], 4]
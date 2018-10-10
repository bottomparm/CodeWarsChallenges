let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reducer = (acc, cumVal) => cumVal;
console.log(arr.reduce(function(a, cV, cI, ar){
    return a + cV;
}));
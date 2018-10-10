function rotateArray(arr, rotateNum){
    let arrCopy = JSON.parse(JSON.stringify(arr));
    
    let arr1 = arrCopy.slice(-rotateNum, arrCopy.length);
    
    for (i = 0; i < arrCopy.length-rotateNum; i++){
        arr1.push(arrCopy[i]);
    }

    return arr1;
}


console.log(rotateArray([1, 2, 3, 4, 5], 1)) // => [5, 1, 2, 3, 4]
function mySlice(arr, startIdx, endIdx){
    let arrCopy = JSON.parse(JSON.stringify(arr));
    result = [];
    
    // console.log(arrCopy[-2]);
    // console.log(arrCopy);

    if(startIdx < 0 && endIdx < 0){
        for( i = arrCopy.length+startIdx; i < arrCopy.length+endIdx; i++){
            result.push(arrCopy[i])
        }
        return result
    }
    
    if(startIdx < 0){
        for( i = arrCopy.length+startIdx; i < arrCopy.length; i++){
            result.push(arrCopy[i])
        }
        return result
    }

    if(endIdx < 0){
        for( i = startIdx; i < arrCopy.length+endIdx; i++){
            result.push(arrCopy[i])
        }
        return result
    }
    
    if(startIdx === undefined){
        return arrCopy;
    }
    
    if(endIdx === undefined){
        for( i = startIdx; i < arrCopy.length; i++){
            result.push(arrCopy[i])
        }
        return result
    }
    
    for( i = startIdx; i < endIdx; i++){
        result.push(arrCopy[i])
    }
    return result;
}

console.log(mySlice([1, 2, 3], -3, -1)) // => [3]

// let myArr = [1,2,3,4];
// console.log(myArr[-2]);

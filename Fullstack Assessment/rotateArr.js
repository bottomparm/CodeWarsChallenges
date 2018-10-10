function rotate(arr, steps, count = 0) {
    
    newArr = JSON.parse(JSON.stringify(arr));
    

    if (count < steps){
        newArr.splice(0, 0, newArr.pop())
        
        count ++;
        rotate(newArr, steps, count);
    }
        return newArr;
    

}

console.log(rotate([1, 2, 3, 4, 5], 2));


function chainReaction(val, arr){
    let x;
    for (i=0; i<arr.length-1; i++){
        if (i === 0){
            x = arr[i](val);
            // console.log('x: ' + x);
        } else {
            x = arr[i](x);
        }
    }
    if (arr.length === 1){
        return arr[i](val);
    }else {
    return arr[arr.length-1](x);
}
}

function addTen(num) {
    return num + 10;
  }
  
  function subtractFive(num) {
    return num - 5;
  }
  
  function multiplyFive(num) {
    return num * 5;
  }
  
  console.log(chainReaction(0, [addTen, subtractFive, multiplyFive])); // => 25
  console.log(chainReaction(0, [subtractFive])); // => -15
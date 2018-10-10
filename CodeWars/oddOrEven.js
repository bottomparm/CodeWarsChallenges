function oddOrEven(array) {
    if(array[0] === undefined){
      return 'even';
      }else{
        if (array.reduce((e, i) => e + i) % 2 === 0){
         return 'even';
         }else{
           return 'odd';
           }
           }
  }

  console.log(oddOrEven([]));
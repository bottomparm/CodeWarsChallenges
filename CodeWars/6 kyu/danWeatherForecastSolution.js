var forecast_01 = {
    "temperature": [
        [15,17,19,21,21,21,20,16],
        [16,17,22,22,22,22,20,16],
        [12,17,19,20,20,20,20,18],
        [14,15,19,19,20,22,18,17],
        [15,17,24,24,24,20,20,20]
    ]
 };

function getMostFrequent(mainArrayObj){
    let mainArray = mainArrayObj.temperature;
    let newArray = [];
    let rememberNowValue = 0;
      for (let i = 0; i < 5; i++) {
        let rememberSame = 0;
        for (let j = 0; j < 8; j++) {
           let totalSame = 0;
           for (let k = 0; k < 8; k++) {
               if ( mainArray[i][j] === mainArray[i][k] ) {
                   
                  totalSame++;
                  console.log(mainArray[i][j], mainArray[i][k]);  
                  //console.log('array: ' + i, 'element: ' + mainArray[i][j], 'rememberSame: ' + rememberSame, 'totalSame: ' + totalSame);

                  if (totalSame >= rememberSame) {
                      rememberNowValue = mainArray[i][j];
                      rememberSame = totalSame;
                  } // End of 2nd if statement
               } // End of 1st if statement
            } // End of 3rd for loop
         } // End of 2nd for loop
        newArray.push(rememberNowValue);
      } // End of 1st for loop
      return newArray;
      }

console.log(getMostFrequent(forecast_01)); // should return [21,22,20,19,20]

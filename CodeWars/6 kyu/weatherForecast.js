// Input: A 5-day JSON weather forecast which consist of 5 arrays. Each of the 5 arrays includes 8 numbers which represent 3-hourly temperature forecast for a given day.

// Output: An array which includes the most frequent number (temperature) from each of the 5 arrays (days). In case there is a tie, return the value present later in a given array (day).

// Example input:


//console.log(forecast_01['temperature'][1][0]);

function getMostFrequentDylan(obj){
    finalResult = [];
    
    for (let i = 0; i < obj['temperature'].length; i++){
        let storage = {};
        for (let j = 0; j < obj['temperature'][i].length; j++){
            
            if (storage.hasOwnProperty(obj['temperature'][i][j])){
                storage[obj['temperature'][i][j]] ++;
            }else{
                storage[obj['temperature'][i][j]] = 1;
            }
        }console.log(storage);
        let keyArray = [];
        let winner;
        for (let key1 in storage){
            keyArray.push(storage[key1]);
        }
        winner = keyArray.sort().pop();
        
        for (let key2 in storage){
            if (winner === storage[key2]){
                finalResult.push(key2);
            }
        }
    }
    return finalResult;
}

var forecast_01 = {
    "temperature": [
        [15,17,19,21,21,21,20,16],
        [16,17,22,22,22,22,20,16],
        [12,17,19,20,20,20,20,18],
        [14,15,19,19,20,22,18,17],
        [15,17,24,24,24,20,20,20]
    ]
 };

let getMostFrequentDan = function(obj){
    let array = obj.temperature;
    let result = [];
    let highroller = 0;
    
    for (let i = 0; i < array.length; i++){
        
        let reigningChamp = 0;
        for (let j = 0; j < array[i].length; j++){
            let contender = 0;
            
            for (let k = 0; k < array[i].length; k++){
                if (array[i][j] === array[i][k]){
                    contender ++;
                    if (contender >= reigningChamp){
                        highroller = array[i][j];
                        reigningChamp = contender;
                    }
                }
            } // array[i][k] loop

        } // array[i][j] loop
        result.push(highroller);
    } // array[i] loop
    return result;
} // endFunction

// Example output:

console.log(getMostFrequentDan(forecast_01)); // should return [21,22,20,19,20]

// Explanation of the example above:

// The output is [21,22,20,19,20] because given 5 arrays, 
// [15,17,19,21,21,21,20,16] 21 is the most frequent in 1st array
// [16,17,22,22,22,22,20,16] 22 is the most frequent in 2nd array
// [12,17,19,20,20,20,20,18] 20 is the most frequent in 3rd array
// [14,15,19,19,20,22,18,17] 19 is the most frequent in 4th array
// [15,17,24,24,24,20,20,20] 24 and 20 appear 3 times each in 5th array so 20 is included in the output as the last 20 appears later than the last 24.
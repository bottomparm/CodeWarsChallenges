// This challenge will test your ability to iterate through an array of objects and work with each objects key/value pairs.

// Using nested loops on arrays that contain objects is a really common sticking point. Don't give up!

// Create a function getAllPairs that is a correctly formatted JavaScript function.

// getAllPairs must accept an array as a parameter.

// getAllPairs should return an array containing strings. Each string should be equal to the key/value pairs of each object in the parameter array, in the following format:
// "key:value"


let myArr = [
    {"fruit":"apple"},
    {"vegetable":"spinach"},
    {"dairy":"cheese"}];

function getAllPairs(param){
    let finalAnswer = [];
    for (i = 0; i < param.length; i++){
        for (let key in param[i]){
            finalAnswer.push(key + ":" + param[i][key]);
        }
    }

    return finalAnswer;

}


console.log(getAllPairs(myArr)); // => ["fruit:apple","vegetable:spinach","dairy:cheese"]

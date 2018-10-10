// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

function list(arr){
    let result = '';

    for (let i = 0; i < arr.length; i++){
        for (let key in arr[i]){
            if (arr.length === 1){
                return arr[i][key];
            }
            
            if (i === arr.length-1){
                result += ' & ' + arr[i][key];
            }else if(i === 0){
                result += arr[i][key];
            }else{
                result += ', ' + arr[i][key];
            }
        }
    }
    return result;
}
console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
// returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));
// returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]));
// returns 'Bart'

console.log(list([]));
// returns ''


function optimalList(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }

console.log(optimalList([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
// returns 'Bart, Lisa & Maggie'
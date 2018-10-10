// My Join
// Define a function, myJoin, that accepts up to two arguments:

// array
// separator (string, optional)
// myJoin should return a string with all of the elements from the array joined togther. // The separator should separate the joined elements:

// myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
// myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"
// If separator is undefined, use ',' as the default separator.

// myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"
// If any elements in the array are undefined or null, they should be replaced with an // empty string in the returned string.


function myJoin(arr, sep){
    let x = '';
    if (sep === undefined){
        for (i = 0; i < arr.length-1; i++){
            if (typeof arr[i] === 'null' || typeof arr[i] === 'undefined'){
            x += ('' + ',');
            } else {
                x += (arr[i] + ',');
            }
        }
        
     x += arr[arr.length-1];
    return x;
    }
    
    for (i = 0; i < arr.length-1; i++){
        if (arr[i] === null || arr[i] === undefined){
        x += ('' + sep);
        } else {
            x += (arr[i] + sep);
        }
    }
    
    x += arr[arr.length-1];
    return x;
    }
console.log(myJoin([null, 'came, ', 'saw, ', 'conquered.'], 'I ')); // => "hello--world"
// Do not use the built-in .join array method in your answer. Feel free to use it in all // future problems though!
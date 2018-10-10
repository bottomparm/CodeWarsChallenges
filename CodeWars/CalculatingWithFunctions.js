function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five(func) {
    if (func){
        return;
    }else{
        return 5;
    }
}
function six() {}
function seven(func) {
    if (func(xz)){
        return func(func, 7);
    }else{
        return 7;
    }
}

function eight() {}
function nine() {}

// operators
function plus(func, num) {
    return func;
}
function minus(func, num) {
    return func;
}
function times(func, num) {
    return func * num;
}
function dividedBy(func, num) {
    return func;
}


console.log(seven(times(five()))); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
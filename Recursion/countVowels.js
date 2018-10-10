// Write a function, countVowels, that accepts a string and returns the number of vowels in that string. Use recursion.

function countVowels(str, count = 0){
    
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    
    if (str.length === 0){
        return count;
    }else{
        if (vowels.includes(str[str.length-1])){
            count ++;
        }
    }   return countVowels(str.slice(0,str.length-1), count);
}

console.log(countVowels('Four score and seven years')); // => 9
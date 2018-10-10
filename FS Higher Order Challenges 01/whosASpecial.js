function whosASpecial(arr){
    let result = '';
    let x = [];
    arr.forEach(function(e,i,a){
        for (key in arr[i]){         
        }
        x.push(arr[i].name + ' the ' + arr[i].species + ' is very special!');
    })

    for (i = 0; i < x.length-1; i++){
        result += (x[i] + ' ');
    }

    result += x[x.length-1];
    return result;
}

let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];

console.log(whosASpecial(specialPets));
// => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!